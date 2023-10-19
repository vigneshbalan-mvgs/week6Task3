//login form

const uname = document.getElementById('uname');
  const pwd = document.getElementById('pwd');
  const loginBtn = document.getElementById('loginFormBtn');
loginBtn.disabled = true;

 
  
function checkPassword(){ 
  if(uname!=""){
    loginBtn.disabled = false;

  }
  else{
    loginBtn.disabled = true;

  }
}
pwd.addEventListener("keyup",()=>{
    if(pwd.value.length !=6){
        checkPassword();
    }
}) 

uname.addEventListener("keyup",checkPassword);