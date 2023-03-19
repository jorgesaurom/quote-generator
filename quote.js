let quote = document.getElementById("quote");
let autor = document.getElementById("autor");
let boton = document.getElementById("boton");

const url = "https://api.quotable.io/random"

function getquote() {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      autor.innerText = item.author;
    });

}

window.addEventListener("load",getquote);
boton.addEventListener("click",getquote);