const gridWidth = 16;
const gridLength = 16;
const gridSize = gridWidth * gridLength;

const gridContainer = document.querySelector('.gridContainer');
gridContainer.style.gridTemplateColumns = `repeat(${gridWidth}, auto)`;
gridContainer.style.gridTemplateRows = `repeat(${gridLength}, auto)`;



for (let i = 0; i < gridSize; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    gridBox.setAttribute('id', 'grid' + i)
    gridContainer.appendChild(gridBox);
}

function colourBlack(e) {
    console.log(e.toElement.id);
    const square = document.querySelector(`#${e.toElement.id}`);
    console.log(square)
    square.classList.add('sketch');
    window.addEventListener('mouseover', addColourClass);
    window.addEventListener('mouseup', removeColourClass);

}

function addColourClass(e) {
    console.log(e);
}

function removeColourClass(e) {
    console.log(e);
    window.removeEventListener('mouseover', addColourClass);
}


window.addEventListener('mousedown', colourBlack);
window.addEventListener('mouseup', addColourClass);
