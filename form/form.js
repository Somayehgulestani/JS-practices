const sign=document.getElementById("sign");
const form=document.getElementById("formgeneral");
sign.addEventListener("click",()=>{
    form.style.visibility="visible";
    sign.style.visibility="hidden"

})

const email=document.getElementById("email");
const password=document.getElementById("pass");
const repeatpass=document.getElementById("Repeatpass");
const formdivs=document.getElementsByClassName("formdivs");
const signup =document.getElementById("signup");

signup.addEventListener("click",( e)=>{
    e.preventDefault();
    checkValid1(email);
    checkValid2(password ,5,10);
   checkValid3(repeatpass)
});

  
function checkValid1 (email) {
    let reg =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(email.value.trim())) {
  correctmessage(email);
} else {
  errormessage(email, "Email must be valid! ");
}
}

function checkValid2(input,min,max){
    if(input.value.trim().length<min){
      errormessage(input, `Password must contain ${min} characters.`);
    }else if(input.value.trim().length > max){
      errormessage(input, `Password must contain ${max} characters.`);  
}else {
correctmessage(input);
}
}

function checkValid3(repeatp) {
    if (password.value === repeatpass.value) {
      correctmessage(repeatpass) ;

    }else{
        errormessage(repeatpass, "Password is wrong");
    }
}

function errormessage(input,massage) {
    let element=input.parentElement;
  const small = element.querySelector("small");
  small.style.visibility ="visible";
  small.textContent = massage;
    
}

function correctmessage(input) {
  let element = input.parentElement;
  const small = element.querySelector("small");

element.className = "correct";
small.style.visibility = "hidden";
}




