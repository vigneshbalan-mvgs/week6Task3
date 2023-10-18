//login form
import { username,password } from "./script";
    const uname = document.getElementById('uname');
    const pwd = document.getElementById('pwd');
    const loginBtn = document.getElementById('loginFormBtn');
    loginBtn.disabled = true;
 
  
    function checkPassword(){ 
      if(pwd.value==password.value || uname.value=== username.value){
        signupFormBtn.disabled= false;
      }
      else{
        signupFormBtn.disabled= true;
      }
    }
    pwd.addEventListener("keyup",()=>{
        if(password.value.length !=0){
            checkPassword();
        }
    }) 
    
    pwd.addEventListener("keyup",checkPassword);
    