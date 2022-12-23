const sketchPad = document.querySelector('.pad');


let initSize = 8;


//function to create grid blocks

function createBlock(blockSize) {
    let block = document.createElement('div');
    block.classList.add('blockStyle');

    block.style.height = `${blockSize}px`;
    block.style.width = `${blockSize}px`;


    return block;
}

function setPad(padSize) {

    let padSizeSquared = padSize * padSize;

    sketchPad.style.gridTemplateColumns = `repeat(${padSize}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${padSize}, 1fr)`;

    for (let i = 0; i < padSizeSquared; i++) {
            sketchPad.appendChild(createBlock(sketchPad.clientWidth / padSize));
    }
}

setPad(initSize);


sketchPad.addEventListener('mouseover', function(e){
    if(e.target.matches('.blockStyle')){
        e.target.classList.add('filledBlock');
    }
});

