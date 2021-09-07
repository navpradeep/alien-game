var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8a2736a5-bd75-406e-af97-5ef96e968fce","f4c16f03-3143-41f8-bea4-16bdc9ac898a","a4330810-150e-459b-8fef-4ab3e7c26c2a","ebe2c4ab-c7ab-4624-9710-9398083ab19e","36504585-c682-4c08-ac58-687b1c9ba163","47ba3f68-c6c6-4020-a831-0c2ca33fe5e7","c262aae8-0fb5-494d-a875-a334e54bc18d","420f7142-1ea4-4d16-9882-2ede7c1fb616","c12b6f8c-75dc-4a93-a343-d457fc724660","dc0596ba-9f4a-4177-a306-9a8d44ddc62b","5293887f-6ffe-4a81-984e-6f49ed2cb410","080c61c2-d918-4bac-840f-6130cac8add7"],"propsByKey":{"8a2736a5-bd75-406e-af97-5ef96e968fce":{"name":"bg","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"},"f4c16f03-3143-41f8-bea4-16bdc9ac898a":{"name":"ufo","sourceUrl":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png","frameSize":{"x":386,"y":267},"frameCount":1,"looping":true,"frameDelay":2,"version":"1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":267},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1NW0s4FKF54T3qL3gQC5gOgETMnxEZZw/category_icons/ufo.png"},"a4330810-150e-459b-8fef-4ab3e7c26c2a":{"name":"asteroid","sourceUrl":null,"frameSize":{"x":900,"y":303},"frameCount":1,"looping":true,"frameDelay":12,"version":"4WMD.MDvrvwfVogZBxSkMleJGVi2FvAY","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":303},"rootRelativePath":"assets/a4330810-150e-459b-8fef-4ab3e7c26c2a.png"},"ebe2c4ab-c7ab-4624-9710-9398083ab19e":{"name":"bomb","sourceUrl":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png","frameSize":{"x":360,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ouSniUdBPmByS9qdf395XpliE0eUsMAm","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png"},"36504585-c682-4c08-ac58-687b1c9ba163":{"name":"box1","sourceUrl":"assets/api/v1/animation-library/gamelab/n7SFGXjG9Sv3BMMvZBkXmAvbXztczNjk/category_fantasy/alien_16.png","frameSize":{"x":397,"y":374},"frameCount":1,"looping":true,"frameDelay":2,"version":"n7SFGXjG9Sv3BMMvZBkXmAvbXztczNjk","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":374},"rootRelativePath":"assets/api/v1/animation-library/gamelab/n7SFGXjG9Sv3BMMvZBkXmAvbXztczNjk/category_fantasy/alien_16.png"},"47ba3f68-c6c6-4020-a831-0c2ca33fe5e7":{"name":"box2","sourceUrl":"assets/api/v1/animation-library/gamelab/6CfTmOl4M7ZK4NBT3yGSTvcGtqfnGwlL/category_fantasy/alien_05.png","frameSize":{"x":331,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"6CfTmOl4M7ZK4NBT3yGSTvcGtqfnGwlL","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":331,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6CfTmOl4M7ZK4NBT3yGSTvcGtqfnGwlL/category_fantasy/alien_05.png"},"c262aae8-0fb5-494d-a875-a334e54bc18d":{"name":"box3","sourceUrl":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png","frameSize":{"x":365,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png"},"420f7142-1ea4-4d16-9882-2ede7c1fb616":{"name":"box4","sourceUrl":"assets/api/v1/animation-library/gamelab/H68UnAuzfpkcmpvQUCSvEU5GnRrjpEmd/category_fantasy/alien_07.png","frameSize":{"x":319,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"H68UnAuzfpkcmpvQUCSvEU5GnRrjpEmd","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":319,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/H68UnAuzfpkcmpvQUCSvEU5GnRrjpEmd/category_fantasy/alien_07.png"},"c12b6f8c-75dc-4a93-a343-d457fc724660":{"name":"box5","sourceUrl":"assets/api/v1/animation-library/gamelab/rFSkVjL4teo4XWSh2V3y51SEgUoohZSx/category_fantasy/alien_08.png","frameSize":{"x":259,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"rFSkVjL4teo4XWSh2V3y51SEgUoohZSx","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":259,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/rFSkVjL4teo4XWSh2V3y51SEgUoohZSx/category_fantasy/alien_08.png"},"dc0596ba-9f4a-4177-a306-9a8d44ddc62b":{"name":"box6","sourceUrl":"assets/api/v1/animation-library/gamelab/ODu0c4yFKtVQD7zkwy3iltWFkr9NZN0s/category_fantasy/alien_17.png","frameSize":{"x":341,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ODu0c4yFKtVQD7zkwy3iltWFkr9NZN0s","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":341,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ODu0c4yFKtVQD7zkwy3iltWFkr9NZN0s/category_fantasy/alien_17.png"},"5293887f-6ffe-4a81-984e-6f49ed2cb410":{"name":"box7","sourceUrl":"assets/api/v1/animation-library/gamelab/qGpeJJg0r_caGeHtgyB2vvvKJBU6ApVC/category_fantasy/alien_14.png","frameSize":{"x":329,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"qGpeJJg0r_caGeHtgyB2vvvKJBU6ApVC","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":329,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qGpeJJg0r_caGeHtgyB2vvvKJBU6ApVC/category_fantasy/alien_14.png"},"080c61c2-d918-4bac-840f-6130cac8add7":{"name":"box8","sourceUrl":"assets/api/v1/animation-library/gamelab/FYKNgp2UPGiPvHDYlQg1t1zBAMwIy6k4/category_fantasy/alien_12.png","frameSize":{"x":331,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"FYKNgp2UPGiPvHDYlQg1t1zBAMwIy6k4","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":331,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FYKNgp2UPGiPvHDYlQg1t1zBAMwIy6k4/category_fantasy/alien_12.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

bg= createSprite(200,200,400,400)

var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";

var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

bg.setAnimation("bg")


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

paddle=createSprite(200,380,100,20)
ball=createSprite(200,200,20,20)

paddle.setAnimation("ufo")
paddle.scale=.25
createEdgeSprites()

ball.setAnimation("bomb")
ball.scale=.07

box1.setAnimation("box1")
box1.scale=.1

box2.setAnimation("box2")
box2.scale=.1

box3.setAnimation("box3")
box3.scale=.1

box4.setAnimation("box4")
box4.scale=.1

box5.setAnimation("box5")
box5.scale=.1

box6.setAnimation("box6")
box6.scale=.1

box7.setAnimation("box7")
box7.scale=.1

box8.setAnimation("box8")
box8.scale=.1

box9.setAnimation("box8")
box9.scale=.1

box10.setAnimation("box7")
box10.scale=.1

box11.setAnimation("box6")
box11.scale=.1

box12.setAnimation("box5")
box12.scale=.1

box13.setAnimation("box4")
box13.scale=.1

box14.setAnimation("box3")
box14.scale=.1

box15.setAnimation("box2")
box15.scale=.1

box16.setAnimation("box1")
box16.scale=.1


var gameState="start"


var score=0
function draw() {
  background("white");


 
 
 
  ball.bounceOff(rightEdge)
  ball.bounceOff(leftEdge)
  ball.bounceOff(topEdge)
  ball.bounceOff(paddle)
  
  
if(ball.isTouching(box1)){
playSound("assets/default.mp3", false)
box1.destroy()
score++
}

if(ball.isTouching(box2)){
 playSound("assets/default.mp3", false) 
box2.destroy()
score++
}

if(ball.isTouching(box3)){
box3.destroy()
playSound("assets/default.mp3", false)
score++
}

if(ball.isTouching(box4)){
playSound("assets/default.mp3", false)
box4.destroy()
score++
}

if(ball.isTouching(box5)){
 playSound("assets/default.mp3", false) 
box5.destroy()
score++
}

if(ball.isTouching(box6)){
playSound("assets/default.mp3", false)
box6.destroy()
score++
}

if(ball.isTouching(box7)){
  playSound("assets/default.mp3", false)
box7.destroy()
score++
}

if(ball.isTouching(box8)){
  playSound("assets/default.mp3", false)
box8.destroy()
score++
}

if(ball.isTouching(box9)){
 playSound("assets/default.mp3", false) 
box9.destroy()
score++
}

if(ball.isTouching(box10)){
playSound("assets/default.mp3", false)
box10.destroy()
score++
}

if(ball.isTouching(box11)){
  playSound("assets/default.mp3", false)
box11.destroy()
score++
}

if(ball.isTouching(box12)){
 playSound("assets/default.mp3", false) 
box12.destroy()
score++
}

if(ball.isTouching(box13)){
 playSound("assets/default.mp3", false) 
box13.destroy()
score++
}

if(ball.isTouching(box14)){
 playSound("assets/default.mp3", false) 
box14.destroy()
score++
}

if(ball.isTouching(box15)){
playSound("assets/default.mp3", false);
 playSound("assets/default.mp3", false) 
box15.destroy()
score++
}

if(ball.isTouching(box16)){
playSound("assets/default.mp3", false)
box16.destroy()
score++
}

  



  drawSprites();
textSize(40)  
  


if(gameState==="start"){
  
text("PRESS ENTER TO START",30,190)
fill("yellow")

textFont("Impact")

if(keyDown("enter")){
  
  ball.velocityX=3
  ball.velocityY=3
  gameState="play"
}
box1.visible=false;
box2.visible=false;
box3.visible=false;
box4.visible=false;
box5.visible=false;
box6.visible=false;
box7.visible=false;
box8.visible=false;
box9.visible=false;
box10.visible=false;
box11.visible=false;
box12.visible=false;
box13.visible=false;
box14.visible=false;
box15.visible=false;
box16.visible=false;


}


if(gameState==="play"){
  paddle.x=World.mouseX
  
if(ball.y>400||score===16){
  
gameState="end"  
  
}
fill("yellow")

textFont("Impact")

text("SCORE:"+score,140,40)

box1.visible=true;
box2.visible=true;
box3.visible=true;
box4.visible=true;
box5.visible=true;
box6.visible=true;
box7.visible=true;
box8.visible=true;
box9.visible=true;
box10.visible=true;
box11.visible=true;
box12.visible=true;
box13.visible=true;
box14.visible=true;
box15.visible=true;
box16.visible=true;
paddle.visible=true;

}

if(gameState==="end"){
 fill("red")

textFont("Impact") 

textSize(50)
text("GAME OVER",100,200)  
paddle.visible=false;
box1.visible=false;
box2.visible=false;
box3.visible=false;
box4.visible=false;
box5.visible=false;
box6.visible=false;
box7.visible=false;
box8.visible=false;
box9.visible=false;
box10.visible=false;
box11.visible=false;
box12.visible=false;
box13.visible=false;
box14.visible=false;
box15.visible=false;
box16.visible=false;


  
}

}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
