const canvas = document.getElementById("canvas"); //download game sound in ogg
const c = canvas.getContext('2d');

//load image here
const imageName = new Image();
imageName.src = "image.png";

//load background music
const bgMusic = new Audio();
bgMusic.src = "play.ogg";

function play(){
    bgMusic.play();
    bgMusic.loop() =  true;
}

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(imageName, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
}

animate();