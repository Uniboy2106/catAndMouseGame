var bg,bgImg;
var cat, catImg, catChase;
var mouse, mouseImg, mouseTease;
var happyCat, happyMouse, object = "notOk";

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");

    catImg = loadAnimation("images/cat1.png");
    catChase = loadAnimation("images/cat2.png","images/cat3.png");

    mouseImg = loadAnimation("images/mouse1.png");
    mouseTease = loadAnimation("images/mouse2.png","images/mouse3.png");

    happyCat = loadAnimation("images/cat4.png");
    happyMouse = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,windowHeight);
    //create tom and jerry sprites here

    bg = createSprite(500,height/2);
    bg.addImage("background", bgImg);
    bg.scale = 0.9;

    cat = createSprite(width-130,height-80,80,40);
    cat.addAnimation("cat", catImg);
    cat.addAnimation("cat_Chase",catChase);
    cat.scale = 0.09;
    //cat.debug = "true";
    //cat.setCollider("rectangle",0,0,1000,1000);

    mouse = createSprite(110,height-80,20,50);
    mouse.addAnimation("mouse",mouseImg);
    mouse.addAnimation("mouse_Tease",mouseTease);
    mouse.scale = 0.08;
    //mouse.debug = "true";
    //mouse.setCollider("rectangle",0,0,500,1000)

}

function draw() {

    background("white");
    drawSprites();
    keyPressed();

    console.log(cat.width);
    
    cat.width = 80;
    cat.height = 45;
    mouse.width = 30;
    mouse.height = 60;    

    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < mouse.width/2 + cat.width/2
        && mouse.x - cat.x < mouse.width/2 + cat.width/2
        && cat.y - mouse.y < mouse.height/2 + cat.height/2
        && mouse.y - cat.y < mouse.height/2 + cat.height/2){
           cat.addAnimation("happy_cat", happyCat);
           cat.changeAnimation("happy_cat");

           mouse.addAnimation("happy_mouse", happyMouse);
           mouse.changeAnimation("happy_mouse");
    }
}


function keyPressed(){
    //For moving and changing animation write code here

    if(keyDown("up")){
        cat.y = cat.y-3;
        //cat.addAnimation("cat_Chase",catChase);
        cat.changeAnimation("cat_Chase",catChase);

        //mouse.addAnimation("mouse_Tease",mouseTease);
        mouse.changeAnimation("mouse_Tease",mouseTease);
    }
    else if(keyDown("down")){
        cat.y = cat.y+3;
        //cat.addAnimation("cat_Chase",catChase);
        cat.changeAnimation("cat_Chase",catChase);

        //mouse.addAnimation("mouse_Tease",mouseTease);
        mouse.changeAnimation("mouse_Tease",mouseTease);
    }
    else if(keyDown("left")){
        cat.x = cat.x-3;
        //cat.addAnimation("cat_Chase",catChase);
        cat.changeAnimation("cat_Chase",catChase);

        //mouse.addAnimation("mouse_Tease",mouseTease);
        mouse.changeAnimation("mouse_Tease",mouseTease);
    }
    else if(keyDown("right")){
        cat.x = cat.x+3;
        //cat.addAnimation("cat_Chase",catChase);
        cat.changeAnimation("cat_Chase",catChase);

        //mouse.addAnimation("mouse_Tease",mouseTease);
        mouse.changeAnimation("mouse_Tease",mouseTease);
    }
    else{
        cat.changeAnimation("cat",catImg);
        mouse.changeAnimation("mouse",mouseImg);
    }
}