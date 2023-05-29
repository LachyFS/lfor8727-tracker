import { errorShakeAnimation } from './animations.js';
import { setCaretPosition } from './Util.js'
import anime, { remove } from 'animejs';
import exitVectorImage from './vectors/cross.svg'
import addVectorImage from './vectors/plus.svg'

export class MultiSelectField {

    static DEFAULT_MAX_FIELDS = 10;
    static ADD_BUTTON_CLASS = "add-field-button";
    static REMOVE_BUTTON_CLASS = "remove-field-button";

    constructor(containerElem, inputWidth = '250px', count = 1) {

        this.inputWidth = inputWidth;

        // element that contains all the inputs
        this.containerElem = containerElem;

        // find which input tag to clone based the first contained input element
        this.templateInputField = this.getTemplateInputField(containerElem);

        // remove everything inside the container because we've gotten the input template
        containerElem.textContent = "";

        // determine the max number of allowed inputs by the elements "data-max" attribute
        this.maxInputs = containerElem.getAttribute("data-max");
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

        const template = containedInputs[0].cloneNode();
        template.removeAttribute("id") // make sure that any id is remove so its unque

        return template;
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
        const addButton = document.createElement("input");
        addButton.type = "image";
        addButton.src = addVectorImage;

        addButton.classList.add(MultiSelectField.ADD_BUTTON_CLASS);
        this.containerElem.append(addButton);

        // When the button is clicked, call the callback function.
        addButton.addEventListener("click", (event) => {
            event.preventDefault();
            callback();
        });
        return addButton;
    }

    createRemoveFieldButton(callback) {
        const removeButton = document.createElement("img");
        removeButton.src = exitVectorImage;
        removeButton.classList.add(MultiSelectField.REMOVE_BUTTON_CLASS);

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
        if (selectedInput && selectedInput.selectionStart === 0) {
            if (selectedInput.parentElement &&
                selectedInput.parentElement.previousElementSibling) {
                setCaretPosition(selectedInput.parentElement.previousElementSibling.querySelector("input"), 0);
            }
        }
    }

    handleArrowRight(keyEvent) {
        const selectedInput = this.getCurrentlySelectedFieldBox();
        if (selectedInput) {
            if (selectedInput.selectionStart === selectedInput.value.length) {
                if (selectedInput.parentElement
                    && selectedInput.parentElement !== this.getLastFieldBox()) {
                    if (selectedInput.parentElement.nextElementSibling) {
                        setCaretPosition(selectedInput.parentElement.nextElementSibling.querySelector("input"), 0);
                    }
                } else {
                    setCaretPosition(this.addButton, 0);
                }
            }
        }
    }

    handleEnter(keyEvent) {
        const selectedInput = this.getCurrentlySelectedFieldBox();
        if (selectedInput) {
            keyEvent.preventDefault(); // prevent accidently form submission
            this.TryAddFieldBox();
        }
    }

    clearValues(){
        const boxes = this.getFieldBoxes();
        boxes.forEach(box => {
            this.tryRemoveFieldBox(box);
        });
        // reset the value of the only remaining box
        boxes[0].querySelector("input").value = "";
    }

    getValues() {
        const values = []
        this.getFieldBoxes().forEach((element) => {
            // empty strings will not be added
            const input = element.querySelector("input");
            if (input.value) {
                values.push(input.value);
            }
        });
        return values;
    }

    getFieldBoxes() {
        return this.containerElem.querySelectorAll("div");
    }

    tryRemoveFieldBox(inputContainerElem) {

        // using an arrow function lets us still access 'this.' because they have no binding
        const handleRemoveInputContainerElem = () => {

            // remove dom element
            inputContainerElem.remove();

            // after deleting, move the active element to the latest input box 
            const activeTarget = this.getLastFieldBox().querySelector("input");
            setCaretPosition(activeTarget, activeTarget.value.length);
        }

        const boxes = this.getFieldBoxes();
        if (boxes.length == 1) {
            return false;
        }
        else if (boxes.length == 2) {
            handleRemoveInputContainerElem();
            this.hideRemoveFieldBoxButton(this.getFirstFieldBox());
            return true;
        } else {
            handleRemoveInputContainerElem();
            this.showAddButton();
            return true;
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
            this.hideAddButton();
        }

        // because we just added a input box
        // check if the new box count is > 1 => make sure first box displays its remove button
        const boxes = this.getFieldBoxes();
        if (boxes.length > 1) {
            this.showRemoveFieldBoxButton(this.getFirstFieldBox());
        } else if (boxes.length == 1) {
            // if its the only box, hide the remove button
            this.hideRemoveFieldBoxButton(newField);
        }

        return true; // success
    }

    showRemoveFieldBoxButton(fieldBox) {
        fieldBox.querySelector(`.${MultiSelectField.REMOVE_BUTTON_CLASS}`).style.display = "block";
    }

    hideRemoveFieldBoxButton(fieldBox) {
        fieldBox.querySelector(`.${MultiSelectField.REMOVE_BUTTON_CLASS}`).style.display = "none";
    }

    hideAddButton() {
        this.addButton.style.display = 'none';
    }

    showAddButton() {
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

    getFirstFieldBox() {
        return this.containerElem.querySelector("div:first-of-type");
    }
}
