import anime, { easings, stagger } from "animejs";
import { MultiSelectField } from "./MultiFieldInput.js"

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
    // clear any input possibily left over before opening
    clearAllInputs();

    openPage(movieAddPage);
});
movieAddPageExitButton.addEventListener('click', (event) => {
    openPage(mainPage);
});


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

movieGenres = ["Drama", "Comedy", "Action", "Fantasy", "Horror", "Romance", "Western", "Thriller"]

function createDataList(id, optionValues) {
    const dataList = document.createElement("datalist");
    dataList.id = id;
    optionValues.forEach((value) => {
        const option = document.createElement("option");
        option.value = value;
        dataList.append(option);
    });
    return dataList;
}

const genreDataList = createDataList("genresList", movieGenres);
document.querySelector("#add-movie-genre").append(genreDataList);

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

const multiSelectFieldElements = document.querySelectorAll(".input-multi");
const multiSelectFields = [];

multiSelectFieldElements.forEach((element) => {
    multiSelectFields.push(new MultiSelectField(element));
});

function clearAllInputs() {
    // reset multi select fields
    multiSelectFields.forEach(multiSelectField => {
        multiSelectField.clearValues();
    });

    // reset all input elements
    const allInputElements = document.querySelectorAll("input");
    allInputElements.forEach(element => {

        switch (element.type) {
            case "color":
                // default colour as white
                element.value = "#fff"
                break;
            default:
                // else just set as empty
                element.value = ""
                break;
        }
    });
}

const posterImageDropOffElem = document.querySelector("#add-movie-image-upload-area");

posterImageDropOffElem.addEventListener("dragover", (event) => {
    event.preventDefault();
    posterImageDropOffElem.classList.add("drag-over");
});

posterImageDropOffElem.addEventListener("dragleave", (event) => {
    event.preventDefault();
    posterImageDropOffElem.classList.remove("drag-over");
});

posterImageDropOffElem.addEventListener("drop", (event) => {
    event.preventDefault();
    posterImageDropOffElem.classList.remove("drag-over");
    const image = event.dataTransfer.files[0];

    // check if image is valid
    if (image.type.startsWith("image/")) {
        // set poster image background to image
        const reader = new FileReader();
        reader.onload = (event) => {
            // set background
            posterImageDropOffElem.style.backgroundImage = `url(${event.target.result})`;
            
            // hide upload instructions
            document.querySelector("#add-movie-image-upload-instructions").style.display = "none";

            // add uploaded class to poster elem
            posterImageDropOffElem.classList.add("uploaded");
        };
        reader.readAsDataURL(image);
    }
});