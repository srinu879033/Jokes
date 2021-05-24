let joke = document.getElementById("jokeText");
let button = document.getElementById("jokeBtn");
let spin = document.getElementById("spinner");
button.onclick = function() {
    spin.classList.toggle("d-none");
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {

            return response.json();
        })
        .then(function(x) {
            spin.classList.toggle("d-none");
            console.log(x.value);

            joke.textContent = x.value;
        })
}