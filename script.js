const text = "Know about your privacy.";
let index = 0;


function typeEffect() {
    if (index < text.length) {
        document.querySelector("#heading").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();