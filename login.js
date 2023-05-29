document.getElementById('login').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'client' && password === 'client') {
    window.location.href = 'client.html';
  } else if (username === 'banker' && password === 'banker') {
    window.location.href = 'banker.html';
  } else if (username === 'admin' && password === 'admin') {
    window.location.href = 'admin.html';
  } else if(username === 'dina' && password === '123'){
    window.location.href = 'client.html';
  } else{
    alert('Invalid username or password. Please try again.');
  }
});


