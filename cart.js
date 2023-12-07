document.getElementById('prod1-amount').addEventListener('click', function(){
    const prodName = document.getElementById('prod1-name')
    const olElement = document.getElementById('selected-products');
    const liElement = document.createElement('li');
    liElement.textContent = prodName.innerText;
    olElement.appendChild(liElement);
    
    const prodPrice = document.getElementById('price');
    const prodString = prodPrice.innerText;
    const prodNum = parseFloat(prodString);
    const addPriceElement = document.getElementById('add-price');
    const addPrice = addPriceElement.innerText;
    const addPriceNum = parseFloat(addPrice);
    console.log(addPriceNum);
    addPriceElement.innerText = prodNum;

});

document.getElementById('prod2-amount').addEventListener('click', function(){
    const prodName = document.getElementById('prod2-name');
    const olElement = document.getElementById('selected-products');
    const liElement = document.createElement('li');
    liElement.textContent = prodName.innerText;
    olElement.appendChild(liElement);

    const addPriceElement = document.getElementById('add-price');
    const addPrice = addPriceElement.innerText;
    const addPriceNum = parseFloat(addPrice);
    const prodPrice2 = document.getElementById('price-second');
    const prod2Num = prodPrice2.innerText;
    const prod2NumString = parseFloat(prod2Num);
    console.log(prod2NumString);
    const totalPrice = addPriceNum + prod2NumString;
    addPriceElement.innerText = totalPrice;
});

document.getElementById('prod3-amount').addEventListener('click', function() {
    
    const prodName = document.getElementById('prod3-name');
    const olElement = document.getElementById('selected-products');
    const liElement = document.createElement('li');
    liElement.textContent = prodName.innerText;
    olElement.appendChild(liElement);

    const addPriceElement = document.getElementById('add-price');
    const addPrice = addPriceElement.innerText;
    const addPriceNum = parseFloat(addPrice);
    const prodPrice3 = document.getElementById('price-third');
    const prod3Num = prodPrice3.innerText;
    const prod3NumString = parseFloat(prod3Num);
    const totalPrice = addPriceNum + prod3NumString;
    addPriceElement.innerText = totalPrice;
    console.log(prod3NumString);
});

document.getElementById('btn-apply').addEventListener('click', function(){
    const totalPrice = document.getElementById('add-price');
    const totalPriceNum = parseFloat(totalPrice.innerText);
    const couponInputField = document.getElementById('coupon-input');
    const couponInputFieldValue = couponInputField.value;
    
    
    if (totalPriceNum >= 200 && couponInputFieldValue == 'SELL200') {
        const discount = totalPriceNum * 0.2;
        const afterDiscount = totalPriceNum - discount;
        console.log(afterDiscount);
        const discountPrice = document.getElementById('add-discount');

        discountPrice.innerText = discount;
        const totalCost = document.getElementById('total-price');
        totalCost.innerText = afterDiscount;
        couponInputField.value = "";
    }
    return totalPriceNum;
});

document.getElementById('btn-purchase').addEventListener('click', function(){
    const totalPrice = document.getElementById('add-price');
    const discountPrice = document.getElementById('add-discount');
    const afterDiscountPrice = document.getElementById('total-price');
    totalPrice.innerText = '00';
    discountPrice.innerText = '00';
    afterDiscountPrice.innerText = '00';
    alert('purchase complete');
})