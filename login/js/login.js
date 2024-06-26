let loginForm = document.getElementById('loginForm')

let loginEmail = document.getElementById('loginEmail')

let loginPassword = document.getElementById('loginPassword')

let loginAlert= document.getElementById('loginAlert')

let loginSuccessAlert= document.getElementById('loginSuccessAlert')

let allUsers=[]
if (localStorage.getItem('data')!==null) {
    allUsers=JSON.parse(localStorage.getItem('data'))
}
loginForm.addEventListener('submit', function(e){
e.preventDefault()

login()
} )


function login(){
    var userData={
        email:loginEmail.value,
        password:loginPassword.value
    }
    // console.log(userData)
var x=isLoginValid(userData)
console.log(x);
    if (x) {
        loginAlert.classList.add('d-none')
        loginSuccessAlert.classList.remove('d-none')
        console.log('you"re in ');
        setTimeout(function(){
            window.location.href='../welcome/welcome.html'
        },1500)}
        else{
            loginAlert.classList.remove('d-none')
        loginSuccessAlert.classList.add('d-none')
console.log('err');
    }
}

function isLoginValid(userData){

    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase()=== userData.email.toLowerCase() 
           && allUsers[i].pass== userData.password) 
        {
           localStorage.setItem('username',allUsers[i].name)
            return true
        }
       
    }
}