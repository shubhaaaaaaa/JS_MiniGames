const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const particleArr = [];
let totalParticleNumber = 0;

class Particle {
    constructor() {
        this.x = Math.random() * 400;
        this.y = Math.random() * 400;
        this.r = 10;
    }

    //functions of class
    draw(){
        c.beginPath();
        c.fillStyle = "#88ceeb";
        c.arc(this.x, this.y, this.r, 0, 360);
        c.fill();
    }

    move(){
        this.x += Math.random() * (1 - -1) + -1;
        this.y += Math.random() * (1 - -1) + -1;
    }
}

    function updateTotalParticles(){

    particleArr.length = 0;

    const totalParticleInput = document.getElementById("totalParticlesInput");
    totalParticleNumber = parseInt(totalParticleInput.value);

    for (let i=0; i<totalParticleNumber; i++){
        const obj = new Particle();
        particleArr.push(obj);
    }

    c.clearRect(0, 0, 400, 400);
    animate();

    }

    function animate(){
       
        c.clearRect(0, 0, 400, 400);

        for (let i=0; i<totalParticleNumber; i++){
            particleArr[i].draw();
            particleArr[i].move();
        }
        requestAnimationFrame(animate);
    }

