function popUp(){
  let accnum = document.getElementById('accnum')
  let pass = document.getElementById('pass')

  if(accnum.value == ""){
    alert("Please enter a number");
  }
  else if(pass.value == ""){
     alert("Please enter a password");
  }
  else{
    alert("Account deleted successfully!");
 }
 
}