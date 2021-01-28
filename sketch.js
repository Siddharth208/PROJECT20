var cat, jerry, garden, catImage, jerryImage, gardenImage,catImage1,jerryAnimation;
function preload() {
    //load the images here
    catImage = loadImage("cat4.png");
    gardenImage = loadImage("garden.png");
    jerryImage = loadImage("mouse2.png");
    catImage1 = loadAnimation("cat2.png");
    jerryAnimation = loadAnimation("mouse3.png");
    catImage2=loadAnimation("cat4.png");
    jerryAnimation1=loadAnimation("mouse4.png");
}

function setup() {
    createCanvas(1000, 800);
    //create tom and jerry sprites here
    garden = createSprite(500, 400);
    garden.addImage(gardenImage);

    cat = createSprite(800, 600);
    cat.addImage(catImage);
    cat.scale=0.2;

    jerry = createSprite(200, 600);
    jerry.addImage(jerryImage);
    jerry.scale=0.2;

}

function draw() {


    //Write condition here to evalute if tom and jerry collide
    
        keyPressed();

        if(cat.x - jerry.x<(cat.width - jerry.width)/2){
         cat.addAnimation("catimage",catImage2);
         cat.changeAnimation("catimage");
         jerry.addAnimation("jerryimage",jerryAnimation1);
         jerry.changeAnimation("jerryimage");
            cat.velocityX=0;   
        }

    drawSprites();
}


function keyPressed() {

    //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        cat.velocityX = -5;
        cat.addAnimation("CAT_RUNNING", catImage1);
        cat.changeAnimation("CAT_RUNNING");
        jerry.addAnimation("jerry",jerryAnimation);
        jerry.changeAnimation("jerry");
    }

}

