let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {

        this.classList.toggle("active");
        let panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

let button = document.getElementById('toggle');
let iconSpan = button.querySelector('.toggle-class');
let isPlus = true;

button.addEventListener('click', function () {
    if (isPlus) {
        iconSpan.textContent = '×';
    } else {
        iconSpan.textContent = '+';
    }
    isPlus = !isPlus;
});


let button2 = document.getElementById('toggle2');
let iconSpan2 = button2.querySelector('.toggle-class2');
let isPlus2 = true;

button2.addEventListener('click', function () {
    if (isPlus2) {
        iconSpan2.textContent = '×';
    } else {
        iconSpan2.textContent = '+';
    }
    isPlus2 = !isPlus2;
});


let button3 = document.getElementById('toggle3');
let iconSpan3 = button3.querySelector('.toggle-class3');
let isPlus3 = true;

button3.addEventListener('click', function () {
    if (isPlus3) {
        iconSpan3.textContent = '×';
    } else {
        iconSpan3.textContent = '+';
    }
    isPlus3 = !isPlus3;
});


let button4 = document.getElementById('toggle4');
let iconSpan4 = button4.querySelector('.toggle-class4');
let isPlus4 = true;

button4.addEventListener('click', function () {
    if (isPlus4) {
        iconSpan4.textContent = '×';
    } else {
        iconSpan4.textContent = '+';
    }
    isPlus4 = !isPlus4;
});


let button5 = document.getElementById('toggle5');
let iconSpan5 = button5.querySelector('.toggle-class5');
let isPlus5 = true;

button5.addEventListener('click', function () {
    if (isPlus5) {
        iconSpan5.textContent = '×';
    } else {
        iconSpan5.textContent = '+';
    }
    isPlus5 = !isPlus5;
});


let button6 = document.getElementById('toggle6');
let iconSpan6 = button6.querySelector('.toggle-class6');
let isPlus6 = true;

button6.addEventListener('click', function () {
    if (isPlus6) {
        iconSpan6.textContent = '×';
    } else {
        iconSpan6.textContent = '+';
    }
    isPlus6 = !isPlus6;
});

