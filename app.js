let mars = {
  color: "b",
  q: 10,
  x: 100,
  y: 100,
  Vx: 0,
  Vy: 0,
  Ma: 100,
  id: 'mars',
}

let sun = {
  color: "r",
  q: 10,
  x: 600,
  y: 300,
  Vx: 0,
  Vy: 0,
  Ma: 100,
  id: 'sun',
}

let earth = {
  color: "r",
  q: 10,
  x: 1000, //earth start position x
  y: 100, //start position y
  Vx: 0, // Speed 
  Vy: 0, // Speed
  Ma: 100, //Mass
  id: 'earth',
}
let moon = { 
  color: "g",
  q: 10,
  x: 100,
  y: 600,
  Vx: 0, //speed
  Vy: 0, //speed
  Ma: 100, //Mass
  id: 'moon',
}
const G = 0.01;
const k = 10000;
const c = 0.01;
let planets = [moon,earth,mars,sun];
let x = 0;

while (x<10) {
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
  console.log(planet);
  planets.push(planet);
  x += 1;
}
console.log(planets);
//let distX = earth.x-moon.x;
//let distY = earth.y-moon.y;
document.querySelector('#' + mars.id).style.position = 'absolute';
document.querySelector('#' + moon.id).style.position = 'absolute';
document.querySelector('#' + earth.id).style.position = 'absolute';
document.querySelector('#' + sun.id).style.position = 'absolute';



setInterval(time, 1000/60);

function time () {
  console.log('Time: ',time);
  for (let planet of planets) {
   // console.log('Planet',planet);
    for(let otherPlanet of planets) {
      if(otherPlanet==planet){
        continue;
      }
      let distX = otherPlanet.x - planet.x;
      let distY = otherPlanet.y - planet.y;
      let forceX;
      let forceY;

      let dist = Math.sqrt(distX * distX + distY * distY);
      if ( planet.color === planet.color) {
        forceX = -distX / dist * c * otherPlanet.q * planet.q ;
        forceY = -distY / dist * c * otherPlanet.q * planet.q ;
      } else {
        forceX = distX / dist * c * otherPlanet.q * planet.q ;
        forceY = distY / dist * c * otherPlanet.q * planet.q ;
      }
      


     // console.log('dist: ',dist);
   //   console.log('Other Planet: ',otherPlanet);
      // calculate the speed of planet (for each personal)
      otherPlanet.Vx = otherPlanet.Vx + forceX / otherPlanet.Ma;
      otherPlanet.Vy = otherPlanet.Vy + forceY / otherPlanet.Ma;
      
      // make them fly (coordinates)
      otherPlanet.x = otherPlanet.x + otherPlanet.Vx;
      otherPlanet.y = otherPlanet.y + otherPlanet.Vy;

      // make them visualy/realy fly (move imgs)
      document.querySelector('#' + otherPlanet.id).style.top = otherPlanet.y + 'px';
      document.querySelector('#' + otherPlanet.id).style.left = otherPlanet.x + 'px';
      
      }
  }
} 