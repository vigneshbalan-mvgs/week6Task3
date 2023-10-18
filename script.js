var uname= document.loginform.uname;
var pwd= document.loginform.pwd;

function valitate(){
    if(uname.value){
        uname.classList.remove("is-invalid");
        uname.classList.add("is-valid");
    }
    else{
        uname.classList.add("is-valid");
        uname.classList.remove("is-invalid");
    }
}