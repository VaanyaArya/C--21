var canvas;
var music;
var Rect1,Rect2,Rect3,Rect4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
    Rect1 = createSprite(80,580,170,25);
    Rect1.shapeColor = "green";

    Rect2 = createSprite(260,580,170,25);
    Rect2.shapeColor = "blue";

    Rect3 = createSprite(440,580,170,25);
    Rect3.shapeColor = "black";

    Rect4 = createSprite(620,580,170,25);
    Rect4.shapeColor = "orange";

    ball = createSprite(random(20,720),100,30,30);
    ball.shapeColor = "white";
    ball.velocityY = 5;
    ball.velocityX = 2;

    music.loop();


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);
    drawSprites();

    //add condition to check if box touching surface and make it box
    if(Rect1.isTouching(ball) &&ball.bounceOff(Rect1)){
        ball.shapeColor = "green";
    }

    if(Rect2.isTouching(ball) &&ball.bounceOff(Rect2)){
        ball.shapeColor = "blue";
    }

    if(Rect3.isTouching(ball) ){
        ball.shapeColor = "black";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(Rect4.isTouching(ball) &&ball.bounceOff(Rect4)){
        ball.shapeColor = "orange";
    }
}
