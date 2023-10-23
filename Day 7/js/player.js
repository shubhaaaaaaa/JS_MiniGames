class Player {
    constructor() {
        this.position = {
            x: canvas.width / 2.1,
            y: canvas.height / 1.2
        };

        this.velocity = {
            x: 0,
            y: 0,
        };

        this.size = 70;

        this.image = new Image();
        this.image.src = "image/ship.png";

        this.maxX = canvas.width - this.size;
        this.maxY = canvas.height - this.size;


    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }


    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        //!! --- Boundry checks to keep the player within the canvas
        if (this.position.x < 0) {
            this.position.x = 4
        } else if (this.position.x > this.maxX) {
            this.position.x = this.maxX - 4
        }


        if (this.position.y < 0) {
            this.position.y = 0
        } else if (this.position.y > this.maxY) {
            this.position.y = this.maxY
        }
    }


    update() {
        this.draw();
        this.move();
    }
}
