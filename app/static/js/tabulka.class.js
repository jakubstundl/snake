/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict'
class tabulka {
   Dimx = new Number;
   Dimy = new Number;
        
  constructor(x,y,id) {
  var verticalCount=y;
  var horizontalCount=x;  
  var wholeString="<table>";
  var i,j;
  this.Dimx = horizontalCount;
  this.Dimy = verticalCount;

for(i=0;i<verticalCount;i++){
    if(i<10){wholeString =wholeString+"<tr id=\'tr0"+i+"\'>";}
        else{wholeString =wholeString+"<tr id=\'tr"+i+"\'>";}
        
    for(j=0;j<horizontalCount;j++){
        if(i<10 && j<10){wholeString=wholeString+"<td id=\'td0"+i+"0"+j+"\'></td>";}
            else{
                if(i<10 && j>9) {wholeString=wholeString+"<td id=\'td0"+i+""+j+"\'></td>";}
                    else{
                        if(j<10 && i>9){wholeString=wholeString+"<td id=\'td"+i+"0"+j+"\'></td>";}
                            else{wholeString=wholeString+"<td id=\'td"+i+""+j+"\'></td>";}
                    }
            }
    }
    wholeString=wholeString+"</tr>";
}
wholeString=wholeString+"</table>";
//console.log(wholeString);
document.getElementById(id).innerHTML =wholeString;
 
  
  }
  getDimX()
    {
      
      return this.Dimx;
}
getDimY()
    {
      
      return this.Dimy;
}
}



