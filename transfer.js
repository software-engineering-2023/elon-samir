function popUp() {
    let accnum1 = document.getElementById('accnum1')
    let accnum2 = document.getElementById('accnum2')
    let name = document.getElementById('name')
    let id = document.getElementById('id')

    if (accnum1.value == "") {
        alert("Please enter a number");
    }
    else if (accnum2.value == "") {
        alert("Please enter a number");
    } else if (name.value == "") {
        alert("Please enter a name");
    }
    else if (id.value == "") {
        alert("Please enter an id");
    }
    else if (amount.value == "") {
        alert("Please enter an amount");
    }
    else {
        alert("Transfer successfull!");
    }

}