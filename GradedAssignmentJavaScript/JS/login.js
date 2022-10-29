function login() {
    let username = document.getElementById('user-input').value;
    let password = document.getElementById('password-input').value;
     // Storing username & password in localStorage, overriding them if they exist
    window.localStorage.setItem('username', 'Sayan');
    window.localStorage.setItem('password', 'admin');
    // Will be an API call in production
    if(username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
        window.location = 'resume.html';
    } else {
        document.getElementById('invalid-login').style.display = 'block';
        document.getElementById('user-input').value = ''
        document.getElementById('password-input').value = '';
    }
}

function preventBack() {
    window.history.forward(); 
}
  
setTimeout("preventBack()", 0);
  
window.onunload = function () { null };
