import { errorShakeAnimation } from './animations.js';
import { setCaretPosition } from './Util.js'
import anime, { remove } from 'animejs';
import exitVectorImage from './vectors/cross.svg'

export class MultiSelectField {

    static DEFAULT_MAX_FIELDS = 10;

    constructor(containerElement, inputWidth = '250px', count = 1) {

        this.inputWidth = inputWidth;

        // element that contains all the inputs
        this.containerElem = containerElement;

        // get label template from nested label tag (first one, if it exists)
        this.labelElement = containerElement.querySelector("label").cloneNode(true);
        // put the label element above the multi select field
        if (this.labelElement){
            containerElement.parentElement.insertBefore(this.labelElement, containerElement);
        }

        // find which input tag to clone based the first contained input element
        this.templateInputField = this.getTemplateInputField(containerElement);

        // remove everything inside the container because we've gotten the input template
        containerElement.textContent = "";

        // determine the max number of allowed inputs by the elements "max" attribute
        this.maxInputs = containerElement.getAttribute("max");
        // if max is not given, a default value is used.
        if (this.maxInputs == undefined) {
            this.maxInputs = MultiSelectField.DEFAULT_MAX_FIELDS;
        }


        // add the first input/s
        for (let i = 0; i < count; i++) {
            this.TryAddFieldBox();
        }

        // create add button to add new fields
        this.addButton = this.createAddFieldButton(() => { this.TryAddFieldBox(); });

        // keyboard listener for add, delete and field navigation
        this.addKeyboardEventListener();
    }

    getTemplateInputField() {
        const containedInputs = this.containerElem.querySelectorAll("input");

        // if no contained inputs
        if (!containedInputs) {
            throw new Error("Multi select field is missing a template input field.");
        } else if (containedInputs.length > 1) {
            // Should only contain 1 input element to clone, if multiple we just clone the first one
            console.warn("Multi select fields should have only 1 template input.");
        }
        return containedInputs[0].cloneNode();
    }

    addInputField() {
        const inputFieldElem = document.createElement("div");
        const input = this.templateInputField.cloneNode();
        inputFieldElem.append(input);
        const removeButton = this.createRemoveFieldButton(() => {
            this.tryRemoveFieldBox(inputFieldElem);
        });
        inputFieldElem.append(removeButton);
        return inputFieldElem;
    }

    createAddFieldButton(callback) {
        const addButton = document.createElement("Button");
        addButton.textContent = "+";
        addButton.name = this.containerElem.id;
        addButton.classList.add('add-field-button');
        this.containerElem.append(addButton);

        // button event listen for adding a new field entry
        addButton.addEventListener("click", (event) => {
            event.preventDefault();
            callback();
        });
        return addButton;
    }

    createRemoveFieldButton(callback) {
        const removeButton = document.createElement("img");
        removeButton.src = exitVectorImage;
        removeButton.classList.add('remove-field-button');

        // button event listen for adding a new field entry
        removeButton.addEventListener("click", (event) => {
            event.preventDefault();
            callback();
        });
        return removeButton;
    }

    addKeyboardEventListener() {
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case 'Backspace':
                    this.handleBackspace(event);
                    break;
                case 'ArrowLeft':
                    this.handleArrowLeft(event);
                    break;
                case 'ArrowRight':
                    this.handleArrowRight(event);
                    break;
                case 'Enter':
                    this.handleEnter(event);
                    break;
            }
        });
    }

    handleBackspace(keyEvent) {
        const selectedInput = this.getCurrentlySelectedFieldBox();
        if (selectedInput && (selectedInput.value.length === 0 || selectedInput.selectionStart === 0)) {
            if (this.getFieldBoxes().length > 1) {

                // try remove a input box
                if (this.tryRemoveFieldBox(selectedInput.parentElement)) {
                    // if sucessfully removed...
                    // set carot position to the last container's box
                    const previousInput = this.getLastFieldBox().querySelector("input");

                    setCaretPosition(previousInput, previousInput.value.length);

                    // prevent user from accidently deleting the first letter of the previous input (we moved their cursor)
                    keyEvent.preventDefault();
                }
            } else {
                errorShakeAnimation(this.getLastFieldBox());
            }
        }
    }

    handleArrowLeft(keyEvent) {
        const selectedInput = this.getCurrentlySelectedFieldBox();
        if (selectedInput && this.containerElem && selectedInput.selectionStart === 0) {
            setCaretPosition(selectedInput.previousElementSibling, 0);
        }
    }

    handleArrowRight(keyEvent) {
        const selectedInput = this.getCurrentlySelectedFieldBox();
        if (selectedInput) {
            if (this.containerElem && selectedInput.selectionStart === selectedInput.value.length) {
                if (selectedInput !== this.containerElem.querySelector("input:last-of-type")) {
                    setCaretPosition(selectedInput.nextElementSibling, 0);
                }
            }
        } else if (document.activeElement === this.addButton) {
            // check if add box is selected, try add a new box field
            this.TryAddFieldBox();
        }
    }

    handleEnter(keyEvent) {
        const selectedInput = this.getCurrentlySelectedFieldBox();
        if (selectedInput) {
            this.TryAddFieldBox();
            keyEvent.preventDefault(); // prevent accidently form submission
        }
    }

    GetValues() {
        const values = []
        this.getFieldBoxes().forEach((element) => {
            // empty strings will not be added
            if (element.value) {
                values.push(element.value);
            }
        });
        return values;
    }

    getFieldBoxes() {
        return this.containerElem.querySelectorAll("div > input");
    }

    tryRemoveFieldBox(inputContainerElem) {
        inputContainerElem.remove();
        if (this.getFieldBoxes().length < this.maxInputs) {
            this.addButton.style.display = '';
            return true;
        } else {
            return false;
        }
    }

    TryAddFieldBox() {
        const lastInputElem = this.getLastFieldBox();
        if (lastInputElem && this.getFieldBoxes().length >= this.maxInputs) {
            errorShakeAnimation(lastInputElem);
            return false; // early return false, couldn't add new field box
        }

        const newField = this.addInputField();

        // animate from 0 width for expanding animation 
        anime({
            targets: newField,
            width: ["0", this.inputWidth],
        });

        // add the new input box before the add button
        this.containerElem.insertBefore(newField, this.addButton);

        setCaretPosition(newField.querySelector("input"), 0);

        // hide plus if reached the max number of inputs
        if (this.getFieldBoxes().length >= this.maxInputs) {
            this.hideButton();
        }

        return true; // success
    }

    hideButton() {
        this.addButton.style.display = 'none';
    }

    showButton() {
        this.addButton.style.display = '';
    }

    getCurrentlySelectedFieldBox() {
        // return selected 
        const selected = document.activeElement;
        const parent = document.activeElement.parentElement;
        if (selected
            && parent
            && parent.parentElement
            && parent.parentElement == this.containerElem
            && selected.nodeName == 'INPUT') {
            return selected;
        } else {
            return null
        }
    }

    getLastFieldBox() {
        return this.containerElem.querySelector("div:last-of-type");
    }
}
