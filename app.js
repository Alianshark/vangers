let mars = {
  color: "b",
  q: 10,
  x: 100,
  y: 100,
  Vx: 0,
  Vy: 0,
  Ma: 100,
  star: document.querySelector('#mars'),
}

let sun = {
  color: "r",
  q: 10,
  x: 600,
  y: 300,
  Vx: 0,
  Vy: 0,
  Ma: 100,
  star: document.querySelector('#sun'),
}

let earth = {
  color: "r",
  q: 10,
  x: 1000, //earth start position x
  y: 100, //start position y
  Vx: 0, // Speed 
  Vy: 0, // Speed
  Ma: 100, //Mass
  star: document.querySelector('#earth'),
}
let moon = { 
  color: "g",
  q: 10,
  x: 100,
  y: 600,
  Vx: 0, //speed
  Vy: 0, //speed
  Ma: 100, //Mass
  star: document.querySelector('#moon'),
}
const G = 0.01;
const k = 10000;
const c = 0.01;
let planets = [moon,earth,mars,sun];

//let distX = earth.x-moon.x;
//let distY = earth.y-moon.y;

mars.star.style.position = 'absolute';
moon.star.style.position = 'absolute';
earth.star.style.position = 'absolute';
sun.star.style.position = 'absolute';

setInterval(time, 1000/60);

function time () {
  console.log('Time: ',time);
  for (let planet of planets) {
    console.log('Planet',planet);
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
      


      console.log('dist: ',dist);
      console.log('Other Planet: ',otherPlanet);
      // calculate the speed of planet (for each personal)
      otherPlanet.Vx = otherPlanet.Vx + forceX / otherPlanet.Ma;
      otherPlanet.Vy = otherPlanet.Vy + forceY / otherPlanet.Ma;
      
      // make them fly (coordinates)
      otherPlanet.x = otherPlanet.x + otherPlanet.Vx;
      otherPlanet.y = otherPlanet.y + otherPlanet.Vy;

      // make them visualy/realy fly (move imgs)
      otherPlanet.star.style.top = otherPlanet.y + 'px';
      otherPlanet.star.style.left = otherPlanet.x + 'px';
      }
  }
} 