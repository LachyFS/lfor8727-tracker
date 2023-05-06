import anime from "animejs";

const movieDetailsPanel = document.querySelector('#moviePage');
const moviePageExitButton = document.querySelector('#moviePageExitButton');

function openPanel(element){
    element.style.display = '';
    // element.style.right = '0';
    anime({
        targets: element,
        translateX: window.innerWidth,
        duration: 300
    });
}

function closePanel(element){
    element.style.display = 'none';
    element.style.right = '100%';
}

let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    console.log(card); 
    card.addEventListener('click', (event) => {
        openPanel(movieDetailsPanel);
    })
});

moviePageExitButton.addEventListener('click', (event) => {
    closePanel(movieDetailsPanel);
});