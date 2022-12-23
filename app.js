const sketchPad = document.querySelector('.pad');


let initSize = 8;
let newSize = initSize;


//function to create grid blocks

function createBlock(blockSize) {
    let block = document.createElement('div');
    block.classList.add('blockStyle');

    block.style.height = `${blockSize}px`;
    block.style.width = `${blockSize}px`;


    return block;
}


//Takes an int for a pad size, then generates a grid of blocks

function setPad(padSize) {

    let padSizeSquared = padSize * padSize;

    sketchPad.style.gridTemplateColumns = `repeat(${padSize}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${padSize}, 1fr)`;

    for (let i = 0; i < padSizeSquared; i++) {
            sketchPad.appendChild(createBlock(sketchPad.clientWidth / padSize));
    }
}


//Initial sketch pad
setPad(initSize);


//Listens for the mouse to hover over a block, then fills it
sketchPad.addEventListener('mouseover', function(e){
    if(e.target.matches('.blockStyle')){
        e.target.classList.add('filledBlock');
    }
});

//Function for a button to clear any "drawings" on current pad
function clearPad(){
    while (sketchPad.hasChildNodes()){
        sketchPad.removeChild(sketchPad.firstChild);
    }

    setPad(newSize);
}


//Sets the pad to a new grid size
function setPadSize(){
    let inputSize = document.getElementById("padSize").value;
    
    newSize = inputSize;

    clearPad();
}

