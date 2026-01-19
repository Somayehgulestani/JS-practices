 const sms = document.getElementById("cookie-popup"),
btn = document.getElementById("got");

function check(){
  if (!document.cookie.includes("accepted")) {
    sms.classList.add("show");
  }else{
    sms.style.display="none";
  }
  btn.addEventListener("click",()=>{
  document.cookie="staus=accepted; max-age="+60*60*24*30;

// sms.classList.remove("show");
sms.style.display="none";

  });
};

 window.addEventListener("load",check);
