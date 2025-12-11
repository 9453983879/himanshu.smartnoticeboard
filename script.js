 
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSign = document.getElementById('showSign');
const showLogin = document.getElementById('showLogin');
const btnLogin = document.getElementById('btnLogin');
const btnRegister = document.getElementById('btnRegister');
 

 
showSign.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.remove('active');
  signupForm.classList.add('active');
});

 
showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.classList.remove('active');
  loginForm.classList.add('active');
});

 
btnLogin.addEventListener('click', () => {
  const username = document.getElementById('loginUser').value;
  const password = document.getElementById('loginPass').value;
 
  const storedPass = localStorage.getItem('user_' + username);

  if((username === 'admin' && password === 'admin') || password === storedPass) {
    localStorage.setItem('username', username); 
    window.location.href = "dashboard.html";
  } else {
    alert('Invalid credentials');
  }
});
 
 
btnRegister.addEventListener('click', () => {
  const username = document.getElementById('regUser').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPass').value;

  if(username && email && password) {
    
    localStorage.setItem('user_' + username, password);

    alert('Account created for ${username}');
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
  } else {
    alert('Please fill all fields');
  }
});