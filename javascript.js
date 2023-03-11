function createGrid(gridWidth,gridLength) {

    const gridSize = gridWidth * gridLength;

    const gridContainer = document.querySelector('.gridContainer');
    gridContainer.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridLength}, 1fr)`;
    
    for (let i = 0; i < gridSize; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        gridBox.setAttribute('id', 'grid' + i)
        gridContainer.appendChild(gridBox);
    }
}

function colourBlack(e) {
    addColourClass;
    window.addEventListener('mouseover', addColourClass);
    window.addEventListener('mouseup', removeColourClass);

}

function addColourClass(e) {
    console.log(e);
    const square = document.querySelector(`#${e.toElement.id}`);
    console.log(square)
    square.classList.add('sketch');
}

function removeColourClass(e) {
    console.log(e);
    window.removeEventListener('mouseover', addColourClass);
}

function blankGrid() {
    const gridBoxes = document.querySelectorAll('.gridBox');
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove('sketch');
    });

}

function removeExistingGrid() {
    const gridContainer = document.querySelector('.gridContainer');
    const gridBoxes = document.querySelectorAll('.gridBox');
    gridBoxes.forEach((gridBox) => {
        gridContainer.removeChild(gridBox);
    });

}

function changePixels() {
    let gridWidth = 0;
    let gridLength = 0;
    let i = 0;
    while ((gridWidth < 1 || gridWidth > 64) && i<3) {
        gridWidth = parseInt(prompt("How many pixels wide? Must be between 1 and 64"));
        i++;
    }
    if (gridWidth < 1 || gridWidth > 64) {
        alert("Input outside acceptable range");
    }
    
    else{
        i=0;
        while ((gridLength < 1 || gridLength > 64) && i<3) {
            gridLength = parseInt(prompt("How many pixels long? Must be between 1 and 64"));
            i++;
        }
        if (gridLength < 1 || gridLength > 64) {
            alert("Input outside acceptable range");
        }
        else {
            removeExistingGrid();
            createGrid(gridWidth, gridLength);
        }
    }
}

createGrid(16,16);

window.addEventListener('mousedown', colourBlack);
window.addEventListener('mouseup', addColourClass);
const clearGridButton = document.querySelector('#clearGrid');
clearGridButton.addEventListener('click', blankGrid);
const pixelChangeButton = document.querySelector('#pixelChange');
pixelChangeButton.addEventListener('click', changePixels);
