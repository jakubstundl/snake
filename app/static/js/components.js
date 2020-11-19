'use strict'
let finalScore = 0;
const index = `
<button class="starter" type="button" onclick="startSnake()">PLAY</button>
`

document.getElementById("components").innerHTML = index;

const snake_table = `<div id="div1"></div><div><p><span class="score-game">SCORE: </span><span class="score-game" id="score">0</span></p></div>`

const startSnake = () => {
    
    console.log(`Starting snake`)
    document.getElementById("components").innerHTML = snake_table;
    tabulka = new tabulka(20,20,"div1");
    let runer = new snakeRunner(8);
    window.addEventListener("keydown", function(e) {
      // space and arrow keys
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
      }
  }, false);
}
const gameOver = () => {
    let finalScoreTemp = document.getElementById('score').innerHTML;
    document.getElementById("components").innerHTML = 
    `<div class="score-game">
    <p>GAME OVER!</p>
     <p>YOUR FINAL SCORE IS: ${finalScoreTemp}</p>
     <label for="name">NAME:</label>
     <input name="name" type="text" id='input'>
     </div>
     `;

     const submitFunction = () =>{
        let name = document.getElementById('input').value;
        let xhttp = new XMLHttpRequest();
        console.log(finalScore);
        console.log('lenght='+name.length);

        if(name===''){name='Player'}
        let JSON_sent = {"name":name,"score":finalScore};
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {            
          }
        };
        xhttp.open("POST", "/submit_highscore", true);
      xhttp.send(JSON.stringify(JSON_sent));
        console.log(JSON.stringify(JSON_sent))
        console.log(JSON_sent)
      }   
   
     document.addEventListener('keydown', function(event) {
        if (event.code == 'Enter') {
           submitFunction();
           window.location.href = '/index' }});

    console.log(`Final score = ${finalScoreTemp}`);
    finalScore = finalScoreTemp;
    console.log(finalScore)
}