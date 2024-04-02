document.addEventListener('DOMContentLoaded', function() {
  let clickValue = 1;
  let mutliplier = 1;
  let soupKitty = document.getElementById("clickCat");
  let soupAmount = document.getElementById('amount');
  let displayKittos = document.getElementById('displayKittos')
  let shopLink = document.getElementById('shopLink');

  if (localStorage.getItem('clickValue')) {
    clickValue = Number(localStorage.getItem('clickValue'))
  } else {
    localStorage.setItem('clickValue', 1)
  }

  if (soupKitty) {
    soupKitty.addEventListener('click', addClick)
  }

  if (localStorage.getItem('clicks')) {
    kittyClicks = localStorage.getItem('clicks')
  } else kittyClicks = localStorage.setItem('clicks', 0);

  kittyClicks = Number(localStorage.getItem('clicks'))

  function addClick() {
    kittyClicks += clickValue * mutliplier
    kittyClicks = Number(kittyClicks)
    soupAmount.innerHTML = `KittyClicks: ${kittyClicks}`;
    localStorage.setItem('clicks', kittyClicks);
    console.log(typeof(kittyClicks))
  }

  console.log('loaded')
  if (soupAmount) {
    soupAmount.innerHTML = `KittyClicks: ${kittyClicks}`;
  }

  if (localStorage.getItem('vA')) {
    vA = localStorage.getItem('vA')
  } else vA = localStorage.setItem('vA', 100)


  if (displayKittos) {
    let vA = localStorage.getItem('vA');
    displayKittos.innerHTML = `KittyClicks: ${kittyClicks}`;
    let buttonList = document.querySelectorAll(".shopButtons")
    vA = Number(vA)
    console.log(typeof(vA))
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
              console.log(typeof(kittyClicks))
            }
            else {
              console.log(typeof(kittyClicks))
              console.log(pay)
              kittyClicks -= pay
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
