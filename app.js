let mars = {
  x: 150,
  y: 100,
  Vx: 0,
  Vy: 0,
  Ma: 1000,
  star: document.querySelector('#mars'),
}

let sun = {
  x: 600,
  y: 400,
  Vx: 0,
  Vy: 0,
  Ma: 100000,
  star: document.querySelector('#sun'),
}

let earth = {
  x: 768, //earth start position x
  y: 432, //start position y
  Vx: 0, // Speed 
  Vy: 0, // Speed
  Ma: 1000, //Mass
  star: document.querySelector('#earth'),
}
let moon = {
  x: 400,
  y: 400,
  Vx: 10, //speed
  Vy: -10, //speed
  Ma: 1, //Mass
  star: document.querySelector('#moon'),
}

let distX = earth.x-moon.x;
let distY = earth.y-moon.y;
let dist = Math.sqrt(distX * distX + distY * distY);

let Fx = 0; //force
let Fy = 0; //force
const G = 0.1; // G-constat

mars.star.style.position = 'absolute';
moon.star.style.position = 'absolute';
earth.star.style.position = 'absolute';
sun.star.style.position = 'absolute';

setInterval(time, 1000/60);

function time () {
  distX = earth.x-moon.x;
  distY = earth.y-moon.y;
  dist = Math.sqrt(distX * distX + distY * distY);

  Fx = distX * G * earth.Ma * moon.Ma / (dist * dist) ;
  Fy = distY * G * earth.Ma * moon.Ma / (dist * dist) ;
    
  moon.Vx = moon.Vx + Fx / moon.Ma;
  moon.Vy = moon.Vy + Fy / moon.Ma;
  earth.Vx = earth.Vx - Fx / earth.Ma;
  earth.Vy = earth.Vy - Fy / earth.Ma;
  mars.Vx = mars.Vx - Fx / mars.Ma;
  mars.Vx = mars.Vy - Fy / mars.Ma;
  sun.Vx = sun.Vx - Fx / sun.Ma;
  sun.Vy = sun.Vy - Fy / sun.Ma;

  moon.x = moon.x + moon.Vx;
  moon.y = moon.y + moon.Vy;
  earth.x = earth.x + earth.Vx;
  earth.y = earth.y + earth.Vy;
  mars.x = mars.x + mars.Vx;
  mars.y = mars.y + mars.Vy;
  sun.x = sun.x + sun.Vx;
  sun.y = sun.y + sun.Vy;
  
  moon.star.style.top = moon.y + 'px';
  moon.star.style.left = moon.x + 'px';
  earth.star.style.top = earth.y + 'px';
  earth.star.style.left = earth.x + 'px';
  mars.star.style.top = mars.y + 'px';
  mars.star.style.left = mars.x + 'px';
  sun.star.style.top = sun.y + 'px';
  sun.star.style.left = sun.x + 'px';
  console.log(sun);
}