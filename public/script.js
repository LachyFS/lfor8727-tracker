import anime, { easings, stagger } from "animejs";
import { MultiSelectField } from "./MultiFieldInput.js"

// icons
import moviesIconActive from "./vectors/movies-icon-active.svg";
import moviesIconInactive from "./vectors/movies-icon-inactive.svg";

import reviewsIconActive from "./vectors/star-icon-active.svg";
import reviewsIconInactive from "./vectors/star-icon-inactive.svg";

import watchlistIconActive from "./vectors/watch-icon-active.svg";
import watchlistIconInactive from "./vectors/watch-icon-inactive.svg";

import { moviesDataset } from "./data/movies.js";
import PosterUploadArea from "./PosterUploadArea.js";
import StarsInput from "./StarsInput.js";
import Review from "./Review.js";
import Modal from "./Modal.js";

const movieDetailsPage = document.querySelector('#movie-details-page');

const movieAddPage = document.querySelector('#movieAddPage')
const movieAddButton = document.querySelector('#addMovieButton')
const movieAddPageExitButton = document.querySelector('#movieAddPageExitButton');

const mainPage = document.querySelector('#mainPage');
const moviePageExitButton = document.querySelector('#moviePageExitButton');

const currentlyOpenedPages = [mainPage];

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

// movie details functionality

// construcct DOM elements for star rating inputs
const starRatingContainer = document.querySelector("#movie-review-star-ratings");
const cinematographyStarsRating = new StarsInput("movie-review-cinematography-stars", starRatingContainer, "Cinematography");
const narrativeStarsRating = new StarsInput("movie-review-narrative-stars", starRatingContainer, "Narrative");
const visualEffectsStarsRating = new StarsInput("movie-review-visual-effects-stars", starRatingContainer, "Visual Effects");

// review submission
function getEnteredUserReview() {
    const reviewText = document.querySelector("#review-text-review").value;
    const cinematographyScore = cinematographyStarsRating.value;
    const narrativeScore = narrativeStarsRating.value;
    const visualEffectsScore = visualEffectsStarsRating.value;
    const watchDate = document.querySelector("#review-watch-date").value;

    // TODO: validate input

    return new Review(reviewText, cinematographyScore, narrativeScore, visualEffectsScore, watchDate);
}

// Delete and Watch later icons
const deleteIcon = document.querySelector("#movie-details-remove-icon");
const watchLaterIcon = document.querySelector("#movie-details-watchlist-icon");

deleteIcon.addEventListener('click', (event) => {
    tryDeleteCurrentMovie(currentlyOpenMovie)
});

// TODO
watchLaterIcon.addEventListener('click', (event) => {

});

let currentlyOpenMovie = {};

const reviewSubmitButton = document.querySelector("#add-review-button");

reviewSubmitButton.addEventListener('click', (event) => {
    event.preventDefault(); // prevent page refresh on form submission 
    const review = getEnteredUserReview();
    Review.storeReview(currentlyOpenMovie, review);
    setMovieDetails(currentlyOpenMovie); // update movie details
    renderCards();
});


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

// movies data structure
const movies = getMovies();
updateMoviesStorage();

// watch list data structure
const watchList = getWatchList();
updateWatchlistStorage();

function updateMoviesStorage() {
    localStorage.setItem("movies", JSON.stringify(movies));
}

// add stored movies from local storage
function getMovies() {

    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    // if no movies are stored, return a populated dataset
    if (storedMovies == null) {
        // return pre-existing movies dataset
        return moviesDataset;
    }

    return storedMovies;
}

function getWatchList() {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist"));
    if (storedWatchlist == null) {
        return [];
    }
    return storedWatchlist;
}

function updateWatchlistStorage() {
    localStorage.setItem("watchlist", JSON.stringify(watchList));
}

function addToWatchList(movie) {
    watchList.push(movie);
    updateWatchlistStorage();
}

