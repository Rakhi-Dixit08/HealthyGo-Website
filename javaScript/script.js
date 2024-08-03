const hamMenu=document.querySelector(".ham-menu");
const offScreenMenu=document.querySelector(".off-screen-menu");
hamMenu.addEventListener('click',()=>{
hamMenu.classList.toggle('active');
offScreenMenu.classList.toggle('active');

});

// Start button 
function myFunction(){

let person=prompt("Please enter your name : ");
let healthGoal=prompt("What is your health goal :");

if(person!=null){
document.getElementById("demo").innerHTML="Hello ! "+person+
" we  are  happy  to  see  that  you  want  to  improve your "+healthGoal+
".We  will  help  you  in  achieving  this. Stay  tunned."


}


}

