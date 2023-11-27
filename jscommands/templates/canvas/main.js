let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

let cWidth = canvas.width = 400;
let cHeight = canvas.height = 400;

let pos = {x: 0, y: 0};

function update(){
    pos.x += 10;
    pos.y += 5;
    if(pos.x > cWidth)
    {
        pos.x = 0;
    }
    
    if(pos.y > cHeight)
    {
        pos.y = 0;
    }
}

function draw(){
    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.fillRect(pos.x, pos.y, 10, 10)
    
}

function step(){
    update();
    draw();
    requestAnimationFrame(step);
}
requestAnimationFrame(step);