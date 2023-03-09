const gridWidth = 16;
const gridLength = 16;
const gridSize = gridWidth * gridLength;

const gridContainer = document.querySelector('.gridContainer');
gridContainer.style.gridTemplateColumns = `repeat(${gridWidth}, auto)`;
gridContainer.style.gridTemplateRows = `repeat(${gridLength}, auto)`;

for (let i = 0; i < gridSize; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    gridContainer.appendChild(gridBox);
}

