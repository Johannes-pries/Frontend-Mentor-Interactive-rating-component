"use strict";

let rating_button = document.querySelectorAll(".rating>div");
let card = document.querySelector(".card");
let tnkycard = document.querySelector(".TnkYCard");
let button = document.querySelector(".submit");
let result = 0;
let rating_result = document.querySelector(".rating-result");

button.addEventListener("click", e =>{
    card.style.display = "none";
    tnkycard.style.display = "block";
});

rating_button.forEach(element => {
    element.addEventListener("click", () => {
        rating_button.forEach(element => {
            element.style.background = "hsl(213, 19%, 18%)";
        });
        element.style.background = "hsl(25, 97%, 53%)";
        result = element.innerHTML;
        rating_result.innerHTML = "You selected "+result+" out of 5";
    });
});