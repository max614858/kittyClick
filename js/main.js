document.addEventListener('DOMContentLoaded', function() {
  let clickValue = 1;
  let mutliplier = 1;
  let soupKitty = document.getElementById("clickCat");
  let soupAmount = document.getElementById('amount');
  let displayKittos = document.getElementById('displayKittos')
  let shopLink = document.getElementById('shopLink');

  if (clickValue) {
    clickValue = Number(localStorage.getItem('clickValue'))
  } else {
    localStorage.setItem('clickValue', 1)
  }

  if (soupKitty) {
    soupKitty.addEventListener('click', addClick)
  }

  if (localStorage.getItem('clicks')) {
    kittyClicks = Number(localStorage.getItem('clicks'))
  } else kittyClicks = localStorage.setItem('clicks', 0)


  function addClick() {
    localStorage.getItem('clicks')
    kittyClicks += clickValue * mutliplier
    soupAmount.innerHTML = `KittyClicks: ${kittyClicks}`;
    localStorage.setItem('clicks', kittyClicks);
  }


  console.log('loaded')
  if (soupAmount) {
    soupAmount.innerHTML = `KittyClicks: ${kittyClicks}`;
  }
  if (displayKittos) {
    let vA = localStorage.getItem('vA');
    displayKittos.innerHTML = `KittyClicks: ${kittyClicks}`;
    let buttonList = document.querySelectorAll(".shopButtons")
    buttonList[0].innerHTML = "<h4>jimpy clicker<br> $" + `${vA}` + "kitto</h4>"
    function getPrice() {
      let buttonOrder = []
      for (let button of buttonList) {
        if (button.innerHTML.indexOf('$') != -1) {
          buttonOrder.push(button)
          button.addEventListener('click', function(event) {
            let price = button.innerHTML.slice(button.innerHTML.indexOf('$') + 1, button.innerHTML.lastIndexOf('k'));
            let pay = Number(price)
            if (pay > kittyClicks) {

            }
            else {
              (kittyClicks -= pay)
              displayKittos.innerHTML = `KittyClicks: ${kittyClicks}`;
              localStorage.setItem('clicks', kittyClicks);
              if (buttonOrder[0]) {
                clickValue ++
                localStorage.setItem('clickValue', clickValue)
                pay = 100 * clickValue * mutliplier
                localStorage.setItem('vA', pay)
                button.innerHTML = "<h4>jimpy clicker<br> $" + `${pay}` + "kitto</h4>"
              }
              if (buttonOrder[1]) {

                localStorage.setItem('clickValue', clickValue)

              }
                
              if (buttonOrder[2]) {
                localStorage.setItem('clickValue', clickValue)

              }
          }
          })
        }
        }}
        getPrice()
  }
})
