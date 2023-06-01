import starFilled from "./vectors/star-icon-active.svg";
import starEmpty from "./vectors/star-icon-inactive.svg";

export default class StarsInput{
    constructor(id, parentElement, label){
        
        this.value = 1;

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
                this.value = index + 1;
                this.updateStars();
            });
        }
        this.updateStars() // set initial value

        // add label
        const labelElem = document.createElement("label");
        labelElem.htmlFor = id;
        labelElem.textContent = label;
        this.container.append(labelElem);
    }

    updateStars(){
        // updates the stars to show the current value
        const stars = this.container.querySelectorAll("img");
        stars.forEach((star, index) => {
            if(index < this.value){
                star.src = starFilled;
            }else{
                star.src = starEmpty;
            }
        });
    }
}