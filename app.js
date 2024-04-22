const myContainer = document.querySelector('.parent-div');

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    myContainer.append(div);
    div.classList.add("square-divs");
}

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

let colorChange = document.querySelectorAll(".square-divs");

colorChange.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        const randomColor = generateRandomColor();
        console.log(randomColor);
        div.style.backgroundColor = randomColor;
    });
})

