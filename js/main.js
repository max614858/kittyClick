let kittyClicks = 0;
let kittyMutliplier = 1

kittyClicks = Number(localStorage.getItem('kittyClicks'))
document.getElementById('amount').innerHTML = "kittyClicks: " + kittyClicks

document.getElementById("clickCat").addEventListener('click', function(event) {
  kittyClicks += 1 * kittyMutliplier
  console.log(kittyClicks)
  localStorage.setItem('kittyClicks', kittyClicks);
  document.getElementById('amount').innerHTML = "kittyClicks: " + kittyClicks  
})

document.getElementById('shopLink').addEventListener('click', function(event) {
  document.getElementById('displayKittos').innerHTML = "kittyClicks: " + kittyClicks  
})