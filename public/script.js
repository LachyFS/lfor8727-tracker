import anime, { easings } from "animejs";

const movieDetailsPage = document.querySelector('#movieDetailsPage');

const movieAddPage = document.querySelector('#movieAddPage')
const movieAddButton = document.querySelector('#addMovieButton')

const mainPage = document.querySelector('#mainPage');
const moviePageExitButton = document.querySelector('#moviePageExitButton');

const openPages = [mainPage]

function hidePage(pageElement, duration) {

    if (openPages.includes(pageElement)) {
        openPages.splice(openPages.indexOf(pageElement), 1)
    } else {
        console.error(`page ${pageElement.id} could not be closed (is not opened)`);
        return;
    }
    anime({
        targets: pageElement,
        duration: duration,
        opacity: 0,
        easing: "easeInOutQuad",
        complete: () => {
            pageElement.style.display = 'none';
        }
    });

}

function showPage(pageElement, duration) {
    if (openPages.includes(pageElement)) {
        console.error(`page ${pageElement.id} could not be opened (already opened)`);
        return;
    }

    pageElement.style.display = 'block';

    anime({
        targets: pageElement,
        duration: duration,
        opacity: 1,
        easing: "easeInOutQuad"
    });

    openPages.push(pageElement)
}

function hideAllPages(duration) {
    openPages.forEach((elementID) => {
        hidePage(elementID, duration);
    });
}

let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener('click', (event) => {
        hideAllPages(120);
        showPage(movieDetailsPage, 120);
    })
});

moviePageExitButton.addEventListener('click', (event) => {
    hideAllPages(120);
    showPage(mainPage, 120);
});

movieAddButton.addEventListener('click', (event) => {
    hideAllPages(movieDetailsPage, 120);
    showPage(movieAddPage, 120);
});

const multiSelectFields = document.querySelectorAll(".input-multi");
multiSelectFields.forEach((element) => {

    const inputElems = element.querySelectorAll("input");
    const lastInputElem = inputElems[inputElems.length - 1];

    const addButton = document.createElement("Button");
    addButton.textContent = "+";
    addButton.name = element.id;
    addButton.classList.add('add-field-button')
    element.append(addButton);


    addButton.addEventListener("click", (event) => {
        event.preventDefault();
        const clone = lastInputElem.cloneNode();
        clone.value = "" // reset value
        element.insertBefore(clone, addButton);

        anime({
            targets: clone,
            width: ["0", "200px"],
        })

        clone.addEventListener("change", (event) => {

            if (clone.value.length == 0) {
                // delete if it has no value
                clone.remove();
            }
        });
    })
})
