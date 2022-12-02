// var confettiElement = document.getElementById('my-canvas');
// var confettiSettings = { target: confettiElement };
// var confetti = new ConfettiGenerator(confettiSettings);
// confetti.render();
var elements = document.getElementsByTagName("*");
for(var id = 0; id < elements.length; ++id) { elements[id].oncontextmenu = null; }
myScore=0
time=20
function gameOver(){
    var msg;
   if (time==0 && myScore==0) {
    msg= `Sorry , you lost the game`
    colorName=`red`
    pop.classList.remove('hidden');
    // pop.classList.add(`bg-${colorName}-100`)
   statusT.innerHTML=msg;
   statusT.classList.add(`text-${colorName}-600`)
   moleList=document.querySelectorAll('.moleImg')
   statusImg.setAttribute("src","./lost.gif")
   for (let i = 0; i < moleList.length; i++) {
    moleList[i].classList.add('hidden')
    
   }
   }
   else if (time!=0 && myScore>0) {
    msg= `You are the winner`
    colorName=`green`
    pop.classList.remove('hidden');
    // pop.classList.add(`bg-${colorName}-100`)
   statusT.innerHTML=msg;
   statusT.classList.add(`text-${colorName}-600`)
   moleList=document.querySelectorAll('.moleImg')
   statusImg.setAttribute("src","./win.gif")
   for (let i = 0; i < moleList.length; i++) {
    moleList[i].classList.add('hidden')
   }
   var confettiElement = document.getElementById('my-canvas');
   confettiElement.style.zIndex='10'
var confettiSettings = { target: confettiElement };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
setTimeout(() => {
    confetti.clear();
    confettiElement.style.zIndex='-1'
}, 1500);
   }

}
function Play() {
// alert('start')
playBtn.classList.add('hidden')
elements=Array.from(document.querySelectorAll('.hole'))
setInterval(() => {
 wholeNum=Math.floor(Math.random()*8)
 for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML=""
 } 
//  time=20
elements[wholeNum].innerHTML=`<img src="./mole.png" class="w-40 moleImg" alt="" id="mole">`
mole=document.getElementById('mole')
mole.addEventListener('click',()=>{
    myScore+=1
    gameOver();
})  
}, 850);

time=20
setInterval(() => {
    time--
    if (time==0) {
        gameOver()
    }
}, 1000);
}