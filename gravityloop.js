let planets = [0,1,2,3,4,5,6,7,8,9,10];
let G = 1;
let m = 1;

for (let planet of planets) {
    for(let otherPlanet of planets) {
        let dist = otherPlanet - planet;
        let gravityF = G * m * m / (dist*dist);
        document.body.innerHTML += 'planet: ' + planet +'<br>';
        document.body.innerHTML += 'otherPlanet: ' + otherPlanet +'<br>';
        document.body.innerHTML += 'graviti:' + gravityF + '<br>';
        document.body.innerHTML += 'dis:' + dist + '<hr>';
    }
}