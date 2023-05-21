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

const errorColor = '#f54242';

const MULTI_SELECT_INPUT_MAX_FIELDS = 10;
const multiSelectFields = document.querySelectorAll(".input-multi");
multiSelectFields.forEach((element) => {

    const lastInputElem = element.querySelector("input:last-of-type");

    const addButton = document.createElement("Button");
    addButton.textContent = "+";
    addButton.name = element.id;
    addButton.classList.add('add-field-button')
    element.append(addButton);

    // Getting data attributes 
    // LINK: https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
    let maxInputs = element.getAttribute("data-max");
    // if its null, use the default max inputs
    maxInputs = maxInputs == null ? MULTI_SELECT_INPUT_MAX_FIELDS : maxInputs;

    addButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (element.querySelectorAll("input").length >= maxInputs) {
            // max field animation to indicate to the user they cant add any more
            errorShakeAnimation(element.querySelector("input:last-of-type"));
            return;
        }

        const clone = lastInputElem.cloneNode();
        clone.value = "" // reset value
        element.insertBefore(clone, addButton);

        anime({
            targets: clone,
            width: ["0", "200px"],
        })

        // set selection caret to new element
        setCaretPosition(clone, 0)

        // clone.addEventListener("input", (event) => {

        //     if (clone.value.length == 0) {
        //         // delete if it has no value
        //         clone.remove();

        //         // move selection caret backwards 
        //         setCaretPosition(element.querySelector("input:last-of-type"), 0)
        //     }

        // });
    });
});

document.addEventListener("keydown", (event) => {
    // delete handling for when user presses backspace on a multi input field while editing it
    // this logic could be a bit cleaner with a switch statement but switch cases don't create new block scopes
    if (event.key == 'Backspace') {
        const { selectedInput, MultiInputContainer } = getSelectedMultiInputSelect();
        if (selectedInput
            && MultiInputContainer
            && (selectedInput.value.length == 0 || selectedInput.selectionStart == 0)) {

            if (MultiInputContainer.querySelectorAll("input").length > 1) {
                // delete the input element
                selectedInput.remove();
                // move selection caret backwards 
                setCaretPosition(MultiInputContainer.querySelector("input:last-of-type"), 0);
            } else{
                // display shake animation when you try to delete the last remaining input 
                errorShakeAnimation(MultiInputContainer.querySelector("input"));
            }
        }
    } else if (event.key == 'ArrowLeft') {
        const { selectedInput, MultiInputContainer } = getSelectedMultiInputSelect();
        if (selectedInput
            && MultiInputContainer
            && (selectedInput.selectionStart == 0)) {
            if (selectedInput != MultiInputContainer.querySelector("input")) {
                if (selectedInput.previousElementSibling.nodeName == 'INPUT') {
                    // move to previous input
                    setCaretPosition(selectedInput.previousElementSibling, 0)
                }
            }
        }
    } else if (event.key == 'ArrowRight') {
        const { selectedInput, MultiInputContainer } = getSelectedMultiInputSelect();
        console.log(selectedInput.selectionStart);
        if (selectedInput
            && MultiInputContainer
            && (selectedInput.selectionStart == selectedInput.value.length)) {
            console.log("moive");
            if (selectedInput != MultiInputContainer.querySelector("input:last-of-type")) {
                if (selectedInput.nextElementSibling.nodeName == 'INPUT') {
                    // move to next input
                    setCaretPosition(selectedInput.nextElementSibling, 0)
                }
            }
        }
    }
});

function errorShakeAnimation(target) {
    anime({
        targets: target,
        translateX: ["0.75em", 0],
    });
}

function getSelectedMultiInputSelect() {
    if (document.activeElement // make sure something is selected
        && document.activeElement.parentElement) { // makes sures parent exists

        const selected = document.activeElement;
        const parent = document.activeElement.parentElement;

        if (
            parent.classList.contains("input-multi") // make sure its inside a multi-select element
            && selected.nodeName == 'INPUT' // make sure its an input node
        ) {
            return { selectedInput: selected, MultiInputContainer: parent };
        }
    }
    return { selectedInput: null, MultiInputContainer: null };
}

// Simple function which sets the caret position and focused element
// CITE: Slightly modified version of (Josh Stodola, 2007) "Setting Cursor Position in a Textbox or TextArea with Javascript"
// LINK: https://web.archive.org/web/20090210030453/http://blog.josh420.com/archives/2007/10/setting-cursor-position-in-a-textbox-or-textarea-with-javascript.aspx
function setCaretPosition(elem, caretPos) {
    if (elem != null) {
        if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if (elem.selectionStart) {
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