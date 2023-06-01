import starFilled from "./vectors/star-icon-active.svg";
import starEmpty from "./vectors/star-icon-inactive.svg";

export default class StarsInput {
    constructor(id, parentElement, label) {

        this.value = 0;
        this.changeCallbacks = [];

        this.container = document.createElement("div");
        this.container.id = id;
        this.container.classList.add("input-stars");
        parentElement.append(this.container);

        for (let index = 0; index < 5; index++) {
            const star = document.createElement("img");
            star.src = starEmpty;
            star.classList.add("input-star");
            this.container.append(star);

            star.addEventListener("click", () => {
                if (this.value !== index + 1) {
                    this.value = index + 1;
                    this.updateStars();
                    // call all change callbacks
                    this.changeCallbacks.forEach(callback => callback(this.value));
                }
            });
        }

        this.updateStars() // set initial value

        // add label
        const labelElem = document.createElement("label");
        labelElem.htmlFor = id;
        labelElem.textContent = label;
        this.container.append(labelElem);
    }

    reset() {
        this.value = 0;
        this.updateStars();
    }

    setValue(value) {
        if (value < 0 || value > 5) {
            throw new Error("StarsInput value must be between 1 and 5");
        }
        this.value = value;
        this.updateStars();
    }


    updateStars() {
        // updates the stars to show the current value
        const stars = this.container.querySelectorAll("img");
        stars.forEach((star, index) => {
            if (index < this.value) {
                star.src = starFilled;
            } else {
                star.src = starEmpty;
            }
        });
    }

    addOnChangeCallback(callback) {
        this.changeCallbacks.push(callback);
    }
}