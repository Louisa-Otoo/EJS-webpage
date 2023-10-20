
const options = document.getElementById("options");
const orderBtn = document.getElementsByClassName("order-btn");
const cartContent = document.getElementsByClassName("cart-content");

const cart = [];
let total = 0;

orderBtn.addEventListener("click", () => {
  const selectedOption = options.value;
  const selectedItem = meals.find(meal => meal.name === selectedOption);

  if (selectedItem) {
    cart.push(selectedItem);
    updateCart();
  }
});

function updateCart() {
  cartContent.innerHTML = "";
  total = 0;

  cart.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("item");
    cartItem.innerHTML = `
      <h3 class="first">${item.name}</h3>
      <h3>1</h3>
      <h3>${item.price.toFixed(2)}</h3>
    `;
    cartContent.appendChild(cartItem);
    total += item.price;
  });

  const totalElement = document.createElement("div");
  totalElement.classList.add("total");
  totalElement.innerHTML = `
    <h3>Total</h3>
    <h3 class="price">${total.toFixed(2)}</h3>
  `;
  cartContent.appendChild(totalElement);
}

// You can add a function to handle order confirmation and cancellation as needed.