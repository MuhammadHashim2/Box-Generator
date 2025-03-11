let ob= {
   src: "./img.jpg",
   class:"box",
   description:"Hello This is Cartoon."
}
let btn = document.querySelector("button");
btn.addEventListener("click", createBox);
function createBox() {
   let div= document.createElement("div");
   div.classList.add(ob.class);
   div.innerHTML= `<img src="${ob.src}"><h1>${ob.description}</h1>`;
   document.querySelector(".boxes").appendChild(div);
}
   