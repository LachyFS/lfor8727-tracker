import anime, { easings, stagger } from "animejs";
import { MultiSelectField } from "./MultiFieldInput.js"

// icons
import moviesIconActive from "./vectors/movies-icon-active.svg";
import moviesIconInactive from "./vectors/movies-icon-inactive.svg";

import reviewsIconActive from "./vectors/star-icon-active.svg";
import reviewsIconInactive from "./vectors/star-icon-inactive.svg";

import watchlistIconActive from "./vectors/watch-icon-active.svg";
import watchlistIconInactive from "./vectors/watch-icon-inactive.svg";

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


const moviesButtonHandler = createNavButtonHandler("movies-button", moviesIconActive, moviesIconInactive);
const reviewsButtonHandler = createNavButtonHandler("reviews-button", reviewsIconActive, reviewsIconInactive);
const watchlistButtonHandler = createNavButtonHandler("watchlist-button", watchlistIconActive, watchlistIconInactive);

function createNavButtonHandler(buttonId, activeIcon, inactiveIcon) {
    
    const element = document.querySelector(`#${buttonId}`);

    const icon = element.querySelector("img");

    element.addEventListener('click', (event) => {
        deselectNavButtons();
    });

    return {
        element: element,
        setActive: () => {
            element.classList.add("selected");
            icon.src = activeIcon;
        },
        setInactive: () => {
            element.classList.remove("selected");
            icon.src = inactiveIcon;
        },
    };
}

function deselectNavButtons() {
    moviesButtonHandler.setInactive();
    reviewsButtonHandler.setInactive();
    watchlistButtonHandler.setInactive();
}

moviesButtonHandler.element.addEventListener('click', (event) => {
    deselectNavButtons();
    moviesButtonHandler.setActive();
});

reviewsButtonHandler.element.addEventListener('click', (event) => {
    deselectNavButtons();
    reviewsButtonHandler.setActive();
});

watchlistButtonHandler.element.addEventListener('click', (event) => {
    deselectNavButtons();
    watchlistButtonHandler.setActive();
});


// Escape key sends user back to main page
document.addEventListener('keydown', (event) => {
    if (event.key == "Escape") {
        openPage(mainPage)
    }
});

// nav bar buttons


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
        this.createDate = new Date();
    }
}



// add stored movies from local storage
function getStoredMovies() {
    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    // if no movies are stored, return empty object
    if (storedMovies == null) {
        return {};
    }
    return storedMovies;
}

movies = getStoredMovies();

// add movie button event listener
const addMovieButton = document.querySelector("#add-movie-button");
addMovieButton.addEventListener("click", (event) => {
    event.preventDefault();

    // get all the data from the form
    const name = document.querySelector("#add-movie-name").value;
    const image = currentlyUploadedImage;
    const directors = multiSelectFields["add-movie-directed-by"].getValues();
    const releaseDate = document.querySelector("#add-movie-release-date").value;
    const duration = document.querySelector("#add-movie-duration").value;
    const genres = multiSelectFields["add-movie-genres"].getValues();
    const budget = document.querySelector("#add-movie-budget").value;
    const boxOffice = document.querySelector("#add-movie-box-office").value;
    const countries = multiSelectFields["add-movie-countries"].getValues();
    const cast = multiSelectFields["add-movie-cast"].getValues();
    const colour = document.querySelector("#add-movie-colour").value;
    const synopsis = document.querySelector("#add-movie-synopsis").value;

    // create movie object
    const movie = new Movie(
        name,
        image,
        directors,
        releaseDate,
        duration,
        genres,
        budget,
        boxOffice,
        countries,
        cast,
        colour,
        synopsis
    );

    addMovie(movie);

    addMovieCard(movie, movieCardContainer);
});

function addMovie(movie) {
    // add movie to movies object
    movies[movie.name] = movie;

    // update local storage
    localStorage.setItem("movies", JSON.stringify(movies));
}

// add movie cards
const movieCardContainer = document.querySelector("#card-container-based-on-reviews");

function addMovieCard(movie, parentElement) {
    const container = document.createElement("div");
    container.classList.add("card");

    // movie title
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    // card info heading
    const heading = document.createElement("h2");
    heading.textContent = movie.name;
    cardInfo.append(heading);

    // footer
    const footer = document.createElement("div");
    footer.classList.add("card-footer");
    cardInfo.append(footer);

    // card info year
    const year = document.createElement("p");
    year.classList.add("card-year");
    // split release date by "-" and get the first element (year)
    year.textContent = movie.releaseDate.split("-")[0];
    footer.append(year);

    // card info genres
    const genres = document.createElement("p");
    genres.classList.add("card-genres");
    genres.textContent = movie.genres.join(" | ");
    footer.append(genres);

    container.append(cardInfo);

    parentElement.append(container);
}

function addAllMovieCards() {
    for (var movie in movies) {
        addMovieCard(movies[movie], movieCardContainer);
    }
}

addAllMovieCards();


const multiSelectFieldElements = document.querySelectorAll(".input-multi");

// key pair value of id and multi select field 
const multiSelectFields = {};
multiSelectFieldElements.forEach((element) => {
    multiSelectFields[element.id] = new MultiSelectField(element);
});

function clearAllInputs() {
    // reset multi select fields
    for (var id in multiSelectFields) {
        const multiSelectField = multiSelectFields[id];
        multiSelectField.clearValues();
    }

    // reset all input elements
    const allInputElements = document.querySelectorAll("input");
    allInputElements.forEach(element => {

        switch (element.type) {
            case "submit":
                // do not clear submit buttons
                break;
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

    // clear text areas
    const allTextAreaElements = document.querySelectorAll("textarea");
    allTextAreaElements.forEach(element => {
        element.value = "";
    });
}

const posterImageDropOffElem = document.querySelector("#add-movie-image-upload-area");
let currentlyUploadedImage = "";

// drag and drop file upload for poster image
// CITE: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/

// prevent event bubbling for drag / drop events
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventListenerName => {
    posterImageDropOffElem.addEventListener(eventListenerName, (event) => {
        event.preventDefault();
        event.stopPropagation();
    });
});

// highlight drop off area when file is dragged over
['dragenter', 'dragover'].forEach(eventListenerName => {
    posterImageDropOffElem.addEventListener(eventListenerName, (event) => {
        event.preventDefault();
        posterImageDropOffElem.classList.add("drag-over");
    });
});

// remove highlight when file is dragged away
['dragleave', 'drop'].forEach(eventListenerName => {
    posterImageDropOffElem.addEventListener(eventListenerName, (event) => {
        event.preventDefault();
        posterImageDropOffElem.classList.remove("drag-over");
    });
});

// handle file drop
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

            // add uploaded class to poster elem
            posterImageDropOffElem.classList.add("uploaded");

            // updated currently uploaded image
            currentlyUploadedImage = image;
        };
        // read image as a data url
        reader.readAsDataURL(image);
    }
});