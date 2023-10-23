const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const player = new Player();


//store bullets
let all_bullets = [];

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
        player.velocity.y = -5;
    }

    if (event.code === "ArrowDown") {
        player.velocity.y = 5;
    }

    if (event.code === "ArrowLeft") {
        player.velocity.x = -5;
    }

    if (event.code === "ArrowRight") {
        player.velocity.x = 5;
    }

    //!! --- shooting the bullet using space ---
    if (event.code === "Space") {
        all_bullets.push(new Bullet(player.position.x + player.size / 2.85, player.position.y - 20+ player.size /12));
    }
});



document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowUp") {
        player.velocity.y = 0;
    }

    if (event.code === "ArrowDown") {
        player.velocity.y = 0;
    }

    if (event.code === "ArrowLeft") {
        player.velocity.x = 0;
    }

    if (event.code === "ArrowRight") {
        player.velocity.x = 0;
    }
});


//Game loop
function loop() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update();


    for (let i = 0; i < all_bullets.length; i++) {
        all_bullets[i].update();
    }

    requestAnimationFrame(loop);
}

loop();

