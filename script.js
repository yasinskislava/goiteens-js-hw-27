const createElBtn = document.querySelector('[data-action="render"]');
const deleteElBtn = document.querySelector('[data-action="destroy"]');
const number = document.querySelector("input");
const boxes = document.querySelector("#boxes");

createElBtn.addEventListener("click", () => {
    createBoxes(number.value);
});
deleteElBtn.addEventListener("click", () => {
    deleteBoxes(number.value);
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