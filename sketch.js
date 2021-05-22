var bg
var cat,catImg1,catImg2
var mouse,mouseImg1,mouseImg2

function preload() {
    //load the images here
    bg = loadImage("garden.png")
    catImg1 = loadImage("cat1.png")
    catImg2 = loadAnimation("cat2.png","cat3.png")
    mouseImg1 = loadImage("mouse1.png")
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png")
}

function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here
    cat = createSprite(800,500)
    cat.addImage(catImg1)
    cat.scale = 0.15

    mouse = createSprite(200,500)
    mouse.addImage(mouseImg1)
    mouse.scale = 0.1

}   

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("happy",mouseImg1)
        mouse.changeAnimation("happy")
        cat.velocityX = 0
        cat.addAnimation("happytoo",catImg1)
        cat.changeAnimation("happytoo")
      
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("teasing",mouseImg2)
        mouse.changeAnimation("teasing")
        mouse.frameDelay = 25
    }
    if(keyCode === LEFT_ARROW){
        cat.addAnimation("moving",catImg2)
        cat.changeAnimation("moving")
        cat.velocityX = -3
    }

}
