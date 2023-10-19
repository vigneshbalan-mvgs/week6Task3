//login form

const uname = document.getElementById('uname');
  const pwd = document.getElementById('pwd');
  const loginBtn = document.getElementById('loginFormBtn');
loginBtn.disabled = true;

 
  
function checkPassword(){ 
  if(uname!=""){
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