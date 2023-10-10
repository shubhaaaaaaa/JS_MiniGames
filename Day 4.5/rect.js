const canvas = document.getElementById("canvas");
const c = canvas.getContext('2d');

//make class
class Box {

    //variable all functions can use
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = 120;
        this.height = 80;   
        this.color = "white"; 
        this.xSpeed = 2; 
        this.ySpeed = 2;        
    }

    //functions the class can do
    draw(){
        c.beginPath();
        c.fillStyle = this.color;
        c.rect(this.x, this.y, this.width, this.height);
        c.fill();
    }

    move(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    checkCollision(){

        if (this.x > (canvas.width - this.width)){
            this.xSpeed = -2;
            this.color = getRandomColor();
        }

        if (this.x < 0){
            this.xSpeed = 2;
            this.color = getRandomColor();
        }

        if (this.y > canvas.height - this.height){
            this.ySpeed = -2;
            this.color = getRandomColor();
        }
        
        if (this.y < 0){
            this.ySpeed = 2;
            this.color = getRandomColor();
        }
        
    }

    update(){
        this.draw();
        this.move();
        this.checkCollision();
    }
}

function getRandomColor(){
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#FFFFFF'];
    const colorIndex = Math.floor(Math.random() * colors.length);
    return colors[colorIndex];
}

const box1 = new Box();

//game loop ( make a function and request animation frame inside that function )
function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    box1.update();
    requestAnimationFrame(animate);
}

animate();