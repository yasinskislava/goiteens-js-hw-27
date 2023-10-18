const gallery = document.querySelector(".gallery");
const images = document.querySelectorAll(".image");
let galleryOn = false;
let index;

function toggleImage() {
    images[index].parentElement.classList.toggle("full-image-container");
    images[index].classList.toggle("full-image");
}
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", (e) => {
        e.currentTarget.parentElement.classList.toggle("full-image-container");
        e.currentTarget.classList.toggle("full-image");
        galleryOn = true;
        index = i;
    });
}
window.addEventListener("keydown", (e) => {
    if (galleryOn === true) {
        if (e.code === "Escape") {
            toggleImage();
            galleryOn = false;
        }
        if (e.code === "ArrowLeft") {
            toggleImage();
            index--;
            index = index < 0 ? 0 : index;
            toggleImage();
        }
        if (e.code === "ArrowRight") {
            toggleImage();
            index++;
            index = index > images.length-1 ? images.length-1 : index;
            toggleImage();
        }
    }
});

//////////////////////////////////////////////////////////////////////
const createElBtn = document.querySelector('[data-action="render"]');
const deleteElBtn = document.querySelector('[data-action="destroy"]');
const number = document.querySelector("input");
const boxes = document.querySelector("#boxes");

createElBtn.addEventListener("click", () => {
    createBoxes(number.value);
    number.value = "";
});
deleteElBtn.addEventListener("click", () => {
    deleteBoxes(number.value);
    number.value = "";
});

let size = 30;
const arr = [];
function createBoxes(quantity) {
    for (let i = 0; i < quantity; i++){
        const block = document.createElement("div");
        block.style.width = `${size}px`;
        block.style.height = `${size}px`;
        const red = Math.random() * 255;
        const green = Math.random() * 255;
        const blue = Math.random() * 255;
        block.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        arr.push(block);
        size += 10;
    }
    boxes.append(...arr);
}

function deleteBoxes(quantity) {
    arr.splice((arr.length - quantity), quantity);
    size -= quantity * 10;
    if (size < 30) {
        size = 30;
    }
    boxes.innerHTML = "";
    boxes.append(...arr);
}