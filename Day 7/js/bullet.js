class Bullet {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y,
        };

        this.velocity = {
            x: 0,
            y: -10,
        };

        this.size = 20;

        this.image = new Image();
        this.image.src = "image/bullet.png";
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }

    move() {
        this.position.y += this.velocity.y;
    }

    update() {
        this.draw();
        this.move();
    }
}