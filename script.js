let password = document.getElementById("password");
  let passwordConfirm = document.getElementById("passwordConfirm");
  let message = document.getElementById("message");
  let signupFormBtn = document.getElementById("signupFormBtn");
  signupFormBtn.disabled = true;
  
function checkPassword(){
  message.innerText = password.value == passwordConfirm.value ? 'Matching' : 'Not matching';
  if(password.value==passwordConfirm.value){
    signupFormBtn.disabled= false;
  }

}
password.addEventListener("keyup",()=>{
    if(password.value.length !=0){
        checkPassword();
    }
})

passwordConfirm.addEventListener("keyup",checkPassword);