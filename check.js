//login form
import { username,password } from "./script";
const uname = document.getElementById('uname');
  const pwd = document.getElementById('pwd');
  const loginBtn = document.getElementById('loginFormBtn');
loginBtn.disabled = true;
function checklogin(){
  uname.addEventListener||pwd.addEventListener('keyup',()=>{
    console.log('hello')
    if(uname==username & pwd== password){
        loginBtn.disabled = false;
    }
    else{
        loginBtn.disabled = true;
        
    }
  })
    
}