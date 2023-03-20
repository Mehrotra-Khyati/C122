function preload(){

}

function setup(){
canvas = createCanvas(450,500);
canvas.position(160,140);
video = createCapture(VIDEO);
video.hide();

}

function draw(){
image(video, 0,0,400.400)

}

function take_snapshot(){
    save('image.png')
}

