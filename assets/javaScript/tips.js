document.addEventListener("DOMContentLoaded", function(){
fetch('assets/data/tips.json')
.then(response => {
if (!response.ok) {
  throw new Error('Network response was not ok ' + response.statusText);
 }
return response.json();
 })
.then(tips => {
 const today = new Date().getDay(); // Get the current day of the week (0-6)
  const tip = tips[today % tips.length]; // Using modulo to loop through tips if there are fewer than 7

 const dailyTipsContainer = document.getElementById('daily-tips');
const tipCard = `
<div class="card mb-4">
 <img src="${tip.image}" class="card-img-top" alt="${tip.title}">
<div class="card-body">
 <h3 class="card-title">${tip.title}</h3>
 <p class="card-text">${tip.description}</p>
  </div>
 </div>`;
 dailyTipsContainer.innerHTML = tipCard;
 })
  .catch(error => {
  console.error('Error loading tips:', error);
   const dailyTipsContainer = document.getElementById('daily-tips');
   dailyTipsContainer.innerHTML = `<p>Error loading tips. Please try again later.</p>`;
   });
});



