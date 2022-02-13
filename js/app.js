// increse product quantity
function increseQuantity(idName, price, isTure) {
    // input quantity
    const quantity = document.getElementById(idName + "-number");

    let productQuantity = parseInt(quantity.value);
    if (isTure) {
        productQuantity = productQuantity + 1;
    } else if (productQuantity > 0) {
        productQuantity = productQuantity - 1;
    }
    quantity.value = productQuantity;

    // total prduct price

    const totalPrice = document.getElementById(idName + '-total');
    totalPrice.innerText = productQuantity * price;
    caluclate();
}



// case plus button
document.getElementById('case-plus').addEventListener('click', function() {
        increseQuantity('case', 59, true);
    })
    // case minus button
document.getElementById('case-minus').addEventListener('click', function() {
    increseQuantity('case', 59, false)
})


// phone pluse butotn
document.getElementById('phone-plus').addEventListener('click', function() {
        increseQuantity('phone', 1219, true);
    })
    // phone minus button
document.getElementById('phone-minus').addEventListener('click', function() {
    increseQuantity('phone', 1219, false)
})

function getInput(idName, price) {
    const phonenumber = document.getElementById(idName + '-number').value;
    const totalPhone = parseInt(phonenumber) * price;
    return totalPhone;
}

// subtotal
function caluclate() {

    const subTotal = getInput("phone", 1219) + getInput("case", 59);
    const tax = subTotal * .1;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;



}