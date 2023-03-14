let mars = {
  x: 100,
  y: 100,
  Vx: 0,
  Vy: 0.2,
  Ma: 100,
  img: document.querySelector('#mars'),
}


let sun = {
  x: 600,
  y: 300,
  Vx: 0,
  Vy: 0,
  Ma: 10000,
  img: document.querySelector('#sun'),
}

let earth = {
  x: 1000, //earth start position x
  y: 100, //start position y
  Vx: 0, // Speed 
  Vy: -0.2, // Speed
  Ma: 100, //Mass
  img: document.querySelector('#earth'),
}
let moon = {
  x: 100,
  y: 600,
  Vx: 0.2, //speed
  Vy: 0, //speed
  Ma: 200, //Mass
  img: document.querySelector('#moon'),
}
let ship = {
  x: 200,
  y: 200,
  Vx: 0,
  Vy: 0,
  Ma: 20,
  img: document.querySelector('#spaceship'),
}
const G = 0.01;
let planets = [moon,earth,mars,sun,ship];

//let distX = earth.x-moon.x;
//let distY = earth.y-moon.y;

mars.img.style.position = 'absolute';
moon.img.style.position = 'absolute';
earth.img.style.position = 'absolute';
sun.img.style.position = 'absolute';
ship.img.style.position = 'absolute';
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
      let dist = Math.sqrt(distX * distX + distY * distY);
      let gravityX = distX * G * otherPlanet.Ma * planet.Ma / (dist * dist * dist);
      let gravityY = distY * G * otherPlanet.Ma * planet.Ma / (dist * dist * dist);
      console.log('dist: ',dist);
      console.log('Other Planet: ',otherPlanet);
      // calculate the speed of planet (for each personal)
      otherPlanet.Vx = otherPlanet.Vx - gravityX / otherPlanet.Ma;
      otherPlanet.Vy = otherPlanet.Vy - gravityY / otherPlanet.Ma;
      
      // make them fly (coordinates)
      otherPlanet.x = otherPlanet.x + otherPlanet.Vx;
      otherPlanet.y = otherPlanet.y + otherPlanet.Vy;

      // make them visualy/realy fly (move imgs)
      otherPlanet.img.style.top = otherPlanet.y + 'px';
      otherPlanet.img.style.left = otherPlanet.x + 'px';


      }
  }
}