// add movie button event listener
const addMovieButton = document.querySelector("#add-movie-button");
addMovieButton.addEventListener("click", (event) => {
    event.preventDefault();

    // get all the data from the form
    const name = document.querySelector("#add-movie-name").value;

    // get image from global variable (set in image upload function)
    const image = posterUpload.loadedImage;

    // get array values from multi-select fields
    const directors = multiSelectFields["add-movie-directed-by"].getValues();
    const genres = multiSelectFields["add-movie-genres"].getValues();
    const countries = multiSelectFields["add-movie-countries"].getValues();
    const cast = multiSelectFields["add-movie-cast"].getValues();

    function parseCurrency(moneyString) {
        // remove all non-numeric characters with regex 
        // CITE: https://stackoverflow.com/questions/1862130/strip-all-non-numeric-characters-from-string-in-javascript
        const parsedMoney = String(moneyString).replace(/\D/g, "");

        // convert to number
        return Number(parsedMoney);
    }

    // parse money values
    const budget = parseCurrency(document.querySelector("#add-movie-budget").value);
    const boxOffice = parseCurrency(document.querySelector("#add-movie-box-office").value);

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

// check for review changes
const reviewTextArea = document.querySelector("#review-text-review");

function handleReviewChange() {
    // check if review exists wuth currently selected movie
    if (Review.getReviewFromStorage(currentlyOpenMovie)) {
        displayUpdateReviewButton();
    }
}

// change event on text area
reviewTextArea.addEventListener('input', (event) => {
    handleReviewChange();
});

// change event on stars
visualEffectsStarsRating.addOnChangeCallback(handleReviewChange);
narrativeStarsRating.addOnChangeCallback(handleReviewChange);
cinematographyStarsRating.addOnChangeCallback(handleReviewChange);

// change event on date input
const reviewFormDateInput = document.querySelector("#review-watch-date");
reviewFormDateInput.addEventListener('change', (event) => {
    handleReviewChange();
});


function displayUpdateReviewButton() {
    reviewSubmitButton.style.display = "block"; // show submit button

    // rename to 'update review'
    reviewSubmitButton.textContent = "Update Review";
}

function addMovie(movie) {
    // add movie to movies object
    movies[movie.name] = movie;

    // update local storage
    updateMoviesStorage();
}

function setMovieDetails(movie) {

    // set currently open movie
    currentlyOpenMovie = movie;

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

    // change review heading to 'your review'
    const form = document.querySelector(".movie-page-container form");
    const formTextArea = form.querySelector("#review-text-review");
    const heading = form.querySelector("h2");

    heading.textContent = "Write Review";
    reviewSubmitButton.textContent = "Add Review";

    // if review exists for a movie
    const review = Review.getReviewFromStorage(movie);

    
    if (review != null) {
        heading.textContent = "Your Review";
        
        // set review text
        formTextArea.value = review.reviewText;
        
        // get values of rating elements 
        console.log(review);
        console.log(review.visualEffectsRating);
        visualEffectsStarsRating.setValue(review.visualEffectsStarsRating);
        narrativeStarsRating.setValue(review.narrativeStarsRating);
        cinematographyStarsRating.setValue(review.cinematographyStarsRating);

        // we want to hide the submit button
        reviewSubmitButton.style.display = "none";
    } else {
        // else clear all form inputs because no review exists

        // clear text area
        formTextArea.value = "";

        // reset date input by setting it to current date
        reviewFormDateInput.value = new Date().toISOString().split("T")[0]; // set to today's date by default

        // reset star ratings if they were changed before
        visualEffectsStarsRating.reset();
        narrativeStarsRating.reset();
        cinematographyStarsRating.reset();

        // make sure submit button is shown
        reviewSubmitButton.style.display = "block";
    }

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
function addMovieCard(movie, parentElement, showReview = false) {

    // card container
    const container = document.createElement("div");
    container.classList.add("card");
    parentElement.append(container);

    // backdrop container
    const backdropContainer = document.createElement("div");
    backdropContainer.classList.add("card-backdrop");
    container.append(backdropContainer);

    // card image (displays on hover)
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    backdropContainer.append(cardInfo);

    if (showReview && Review.getReviewFromStorage(movie)) {
    
        const review = Review.getReviewFromStorage(movie);

        const dateText = document.createElement("strong");
        
        
        const reviewText = document.createElement("p");
        // limit text to 100 chars max and add ellipsis (handles spaces with trim)
        const truncatedReviewText = review.reviewText.length > 100 ? review.reviewText.substring(0, 100).trim() + "..." : review.reviewText;
        reviewText.textContent = truncatedReviewText;
        reviewText.classList.add("card-review-text");
        cardInfo.append(reviewText);
        
        // card banner
        const cardBanner = document.createElement("div");
        cardBanner.classList.add("card-banner");
        container.append(cardBanner);

        
        // display average stars rating always
        const averageStarsRatingContainer = document.createElement("div");
        averageStarsRatingContainer.classList.add("card-average-stars-container");
        cardBanner.append(averageStarsRatingContainer);

        // display date review was written
        const daysAgo = Math.floor((new Date() - new Date(review.watchDate)) / (1000 * 60 * 60 * 24));
        dateText.textContent = `${daysAgo} days ago`; // if review was written x days ago
        if (daysAgo == 0) dateText.textContent = "Today"; // if review was written today
        cardBanner.append(dateText);

        
        // display average stars rating rounded to nearest integer (star)
        const averageStarRating = Math.round(Review.getAverageStarsRating(review));

        for (let i = 0; i < averageStarRating; i++) {
            const star = document.createElement("img");
            star.classList.add("star");
            star.src = reviewsIconActive;
            averageStarsRatingContainer.append(star);
        }

        for (let i = 0; i < 5 - averageStarRating; i++) {
            const star = document.createElement("img");
            star.classList.add("star");
            star.src = reviewsIconInactive;
            averageStarsRatingContainer.append(star);
        }

    } else {

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
    }

    // set background image if available
    if (movie.image) {
        container.style.backgroundImage = `url(${movie.image})`;
    }

    // callback function for when the card is clicked
    container.addEventListener("click", (event) => {
        openPage(movieDetailsPage);
        setMovieDetails(movie)
    });
}

const deleteWarningModal = new Modal("Are you sure?",
    "Deleting this movie will permanently remove it. This cannot be undone.",
    () => { deleteMovie(currentlyOpenMovie) });

function tryDeleteCurrentMovie() {
    // open modal
    deleteWarningModal.open();
}

function deleteMovie(movie) {

    // remove movie from movies object
    delete movies[movie.name];

    // remove related review
    Review.removeReview(movie);

    // update local storage
    updateMoviesStorage()

    // go back to main page because current movie no longer exists
    openPage(mainPage);

    // re-render cards to remove deleted movie
    renderCards();
}

function renderCards() {

    // make sure container is clearewd
    movieCardContainer.innerHTML = "";

    const suggestionsCount = 8;
    let i = 0;
    for (var movie in movies) {
        if (i >= suggestionsCount) {
            break;
        }
        addMovieCard(movies[movie], movieCardContainer);
        i++;
    }

    const reviewCardContainer = document.querySelector("#card-container-recent-reviews");
    reviewCardContainer.innerHTML = "";

    // get all reviews
    const reviews = Review.getReviews();
    for (var movieName in reviews) {
        const reviewObject = reviews[movieName];

        const movie = movies[movieName];

        // add card with review
        addMovieCard(movie, reviewCardContainer, true);
    }
}

renderCards();

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
                element.value = "#ffffff"
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

const posterUpload = new PosterUploadArea("add-movie-image-upload-area");