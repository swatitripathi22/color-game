var square=document.getElementsByClassName("square")
var colordisplay=document.getElementById("color-display")
var result=document.getElementById("result")
var header=document.getElementById("header")
var playAgain=document.getElementById("play-again")
var newcolor=document.getElementById("new-color")

var colors=[]
generateColor();
// console.log(colors)
function generateColor(){
    var i;
    for(i=0;i<square.length;i++){
        colors.push(
            `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        );
    }
   
}
assigncolor()
function assigncolor(){
    var i;
    for(i=0;i<square.length;i++){
        square[i].style.backgroundColor=colors[i]
        square[i].setAttribute("data-color",colors[i])
    }
}
var pickedcolor=getrandomColor();

function getrandomColor(){
    var randomColor =colors[Math.floor(Math.random()*square.length)];
    colordisplay.innerText=randomColor
    // alert(randomColor);
    return randomColor


}
checkcolor();
function checkcolor(){
    var i,j;
    for(i=0;i<square.length;i++){
        square[i].onclick=function(){
            // alert();
            var getcolor=this.getAttribute("data-color");
          if(getcolor == pickedcolor){
            for(j=0;j<square.length;j++){
                square[j].style.opacity="1";
                square[j].style.backgroundColor=pickedcolor
            }
            playAgain.innerHTML="Play Again";
            header.style.background=pickedcolor
            result.innerText="Correct!"

        }
          else{
            result.innerText="Wrong!"
            this.classList.add("fade")
          }
        

        }
    }
}
newcolor.onclick=function(){
    reset();
}
playAgain.onclick=function(){
    reset();
}
function reset(){
    window.location= location.href;
}