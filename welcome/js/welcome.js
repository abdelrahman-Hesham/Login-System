
let welcomeMsg= document.getElementById("welcomeMsg")

window.addEventListener('load',function(){
userDisplay()
})



 function userDisplay(){

   if (localStorage.getItem('username')!==null) {
 welcomeMsg.innerHTML=`Welcome ${localStorage.getItem('username')}`
   }else{
    welcomeMsg.innerHTML=`Welcome Guest`
   }
    
 }