const myContainer = document.querySelector('.parent-div');
const userInput = document.querySelector('#numberInput');

function createSketch () {
    for (let i = 0; i < 256; i++) {
        let newElement = document.createElement("div");
        newElement.classList.add("grid-square")
        myContainer.append(newElement);
    }
}

function updateGrid () {
    for (let i = 0; i < userInput.value * userInput.value; i++) {
        let newElement = document.createElement("div");
        newElement.classList.add("grid-square")
        myContainer.append(newElement);
    }
}

userInput.addEventListener("change", updateGrid)
createSketch();

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
};

let colorChange = document.querySelectorAll(".grid-square");

colorChange.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        const randomColor = generateRandomColor();
        console.log(randomColor);
        div.style.backgroundColor = randomColor;
    });
})

