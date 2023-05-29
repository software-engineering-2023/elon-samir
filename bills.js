function popUp() {
    let ccnum = document.getElementById('ccnum')
    let code = document.getElementById('code')
    let ccv = document.getElementById('ccv')
    let amount = document.getElementById('amount')

    if (ccnum.value == "") {
        alert("Please enter a credit card number");
    }
    else if (code.value == "") {
        alert("Please enter the pin code");
    }
    else if (ccv.value == "") {
        alert("Please enter the ccv number");
    }
    else if (amount.value == "") {
        alert("Please enter an amount");
    }
    else {
        alert("Bills payed successfully!");
    }

}