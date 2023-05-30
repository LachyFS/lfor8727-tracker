export default class PosterUploadArea {

    static readImageAsBase64(image, callback) {
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

    constructor(id) {
        this.posterImageDropOffElem = document.querySelector(`#${id}`);

        // id validation
        if (this.posterImageDropOffElem === null) {
            throw new Error("Invalid poster image drop off element id");
        }

        // currently uploaded image (base64 encoded)
        this.loadedImage = "";

        // drag and drop file upload for poster image
        // CITE: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/

        // prevent event bubbling for drag / drop events
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventListenerName => {
            this.posterImageDropOffElem.addEventListener(eventListenerName, (event) => {
                event.preventDefault();
                event.stopPropagation();
            });
        });

        // highlight drop off area when file is dragged over
        ['dragenter', 'dragover'].forEach(eventListenerName => {
            this.posterImageDropOffElem.addEventListener(eventListenerName, (event) => {
                event.preventDefault();
                this.posterImageDropOffElem.classList.add("drag-over");
            });
        });

        // remove highlight when file is dragged away
        ['dragleave', 'drop'].forEach(eventListenerName => {
            this.posterImageDropOffElem.addEventListener(eventListenerName, (event) => {
                event.preventDefault();
                this.posterImageDropOffElem.classList.remove("drag-over");
            });
        });

        // handle file drop
        this.posterImageDropOffElem.addEventListener("drop", (event) => {
            event.preventDefault();
            this.posterImageDropOffElem.classList.remove("drag-over");
            const image = event.dataTransfer.files[0];

            PosterUploadArea.readImageAsBase64(image, (base64Image) => {
                // set background
                this.updateUploadedPosterImage(base64Image);
            });
        });

        // browse files upload poster image
        const posterImageBrowseButton = document.querySelector("#add-movie-image-upload-browse-link");

        posterImageBrowseButton.addEventListener("click", (event) => {
            event.preventDefault();

            // open browse file
            this.browseImagePosterSelect();
        });
    }

    browseImagePosterSelect() {
        const fileInput = document.createElement("input");

        // set file input attributes
        fileInput.type = "file";
        fileInput.accept = "image/*";

        // click file input to open file browser
        fileInput.click();

        // handle file input change
        fileInput.addEventListener("change", (event) => {
            const image = event.target.files[0];

            PosterUploadArea.readImageAsBase64(image, (base64Image) => {
                this.updateUploadedPosterImage(base64Image);

                // remove file input from DOM after use
                fileInput.remove();
            });
        }, { once: true });
    }

    updateUploadedPosterImage(base64Image) {
        this.posterImageDropOffElem.style.backgroundImage = `url(${base64Image})`;

        // updated currently uploaded image
        this.loadedImage = base64Image;

        // add uploaded class to poster elem
        this.posterImageDropOffElem.classList.add("uploaded");

        // allow user to change image by clicking on the poster
        this.posterImageDropOffElem.addEventListener("click", (event) => {
            event.preventDefault();
            this.browseImagePosterSelect();
        }, { once: true }); // only once to prevent multiple event listeners being added
    }
}
