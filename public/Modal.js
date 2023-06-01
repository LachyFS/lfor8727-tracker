export default class Modal {

    // static methods are called on the class itself, not on instances of the class
    // CITE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
    static createBackdrop = () => {

        const backdropElem = document.createElement("div");

        // id instead of class because should be unique
        backdropElem.id = "modal-backdrop";

        // we need to wait for DOM content to load before we can append the backdrop
        document.addEventListener('DOMContentLoaded', () => {

            document.querySelector("body").append(backdropElem);
        });

        // we can still return the element because its a reference type
        // and will be appended when DOM content is loaded later
        return backdropElem;
    };

    static disableScroll() {
        document.querySelector("body").classList.add("disable-scroll");
    }

    static enabledScroll() {
        document.querySelector("body").classList.remove("disable-scroll");
    }

    static backdrop = this.createBackdrop();

    constructor(titleText, messageText, continueCallback) {

        // callbacks
        this.continueCallback = continueCallback;

        // create modal container
        this.container = document.createElement("div");
        this.container.classList.add("modal");
        // modal should be on top of backdrop
        this.container.style.zIndex = Modal.backdrop.style.zIndex + 1;
        document.querySelector("body").append(this.container);

        // title
        this.titleElem = document.createElement("h1");
        this.titleElem.textContent = titleText;
        this.container.append(this.titleElem);

        // message
        this.messageElem = document.createElement("p");
        this.messageElem.textContent = messageText;
        this.container.append(this.messageElem);

        // button container
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("modal-button-container");
        this.container.append(buttonContainer);

        // continue button
        this.continueButton = document.createElement("button");
        this.continueButton.textContent = "Continue";
        this.continueButton.classList.add("modal-continue-button");
        buttonContainer.append(this.continueButton);

        // cancel button
        this.cancelButton = document.createElement("button");
        this.cancelButton.textContent = "Cancel";
        this.cancelButton.classList.add("modal-cancel-button");
        buttonContainer.append(this.cancelButton);

        this.addListeners();

        // close modal by default
        this.close();
    }

    addListeners() {

        // continue button
        this.continueButton.addEventListener('click', () => {
            this.close();
            this.continueCallback();
        });

        // close modal events 
        // escape key
        document.addEventListener('keydown', e => {
            if (e.key === "Escape") {
                this.close();
            }
        });

        // cancel button
        this.cancelButton.addEventListener('click', () => this.close());
    }

    open() {
        this.container.classList.add("modal-open");
        this.container.classList.remove("modal-close");

        // show backdrop
        Modal.backdrop.style.display = "block";

        // disable scroll
        Modal.disableScroll();

    }

    close() {
        this.container.classList.add("modal-close");
        this.container.classList.remove("modal-open");

        // hide backdrop
        Modal.backdrop.style.display = "none";

        // enable scroll
        Modal.enabledScroll();
    }
}