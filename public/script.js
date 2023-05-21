import anime, { easings, stagger } from "animejs";

const movieDetailsPage = document.querySelector('#movieDetailsPage');

const movieAddPage = document.querySelector('#movieAddPage')
const movieAddButton = document.querySelector('#addMovieButton')
const movieAddPageExitButton = document.querySelector('#movieAddPageExitButton');

const mainPage = document.querySelector('#mainPage');
const moviePageExitButton = document.querySelector('#moviePageExitButton');

const currentlyOpenedPages = [mainPage]

function hidePage(pageElement, duration) {

    if (currentlyOpenedPages.includes(pageElement)) {
        currentlyOpenedPages.splice(currentlyOpenedPages.indexOf(pageElement), 1)
    } else {
        console.error(`page ${pageElement.id} could not be closed (is not opened)`);
        return;
    }
    anime({
        targets: pageElement,
        duration: duration,
        opacity: [1, 0],
        easing: "easeInOutQuad",
        complete: () => {
            pageElement.style.display = 'none';
        }
    });

}

function showPage(pageElement, duration) {
    if (isPageOpen(pageElement)) {
        console.error(`page ${pageElement.id} could not be opened (already opened)`);
        return;
    }

    pageElement.style.display = 'block';

    anime({
        targets: pageElement,
        duration: duration,
        opacity: [0, 1],
        easing: "easeInOutQuad"
    });

    currentlyOpenedPages.push(pageElement)
}

function hideAllPages(duration) {
    currentlyOpenedPages.forEach((elementID) => {
        hidePage(elementID, duration);
    });
}

function isPageOpen(pageElement) {
    return currentlyOpenedPages.includes(pageElement);
}

let cards = document.querySelectorAll(".card");

function openPage(pageElement) {
    if (!isPageOpen(pageElement)) {
        hideAllPages(120);
        showPage(pageElement, 120);
    }
}

cards.forEach(card => {
    card.addEventListener('click', (event) => {
        openPage(movieDetailsPage);
    })
});

moviePageExitButton.addEventListener('click', (event) => {
    openPage(mainPage);
});

// movie add
movieAddButton.addEventListener('click', (event) => {
    openPage(movieAddPage);
});
movieAddPageExitButton.addEventListener('click', (event) => {
    openPage(mainPage);
});

const multiSelectFields = document.querySelectorAll(".input-multi");
multiSelectFields.forEach((element) => {

    const lastInputElem = element.querySelector("input:last-of-type");
    // const lastInputElem = inputElems[inputElems.length - 1];

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

        clone.addEventListener("input", (event) => {

            if (clone.value.length == 0) {
                // delete if it has no value
                clone.remove();

                // move caret backwards 
                console.log(element.children);
                console.log(element.querySelector("input:last-of-type"));
                setCaretPosition(element.querySelector("input:last-of-type"), 0)
            }

        });
    });
});

// Simple function which sets the caret position and focused element
// CITE: Slightly modified version of (Josh Stodola, 2007) "Setting Cursor Position in a Textbox or TextArea with Javascript"
// LINK: https://web.archive.org/web/20090210030453/http://blog.josh420.com/archives/2007/10/setting-cursor-position-in-a-textbox-or-textarea-with-javascript.aspx
function setCaretPosition(elem, caretPos) {
    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}

// Escape key sends user back to main page
document.addEventListener('keydown', (event) => {
    if (event.key == "Escape") {
        openPage(mainPage)
    }
});

// TODO: remove debug function
// function test() {
//     console.log(openPages);
// }
// setInterval(test, 1000);

class Movie {

    constructor(name, image, directors, releaseDate, duration, genres, budget, boxOffice, countries, cast, colour, synopsis) {
        this.name = name;
        this.image = image;
        this.directors = directors;
        this.releaseDate = releaseDate;
        this.duration = duration;
        this.genres = genres;
        this.budget = budget;
        this.boxOffice = boxOffice;
        this.countries = countries;
        this.cast = cast;
        this.colour = colour;
        this.synopsis = synopsis;
    }
}