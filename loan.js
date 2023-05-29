function popUp(){
    let accnum = document.getElementById('accnum')
    let amount = document.getElementById('amount')
  
    if(accnum.value == ""){
      alert("Please enter a number");
    }
    else if(amount.value == ""){
       alert("Please enter an amount");
    }
    else{
        alert("Request sent successfully!");
    }
   
  }