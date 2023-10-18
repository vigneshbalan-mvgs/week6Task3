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

}
password.addEventListener("keyup",()=>{
    if(password.value.length !=0){
        checkPassword();
    }
})

passwordConfirm.addEventListener("keyup",checkPassword);



//todo list

const todoForm = document.getElementById("todo-form");
const lastList = document.getElementById("task-list");

function addTask(Task){
  const listItem = document.createElement("li")
  listItem.innerHTML = '<input type="checkbox"/> <span>${task}</span><button>Delete</button>';
  lastList.appendChild(listItem)
}
todoForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  const input = document.getElementById("task-input");
  const task = input.value;
  addTask(task);
  input.value="";

})


