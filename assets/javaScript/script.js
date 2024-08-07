const hamMenu=document.querySelector(".ham-menu");
const offScreenMenu=document.querySelector(".off-screen-menu");
hamMenu.addEventListener('click',()=>{
hamMenu.classList.toggle('active');
offScreenMenu.classList.toggle('active');

});

// Start button 
function myFunction(){

let person=prompt("Please enter your name : ");
// let healthGoal=prompt("What is your health goal :");

if(person!=null){
document.getElementById("demo").innerHTML="Hi! "+person+
" , reach your health goals with HealthyGo! Elevate your fitness and well-being today. ";




}
}

document.getElementById('web-share-button').addEventListener('click', async () => {
    if (navigator.share) {
     try {
     await navigator.share({
     title: 'Check out this page',
     text: 'This is a helath webpage I found!',
     url: window.location.href
     });
 console.log('Successful share');
 } catch (error) {
 console.log('Error sharing:', error);
}
 } else {
alert('Web Share API not supported on this browser.');
    }
});


