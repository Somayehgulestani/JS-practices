const list = ["HTML", "CSS", "JS","React"];
const text = document.querySelector("h3");
const box = document.getElementById("box");
const button = document.querySelector("button");

text.textContent="Learning technologies for front-end";
let search =0;
let timer;
function listsearch( ){
  box.innerHTML = list[search];
  search +=1;
  if (search === list.length) {
    clearInterval(timer);
  }
}

listsearch();
 timer =setInterval(listsearch, 2000);


    button.addEventListener("click", () => {
    box.innerHTML = "You stop the list";
    clearInterval(timer);
  });