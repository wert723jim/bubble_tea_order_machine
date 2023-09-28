// Constructor function for Drinks
function Drink (name, sugar, ice) {
  this.name = name
  this.sugar = sugar
  this.ice = ice
}

Drink.prototype.price = function () {
  switch (this.name) {
    case 'Black Tea':
    case 'Oolong Tea':
    case 'Baozong Tea':
    case 'Green Tea':
      return 30
    case 'Bubble Milk Tea':
    case 'Lemon Green':
      return 50
    case 'Black Tea Latte':
    case 'Matcha Latte':
      return 55
    default:
      alert('Unknown Drink')
  }
}

// let bubbleMilkTea = new Drink('Bubble Milk Tea', 'No Sugar', 'Less Ice')
// console.log(bubbleMilkTea)
// console.log(bubbleMilkTea.price())

// let drinkName = 'Black Tea'
// let drinkIce = 'Regular Ice'
// let drinkSugar = 'Regular Sugar'
// const orderList = []

// const drinks = document.querySelectorAll("input[name='drink']")
// const ice = document.querySelectorAll("input[name='ice']")
// const sugar = document.querySelectorAll("input[name='sugar']")
const addBtn = document.querySelector('[data-alpha-pos="add-drink"]')

let orderLists = document.querySelector('[data-order-list]')

// drinks.forEach(d => {
//   d.addEventListener('click', () => {
//     drinkName = d.value
//   })
// })

// ice.forEach(i => {
//   i.addEventListener('change', () => {
//     drinkIce = i.value
//   })
// })

// sugar.forEach(s => {
//   s.addEventListener('change', () => {
//     drinkSugar = s.value
//   })
// })

addBtn.addEventListener('click', () => {
  // orderList.push(new Drink(drinkName, drinkIce, drinkSugar))
  // console.log(orderList)
  // renderOrderList()
  const drinkName = alphaPos.getCheckedValue('drink')
  const drinkIce = alphaPos.getCheckedValue('ice')
  const drinkSugar = alphaPos.getCheckedValue('sugar')

  if (!drinkName) {
    alert('Please choose at least one item.')
    return
  }

  const drink = new Drink(drinkName, drinkIce, drinkSugar)
  console.log(drink)
  console.log(drink.price())

  alphaPos.addDrink(drink)
})

function AlphaPos () {}

AlphaPos.prototype.getCheckedValue = (inputName) => {
  let selectedOption = ''
  document.querySelectorAll(`input[name='${inputName}']`).forEach( (item) => {
    if (item.checked) {
      selectedOption = item.value
    }
  })
  return selectedOption
}

AlphaPos.prototype.addDrink = (drink) => {
  const orderListsCard = `
  <div class="card mb-3" style="width: 100%;">
    <div class="card-body">
      <div class="text-end">
        <button type="button" class="btn-close" aria-label="Close" data-alpha-pos="delete-drink"></button>
      </div>
      <div>
        ${drink.name}
      </div>
      <div>
        ${drink.ice}
      </div>
      <div>
        ${drink.sugar}
      </div>
    </div>
    <div class="card-footer text-end text-muted">
      $ <span data-drink-price>${drink.price()}</span>
    </div>
  </div>
  `
  orderLists.insertAdjacentHTML('afterbegin', orderListsCard)
}

const alphaPos = new AlphaPos()

function renderOrderList() {
  console.log('render')
  order_list.innerHTML = ''
  orderList.forEach(o => {
    order_list.innerHTML+=`
      <div class="card mb-3" style="width: 100%;">
        <div class="card-body">
          <div class="text-end">
            <button type="button" class="btn-close" aria-label="Close" data-alpha-pos="delete-drink"></button>
          </div>
          <div>
            ${o.name}
          </div>
          <div>
            ${o.ice}
          </div>
          <div>
            ${o.sugar}
          </div>
        </div>
        <div class="card-footer text-end text-muted">
          $ <span data-drink-price>${o.price()}</span>
        </div>
      </div>
    `
  })
}