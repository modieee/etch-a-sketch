const board = document.querySelector(".flex-container");
const boardSize = parseInt(document.getElementById("quantity").value);
const randomColorBtn = document.querySelector(".random");
const blackBtn = document.querySelector(".black");
const eraserBtn = document.querySelector(".eraser");

let value = boardSize * boardSize;
for (let i = 0; i < value; i++) {
    let newElement = document.createElement("div");
    newElement.classList.add("grid-item");
    
    board.append(newElement);
};

const resize = (value) => {
    for (let i = 0; i < value; i++) {
        let newElement = document.createElement("div");
        newElement.classList.add("grid-item");
        
        board.append(newElement);
    };
}

const gridItem = document.querySelectorAll(".grid-item");

gridItem.forEach(gridItem => {
    gridItem.addEventListener("mouseenter", () => {
        gridItem.style.backgroundColor = "black";
    });
});

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

blackBtn.addEventListener("click", () => {
    gridItem.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.backgroundColor = "black";
        })
    })

});

randomColorBtn.addEventListener("click", () => {
    gridItem.forEach(item => {
        item.addEventListener("mouseenter", () => {
            let randomColor = generateRandomColor();
            item.style.backgroundColor = randomColor;
        })
    })

});

eraserBtn.addEventListener("click", () => {
    gridItem.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.backgroundColor = "white";
        })
    })

});

