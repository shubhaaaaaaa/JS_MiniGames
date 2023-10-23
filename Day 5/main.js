const canvas = document.getElementById("canvas");
const c = canvas.getContext('2d');


class Rect {

    constructor(){

      this.position = {
        x : 0,
        y : 0,
      }      

      this.size = {
        height : 50,
        width : 50,
      }        

      this.velocity = {
        x : 1,
        y : 1,
      }    
      
      this.acceleration = 0.1;
    }
    
    draw() {
        c.beginPath();
        c.fillStyle = 'white';
        c.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        c.fill();

    }

    move(){
        this.velocity.y += this.acceleration;
        this.position.y += this.velocity.y;
    }

    checkCollision(){
        if (this.position.y > canvas.height - this.size.height){
            this.velocity.y = this.velocity.y * -0.8;
        }
    }

    update() {
        this.draw();
        this.move();
        this.checkCollision();
        
    }
}

const obj = new Rect();

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    obj.update();
    window.requestAnimationFrame(animate);
}

animate();