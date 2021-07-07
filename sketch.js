var balloon,balloonImage1,balloonImage2;



function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(450,350,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;


  var balloonPosition=database.ref('balloon/height')
    balloonPosition.on("value",readHeight,showError)


  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(-5,0)
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(5,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-20)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale -0.01
    
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,20)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale +0.01
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function updateHeight(x,y){
database.ref('balloon/height').set({
  'x':height.x+x,
  'y':height.y+y
})
}

function readHeight(data){
height=data.val()
  balloon.x=height.x,
  balloon.y=height.y

}

function showError(){
  console.log("Error in writing to the database")
}