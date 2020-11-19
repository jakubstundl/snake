'use strict';
class snakeRunner {
 
    constructor(speed) {
        var x=0;
        var y=0;
        var xs = "00";
        var ys = "00";        
        var speedT = 1000/speed;
        var snakeColor = "white";
        var backgroundColor = 'black';
        var snakeStartLength =3;
        
        var snakeItSelf=[""];
        var candy = "";
        var direction="right";
        var candyEaten = false;
        var selfCrush = false;
        var ft =0;
        var score = 0;
        
       
        
        
        
    //console.log(tabulka.Dimx)   ;     
   snakeStart();
   spawnCandy();
        var timer = setInterval(myTimer,speedT);   

   
  

//console.log("after onkey");

    document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            if(ft===0){ft=1;
            if(direction!=="right"){
            direction = "left";}
            break;
        }
        case 38:
            if(ft===0){ft=1;
            if(direction!=="down"){
           direction = "up";}
            break;
            }
        case 39:
            if(ft===0){ft=1;
            if(direction!=="left"){
            direction = "right";}
            break;
            }
        case 40:
            if(ft===0){ft=1;
            if(direction!=="up"){
            direction = "down";}
            break;
            }
    }
   
}

        function myTimer(){
   //console.log("direction="+direction+" x= "+x+" y= "+y);
   ft=0;
if (direction==="right"){moveRight();}
if (direction==="left" ){moveLeft(); }
if (direction==="down" ){moveDown(); }
if (direction==="up"   ){moveUp();   }
move(ys,xs);
candyEaten = false;

}

function snakeStart(){
   x=snakeStartLength-1;
   
    for(var i=0;i<snakeStartLength;i++){
    snakeItSelf[i]=""+i+"";       
   }
   
   
   for (var i=0;i<snakeStartLength;i++){
        document.getElementById("td000"+i+"").style.backgroundColor=snakeColor;
        var num = x-i;
        snakeItSelf[i]= "td000"+num+"";
   
    }
   snakeItSelf.push("SoEmpty");}
   

function moveLeft(){
    //console.log("moveLeft has been called");
    x--;
  WallTeleport();
    if(x<10){xs="0"+x;}else{xs=""+x;}
 document.getElementById("td"+ys+""+xs).style.backgroundColor=snakeColor;
}

function moveUp(){
   // console.log("moveUp has been called");
    y--;
    WallTeleport();
    if(y<10){ys="0"+y;}else{ys=""+y;}
 document.getElementById("td"+ys+""+xs).style.backgroundColor=snakeColor;
}

function moveRight(){
    //console.log("moveRight has been called");
 x++;
 WallTeleport();
 if(x<10){xs="0"+x;}else{xs=""+x;}
 document.getElementById("td"+ys+""+xs).style.backgroundColor=snakeColor;
 
}

function moveDown(){
    //console.log("moveDown has been called");
 y++;
 WallTeleport();
 if(y<10){ys="0"+y;}else{ys=""+y;}
 document.getElementById("td"+ys+""+xs).style.backgroundColor=snakeColor;
}

function move(y,x){
  
    
    for(var i=snakeItSelf.length-1;i>0;i--){
        
    snakeItSelf[i]= snakeItSelf[i-1];        
    
    }
    snakeItSelf[0]="td"+ys+xs;
    
    
    
    document.getElementById(snakeItSelf[snakeItSelf.length-1]).style.backgroundColor=backgroundColor;
  //  snakeItSelf[snakeItSelf.length-1]="";
  for(var i=1;i<snakeItSelf.length;i++){
      if(snakeItSelf[0]===snakeItSelf[i]){
          selfCrush=true;
      }
      if(selfCrush){
          
            clearInterval(timer);
            console.log('game over');
            gameOver();
/*
            var xhttp = new XMLHttpRequest();
            var JSON_sent = {"score":score};
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {}};
            xhttp.open("POST", "/submit", true);
          //xhttp.send(JSON.stringify(JSON_sent));
          //xhttp.send(JSON_sent);
          xhttp.send(JSON.stringify(JSON_sent));
            console.log(JSON.stringify(JSON_sent))
            console.log(JSON_sent)
            //window.location.href = '/submit_hs';
            */
            }else{}
  }
  
    
    if(snakeItSelf[0]===candy){candyEaten=true;}
    if(candyEaten){snakeItSelf.push("so empty");spawnCandy();score=score+1;
    document.getElementById("score").innerHTML=score;
    }
    
    
}

function spawnCandy(){
    var x =Math.floor(Math.random()*tabulka.Dimx) ;
    var y =Math.floor(Math.random()*tabulka.Dimy) ;
    var xs = '';
    var ys = "";    
   if(x<10){xs="0"+x+"";}else{xs=""+x+"";}
   if(y<10){ys="0"+y+"";}else{ys=""+y+"";}
    candy = "td"+ys+xs;
    
    for(var i=0;i<snakeItSelf.length;i++){
               if(snakeItSelf[i]===candy){

      spawnCandy();
        
    }}
    
    document.getElementById(candy).style.backgroundColor = snakeColor;
}
    
function WallTeleport(){
    if(x>tabulka.Dimx-1 && direction==="right"){x=0;}
    if(y>tabulka.Dimy-1 && direction==="down"){y=0;}
    if(x<0 && direction==="left"){x=tabulka.Dimx-1;}
    if(y<0 && direction==="up")  {y=tabulka.Dimy-1;}
    
}
    }}
