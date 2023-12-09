function addToCart(productName, selectedProd, productPrice, addedPrice) {
  const prodName = document.getElementById(productName);
  const olElement = document.getElementById(selectedProd);
  const liElement = document.createElement("li");
  liElement.textContent = prodName.innerText;
  olElement.appendChild(liElement);

  const prodPrice = document.getElementById(productPrice);
  const prodString = prodPrice.innerText;
  const prodNum = parseFloat(prodString);
  const addPriceElement = document.getElementById(addedPrice);
  const addPrice = addPriceElement.innerText;
  const addPriceNum = parseFloat(addPrice);
  const totalPrice = prodNum + addPriceNum;
  addPriceElement.innerText = totalPrice;
}

document.getElementById("prod1-amount").addEventListener("click", function () {
  addToCart("prod1-name", "selected-products", "price", "add-price");
});

document.getElementById("prod2-amount").addEventListener("click", function () {
  addToCart("prod2-name", "selected-products", "price-second", "add-price");
});

document.getElementById("prod3-amount").addEventListener("click", function () {
  addToCart("prod3-name", "selected-products", "price-third", "add-price");
});

document.getElementById("prod4-amount").addEventListener("click", function () {
  addToCart("prod4-name", "selected-products", "price-forth", "add-price");
});

document.getElementById("prod5-amount").addEventListener("click", function () {
  addToCart("prod5-name", "selected-products", "price-fifth", "add-price");
});

document.getElementById("prod6-amount").addEventListener("click", function () {
  addToCart("prod6-name", "selected-products", "price-sixth", "add-price");
});

document.getElementById("btn-apply").addEventListener("click", function () {
  const totalPrice = document.getElementById("add-price");
  const totalPriceNum = parseFloat(totalPrice.innerText);
  const couponInputField = document.getElementById("coupon-input");
  const couponInputFieldValue = couponInputField.value;

  if (totalPriceNum >= 200 && couponInputFieldValue == "SELL200") {
    const discount = totalPriceNum * 0.2;
    const afterDiscount = totalPriceNum - discount;
    console.log(afterDiscount);
    const discountPrice = document.getElementById("add-discount");

    discountPrice.innerText = discount;
    const totalCost = document.getElementById("total-price");
    totalCost.innerText = afterDiscount;
    couponInputField.value = "";
  }
  return totalPriceNum;
});

document.getElementById("btn-purchase").addEventListener("click", function () {
  const totalPrice = document.getElementById("add-price");
  const discountPrice = document.getElementById("add-discount");
  const afterDiscountPrice = document.getElementById("total-price");
  totalPrice.innerText = "00";
  discountPrice.innerText = "00";
  afterDiscountPrice.innerText = "00";
  alert("purchase complete");
});
