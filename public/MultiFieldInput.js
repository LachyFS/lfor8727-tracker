import { errorShakeAnimation } from './animations.js';
import { setCaretPosition } from './Util.js'
import anime from 'animejs';

export class MultiSelectField {
    
    static DEFAULT_MAX_FIELDS = 10;

    constructor(containerElement) {
        this.containerElem = containerElement;
        const containedInputs = this.containerElem.querySelector("input");

        // if no contained inputs
        if (!containedInputs) {
            throw new Error("Multi select field is missing a template input field.")
        } else if (containedInputs.length > 1) {

            // Should only contain 1 input element to clone, if multiple we just clone the first one
            console.warn("Multi select fields should have only 1 template input.")
        }
        let maxInputs = this.containerElem.getAttribute("max");
        this.maxInputs = maxInputs == null ? MultiSelectField.DEFAULT_MAX_FIELDS : maxInputs;

        this.addButton = this.createButton();

        this.addKeyboardEventListener();
    }

    createButton() {
        const addButton = document.createElement("Button");
        addButton.textContent = "+";
        addButton.name = this.containerElem.id;
        addButton.classList.add('add-field-button');
        this.containerElem.append(addButton);

        // button event listen for adding a new field entry
        addButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.TryAddNewInputField();
        });
        return addButton;
    }

    addKeyboardEventListener() {
        document.addEventListener("keydown", (event) => {
            if (event.key == 'Backspace') {
                const selectedInput = this.getCurrentlySelectedInput();
                if (selectedInput && (selectedInput.value.length == 0 || selectedInput.selectionStart == 0)) {
                    if (this.getInputFields().length > 1) {
                        this.removeInput(selectedInput);
                        this.setCaretPosition(this.getLastInputField(), 0);
                    } else {
                        errorShakeAnimation(this.containerElem.querySelector("input"));
                    }
                }
            } else if (event.key == 'ArrowLeft') {
                const selectedInput = this.getCurrentlySelectedInput();
                if (selectedInput && this.containerElem && (selectedInput.selectionStart == 0)) {
                    this.setCaretPosition(selectedInput.previousElementSibling, 0);
                }
            } else if (event.key == 'ArrowRight') {
                const selectedInput = this.getCurrentlySelectedInput();
                if (selectedInput && this.containerElem && (selectedInput.selectionStart == selectedInput.value.length)) {
                    if (selectedInput != this.containerElem.querySelector("input:last-of-type")) {
                        this.setCaretPosition(selectedInput.nextElementSibling, 0);
                    }
                }
            } else if (event.key == 'Enter') {
                if (this.getCurrentlySelectedInput()) {
                    this.TryAddNewInputField();
                }
            }
        });
    }

    removeInput(selectedInput) {
        selectedInput.remove();
        if (this.getInputFields().length < this.maxInputs){
            this.addButton.style.display = '';
        }
    }

    getInputFields() {
        return this.containerElem.querySelectorAll("input");
    }

    TryAddNewInputField() {
        const lastInputElem = this.getLastInputField();

        let inputCount = this.containerElem.querySelectorAll("input").length;
        if (inputCount >= this.maxInputs) {
            errorShakeAnimation(lastInputElem);
            return;
        }

        const clone = lastInputElem.cloneNode();
        clone.value = "";
        this.containerElem.insertBefore(clone, this.addButton);
        inputCount++;

        anime({
            targets: clone,
            width: ["0", "200px"],
        });

        this.setCaretPosition(clone, 0);

        console.log(inputCount);
        // hide plus if reached the max number of inputs
        if (inputCount >= this.maxInputs){
            this.hideButton();
        }
    }

    hideButton(){
        this.addButton.style.display = 'none';
    }
    
    showButton(){
        this.addButton.style.display = '';
    }

    getCurrentlySelectedInput() {
        // return selected 
        const selected = document.activeElement;
        const parent = document.activeElement.parentElement;
        if (selected
            && parent
            && parent == this.containerElem
            && selected.nodeName == 'INPUT') {
            return selected;
        } else {
            return null
        }
    }

    getLastInputField() {
        return this.containerElem.querySelector("input:last-of-type");
    }
}
