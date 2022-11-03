const container = document.querySelector('#grid-container');
const rainbow = document.querySelector('#rainbow');
const black = document.querySelector('#black');
const eraser = document.querySelector('#eraser');
let n = 16;

CreateGrid(n);

//button for creating a new grid with the size the user chooses, but not exceeding 100
const button = document.querySelector('#button');
button.addEventListener('click', () => {
    n = parseInt(prompt("Choose the number os squares per side of the new grid"));
    const child = document.createElement('div');
    container.replaceChildren(child);
    
    if (n <= 100) {
        CreateGrid(n);
        child.remove();
    } else {
        alert("Number can't exceed 100");
        CreateGrid(100);
    }
    
})

//reset button for cleaning grid
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    const child = document.querySelectorAll('.item-column');
    child.forEach((child) => {
        child.style.backgroundColor = 'rgb(246, 252, 255)';
        
    })
})
 
//Create the grid
function CreateGrid(n) {

    for (i = 1; i <= n; i++){
        for (j = 1; j <= n; j++){
            const itemRow = document.createElement('div');
            itemRow.classList.add('item-column', i);
            itemRow.style.cssText = 'grid-row-start: ' + j;
            container.appendChild(itemRow);
        }
    } 
    //Add event for drawing effect on grid
    const items = document.querySelectorAll('.item-column');

    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black';
            
        })
    })
}

//button for random colors when drawing
rainbow.addEventListener('click', () => {
    const items = document.querySelectorAll('.item-column');
    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            const randomColor =
                Math.floor(Math.random() * 16777215).toString(16)
            item.style.backgroundColor = "#" + randomColor;
            
        })
    })
})

//go back to default black color
black.addEventListener('click', () => {
    const items = document.querySelectorAll('.item-column');
    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black';
        })
    })
})

//eraser button
eraser.addEventListener('click', () => {
    const items = document.querySelectorAll('.item-column');
    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'rgb(246, 252, 255)';
        })
    })
})