import anime, { easings, stagger } from "animejs";
import { MultiSelectField } from "./MultiFieldInput.js"

// icons
import moviesIconActive from "./vectors/movies-icon-active.svg";
import moviesIconInactive from "./vectors/movies-icon-inactive.svg";

import reviewsIconActive from "./vectors/star-icon-active.svg";
import reviewsIconInactive from "./vectors/star-icon-inactive.svg";

import watchlistIconActive from "./vectors/watch-icon-active.svg";
import watchlistIconInactive from "./vectors/watch-icon-inactive.svg";

const movieDetailsPage = document.querySelector('#movie-details-page');

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
        hideAllPages(200);
        showPage(pageElement, 200);
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

    // get image from global variable (set in image upload function)
    const image = currentlyUploadedImage;

    // get array values from multi-select fields
    const directors = multiSelectFields["add-movie-directed-by"].getValues();
    const genres = multiSelectFields["add-movie-genres"].getValues();
    const countries = multiSelectFields["add-movie-countries"].getValues();
    const cast = multiSelectFields["add-movie-cast"].getValues();


    function parseMoney(moneyString) {
        // remove all non-numeric characters with regex 
        // CITE: https://stackoverflow.com/questions/1862130/strip-all-non-numeric-characters-from-string-in-javascript
        const parsedMoney = String(moneyString).replace(/\D/g, "");

        // convert to number
        return Number(parsedMoney);
    }

    // parse money values
    const budget = parseMoney(document.querySelector("#add-movie-budget").value);
    const boxOffice = parseMoney(document.querySelector("#add-movie-box-office").value);

    // get other values
    const releaseDate = document.querySelector("#add-movie-release-date").value;
    const duration = document.querySelector("#add-movie-duration").value;
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

function setMovieDetails(movie) {

    // set title
    movieDetailsPage.querySelector("#movie-details-title").textContent = movie.name;

    // set image source if available
    if (movie.image) {
        movieDetailsPage.querySelector("#movie-details-poster").src = movie.image;
    }

    // set subheading year and genres
    movieDetailsPage.querySelector("#movie-details-year").textContent = movie.releaseDate.split("-")[0];
    movieDetailsPage.querySelector("#movie-details-genre").textContent = movie.genres.join(" | ");

    // set synopsis
    movieDetailsPage.querySelector("#movie-details-synopsis").textContent = movie.synopsis;

    // set directors
    movieDetailsPage.querySelector("#movie-details-directors").textContent = movie.directors.join(", ");

    // set release date
    // format release date as day month year
    // CITE: https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
    const releaseDateFormatted = new Date(movie.releaseDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    movieDetailsPage.querySelector("#movie-details-release-date").textContent = releaseDateFormatted;

    // set runtime
    // convert minutes to hours and minutes
    const durationFormatted = `${Math.floor(movie.duration / 60)}h ${movie.duration % 60}m`;
    movieDetailsPage.querySelector("#movie-details-runtime").textContent = durationFormatted;

    // set budget
    // format end with millions or billions
    const formattedBudget = formatMoney(movie.budget);
    movieDetailsPage.querySelector("#movie-details-budget").textContent = formattedBudget;

    // set box office
    // format end with millions or billions
    const formattedBoxOffice = formatMoney(movie.boxOffice);
    movieDetailsPage.querySelector("#movie-details-box-office").textContent = formattedBoxOffice;

    // set countries
    movieDetailsPage.querySelector("#movie-details-country").textContent = movie.countries.join(", ");

    // set list of cast
    maxDisplayedCast = 5;
    const castList = movieDetailsPage.querySelector("#movie-details-cast-list");

    // clear list
    castList.innerHTML = "";

    for (let i = 0; i < Math.min(maxDisplayedCast + 1, movie.cast.length); i++) {
        const listElem = document.createElement("li");
        if (i == maxDisplayedCast) {
            listElem.textContent = "and more...";
        } else {
            listElem.textContent = movie.cast[i];
        }
        castList.append(listElem);
    }

    // movie.cast.forEach((actor) => {
    //     const actorElement = document.createElement("li");
    //     actorElement.textContent = actor;
    //     castList.append(actorElement);
    // });

    function formatMoney(value) {
        let budgetFormatted = value;
        // if value is greater than a millon
        if (value > 1000000) {
            // format end with millions or billions when over 1 billion
            budgetFormatted = value / 1000000 > 1000 ? `${value / 1000000000} billion` : `${value / 1000000} million`;
        }

        // add commas to separate thousands using regex
        // CITE: https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
        budgetFormatted = budgetFormatted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return budgetFormatted;
    }
}




// add movie cards
const movieCardContainer = document.querySelector("#card-container-based-on-reviews");

function addMovieCard(movie, parentElement) {
    const container = document.createElement("div");
    container.classList.add("card");

    // backdrop container
    const backdropContainer = document.createElement("div");
    backdropContainer.classList.add("card-backdrop");

    // card info container
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    backdropContainer.append(cardInfo);

    // card info heading
    const heading = document.createElement("h2");
    heading.textContent = movie.name;
    heading.classList.add("card-heading");
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

    // set background image if available
    if (movie.image) {
        container.style.backgroundImage = `url(${movie.image})`;
    }

    container.append(backdropContainer);

    // callback function for when the card is clicked
    container.addEventListener("click", (event) => {
        openPage(movieDetailsPage);
        setMovieDetails(movie)
    });

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

    readImageAsBase64(image, (base64Image) => {
        // set background
        updateUploadedPosterImage(base64Image);
    });
});

// browse files upload poster image
const posterImageBrowseButton = document.querySelector("#add-movie-image-upload-browse-link");

posterImageBrowseButton.addEventListener("click", (event) => {
    event.preventDefault();

    // open browse file
    browseImagePosterSelect();
});

function browseImagePosterSelect() {
    const fileInput = document.createElement("input");

    // set file input attributes
    fileInput.type = "file";
    fileInput.accept = "image/*";

    // click file input to open file browser
    fileInput.click();

    // handle file input change
    fileInput.addEventListener("change", (event) => {
        const image = event.target.files[0];

        readImageAsBase64(image, (base64Image) => {
            updateUploadedPosterImage(base64Image);

            // remove file input from DOM after use
            fileInput.remove();
        });
    }, { once: true });
}

function readImageAsBase64(image, callback) {
    // validation
    if (!image.type.startsWith("image/")) {
        throw new Error("Invalid image type");
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        // call callback with base64 encoded image as argument
        callback(event.target.result);
    };
    // read image as a data url
    reader.readAsDataURL(image);
}


function updateUploadedPosterImage(base64Image) {
    posterImageDropOffElem.style.backgroundImage = `url(${base64Image})`;

    // updated currently uploaded image
    currentlyUploadedImage = base64Image;

    // add uploaded class to poster elem
    posterImageDropOffElem.classList.add("uploaded");

    // allow user to change image by clicking on the poster
    posterImageDropOffElem.addEventListener("click", (event) => {
        event.preventDefault();
        browseImagePosterSelect();
    }, { once: true }); // only once to prevent multiple event listeners being added
}
