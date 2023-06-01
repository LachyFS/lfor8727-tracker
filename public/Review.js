const STORAGE_KEY = "reviews"; // (captials for module scope constants)

export default class Review {
    static storeReview(movie, review) {

        // init reviews data structure if not already
        if (localStorage.getItem(STORAGE_KEY) == null) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({}));
        }

        // add review to reviews data structure
        const reviews = JSON.parse(localStorage.getItem(STORAGE_KEY));
        reviews[movie.name] = review;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    }

    static getReviewFromStorage(movie) {
        const reviews = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
        // check if movie has a review and throw error if not
        if (reviews == null || reviews[movie.name] == null) {
            return null;
        }
    
        // return review
        return reviews[movie.name];
    }

    constructor(reviewText, cinematographyStarsRating, narrativeStarsRating, visualEffectsStarsRating, watchDate) {
        // star reviews
        this.cinematographyStarsRating = cinematographyStarsRating;
        this.narrativeStarsRating = narrativeStarsRating;
        this.visualEffectsStarsRating = visualEffectsStarsRating;
        this.watchDate = watchDate;
        this.reviewText = reviewText;
        this.dateCreated = new Date();
    }
}