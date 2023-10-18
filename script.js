// signup form 

  let username = document.getElementById("uname")
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
  else{
    signupFormBtn.disabled= true;
  }
}
password.addEventListener("keyup",()=>{
    if(password.value.length !=0){
        checkPassword();
    }
}) 

passwordConfirm.addEventListener("keyup",checkPassword);


export {username,password};