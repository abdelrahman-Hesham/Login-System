let registerform = document.getElementById('registerForm')
let signName =document.getElementById('signName')
let signEmail=document.getElementById('signEmail')
let signPassword=document.getElementById('signPassword')
 let users=[]
let nameAlert= document.getElementById('nameAlert')
let emailAlert= document.getElementById('emailAlert')
let passwordAlert= document.getElementById('passwordAlert')
let existAlert= document.getElementById('existAlert')
let successAlert= document.getElementById('successAlert')
let erorrAlert= document.getElementById('erorrAlert')

if(localStorage.getItem('data')!==null){
    users=JSON.parse(localStorage.getItem('data'))
}
registerform.addEventListener('submit',function(e){
e.preventDefault()
// validateAllForms(/^[a-zA-Z]{2,}$/,signName,nameAlert)
// validateAllForms(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,signEmail,emailAlert)
// validateAllForms(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,}).*$/,signPassword,passwordAlert)
if(checkAllForms()){
    addUser()
erorrAlert.classList.add('d-none')
}else{
    // successAlert.classList.add('d-none')
erorrAlert.classList.remove('d-none')
}


})

function addUser(){
    let newUser={
        name: signName.value,
        pass: signPassword.value,
        email: signEmail.value,
    }

    if (isExist(newUser)==true) {
        existAlert.classList.remove('d-none')
        successAlert.classList.add('d-none')    
    }
    else{
        existAlert.classList.add('d-none')
users.push(newUser)
localStorage.setItem('data',JSON.stringify(users))

successAlert.classList.remove('d-none')    
clear()
setTimeout(function(){
    window.location.href='login/login.html'  
},1500)
}
}



 function validateAllForms(regex,ele,alert){
let pattern = regex 
if (pattern.test(ele.value)) {
    ele.classList.add('is-valid')
    ele.classList.remove('is-invalid')
    alert.classList.add('d-none')
return true
}
else{
    ele.classList.remove('is-valid')
    ele.classList.add('is-invalid')
    alert.classList.remove('d-none')
    return false
}
    

 }


 function clear(){
    signName.value = ''
    signEmail.value = ''
    signPassword.value = ''
 }


 function checkAllForms(){
    if(
        validateAllForms(/^[a-zA-Z]{2,}$/,signName,nameAlert)&&
validateAllForms(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,signEmail,emailAlert)&&
validateAllForms(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,}).*$/,signPassword,passwordAlert)
    ){
return true
    }
    else{
        return false
    }
 }

 function isExist(newUser){
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase()==newUser.email.toLowerCase()) {
            // successAlert.classList.remove('d-none')
            return true
        }else{
            // successAlert.classList.add('d-none')
            return false


        }
    }
 }