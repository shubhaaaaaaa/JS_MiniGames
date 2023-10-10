const canvas = document.getElementById("canvas");
const c = canvas.getContext('2d');

//make class
class Circle {

    //variable all functions can use
    constructor(){
        this.x = 50;
        this.y = 10;
        this.radiusX = 50;   
        this.radiusY = 30;   
        this.color = "white"; 
        this.xSpeed = 3; 
        this.ySpeed = 3;        
    }

    //functions the class can do
    draw(){
        c.beginPath();
        c.fillStyle = this.color;
        c.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
        c.fill();
    }

    move(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    checkCollision(){

        if (this.x > canvas.width - this.radiusX){ //right 
            this.xSpeed = -3;
            this.color = getRandomColor();
        }

        if (this.x < this.radiusX){ //left 
            this.xSpeed = 3;
            this.color = getRandomColor();
        }

        if (this.y > canvas.height - this.radiusY){ //bottom
            this.ySpeed = -3;
            this.color = getRandomColor();
        }
        
        if (this.y < this.radiusY){ //top
            this.ySpeed = 3;
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
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#FFFFFF', '#FFA500', '#FF1493', '#32CD32', '#800080', '#FF4500', '#008B8B', '#800000', '#8B008B', '#4B0082', '#2E8B57', '#ADFF2F', '#1E90FF'];
    const colorIndex = Math.floor(Math.random() * colors.length);
    return colors[colorIndex];
}

const circle1 = new Circle();

//game loop ( make a function and request animation frame inside that function )
function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    circle1.update();
    requestAnimationFrame(animate);
}

animate();