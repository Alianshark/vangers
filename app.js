const G = 0.01;
const k = 10000;
const c = 0.01;
let planets = [];
let x = 0;


while (x < 100) {
  let id = `randomPlanet-${x}`;
  let randomIndex = Math.floor(Math.random() * 3);
  let colors = ["b","r","g"];
  let randomColor = colors[randomIndex]
  let planet = {
    color: randomColor,
    q: 10,
    x: Math.random() * 1000,
    y: Math.random() * 1000,
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

document.querySelector('#' + sun.id).style.position = 'absolute';

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
  console.log(dist);
  return dist;
  
}

setInterval(time, 1000/60);

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
      if (dist < 2*radius) {
        otherPlanet.Vx = 0;
        otherPlanet.Vy = 0;
        return;
      } 
      if (planet.color === 'r' && otherPlanet.color !== 'g' && otherPlanet !== 'b') {
        forceAction(dist,planet,otherPlanet, 1);
      }
      if ( planet.color !== otherPlanet.color) {
        forceAction(dist,planet,otherPlanet, -1);
      } else {
        forceAction(dist,planet,otherPlanet, 1);
      }
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
      
      
      // make them fly (coordinates)
      otherPlanet.x = otherPlanet.x + otherPlanet.Vx;
      otherPlanet.y = otherPlanet.y + otherPlanet.Vy;

      // make them visualy/realy fly (move imgs)
      document.querySelector('#' + otherPlanet.id).style.top = otherPlanet.y + 'px';
      document.querySelector('#' + otherPlanet.id).style.left = otherPlanet.x + 'px';
      
}