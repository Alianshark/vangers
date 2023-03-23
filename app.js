const G = 0.01;
const k = 10000;
const c = 0.01;
let planets = [];
let x = 0;

createPlanets();
setInterval(time, 1000/60);


function createPlanets() {
  while (x < 100) {
    let id = `randomPlanet-${x}`;
    let randomIndex = Math.floor(Math.random() * 3);
    let colors = ["b","r","g"];
    let randomColor = colors[randomIndex]
    let planet = {
      color: randomColor,
      q: 10,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      Vx: 0, //speed
      Vy: 0, //speed
      Ma: 100, //Mass
      id: id,
    };
    console.log(randomColor);
    console.log(randomIndex); 
    document.body.innerHTML += `<div id="${id}"> </div>`;
    document.querySelector('#' + planet.id).style.position = 'absolute';
    if (planet.color === 'r') {
      document.querySelector('#' + planet.id).style.background = 'red';
    }
    if (planet.color === 'b') {
      document.querySelector('#' + planet.id).style.background = 'blue';
    }
    if (planet.color === 'g') {
      document.querySelector('#' + planet.id).style.background = 'green';
    }
    planets.push(planet);
    x += 1;
  }
}

function forceAction (dist,planet,otherPlanet,znak) {
  let distX = otherPlanet.x - planet.x;
  let distY = otherPlanet.y - planet.y;
  let forceX =  znak * distX / dist * c * otherPlanet.q * planet.q ;
  let forceY = znak * distY / dist * c * otherPlanet.q * planet.q ;

  otherPlanet.Vx = otherPlanet.Vx + forceX / otherPlanet.Ma;
  otherPlanet.Vy = otherPlanet.Vy + forceY / otherPlanet.Ma;
}

function getDist (planet, otherPlanet) {
  let distX = otherPlanet.x - planet.x;
  let distY = otherPlanet.y - planet.y;
  let dist = Math.sqrt(distX * distX + distY * distY);
  return dist;  
}


function time () {
  for (let planet of planets) {
    for(let otherPlanet of planets) {
      if (otherPlanet == planet) {
        // No force between same planets 
      } else {
        tolkniPlanety(planet,otherPlanet);
      } 
    }
  }
} 

function tolkniPlanety (planet,otherPlanet) {
  const radius = 10;
  let dist = getDist(planet,otherPlanet);
  otragenie(otherPlanet,radius);
  antiCollapse(planet,otherPlanet,radius,dist);
  //colorForce(planet,otherPlanet,dist);
  moveCoordinate(otherPlanet);
  moveVisually(otherPlanet);      
}

// make them visualy/realy fly (move imgs)
function moveVisually (otherPlanet) {
  document.querySelector('#' + otherPlanet.id).style.top = otherPlanet.y + 'px';
  document.querySelector('#' + otherPlanet.id).style.left = otherPlanet.x + 'px';
}

// make them fly (coordinates)
function moveCoordinate (otherPlanet) {
  otherPlanet.y = otherPlanet.y + otherPlanet.Vy;
  otherPlanet.x = otherPlanet.x + otherPlanet.Vx;
}

function colorForce (planet,otherPlanet,dist) {
  if (planet.color === 'r' && otherPlanet.color !== 'g' && otherPlanet !== 'b') {
    forceAction(dist,planet,otherPlanet, 1);
  }
  if ( planet.color !== otherPlanet.color) {
    forceAction(dist,planet,otherPlanet, -1);
  } else {
    forceAction(dist,planet,otherPlanet, 1);
  }    
}

function antiCollapse (planet,otherPlanet,radius,dist) {
  if (dist < 10*radius) {
    const k = 0.15;
    let distX = otherPlanet.x - planet.x;
    let distY = otherPlanet.y - planet.y;
    let forceX = k / dist;
    let forceY = k / dist;
    otherPlanet.x += forceX * distX;
    otherPlanet.y += forceY * distY;
  
    return;
  }
}

function otragenie (otherPlanet, radius) {
  if (otherPlanet.x < radius ) {
    otherPlanet.Vx = otherPlanet.Vx * (-1);
  }
  if (otherPlanet.x > window.innerWidth - radius) {
    otherPlanet.Vx = otherPlanet.Vx * (-1);
  }
  if (otherPlanet.y < radius) {
    otherPlanet.Vy = otherPlanet.Vy * (-1);
  }
  if (otherPlanet.y > window.innerHeight - radius) {
    otherPlanet.Vy = otherPlanet.Vy * (-1);
  }
}