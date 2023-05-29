function popUp(){
    let accnum = document.getElementById('accnum');
    if(accnum.value == ""){
      alert("Please enter a number");
    }
    else{
      wrapper2.classList.add('active-popup');
      }}
  
  const btnpopup= document.querySelector('.submit');
  btnpopup.addEventListener('click',() =>{
    wrapper2.classList.add('active-popup');
  })
  function popUp() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
  }
  
  function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  