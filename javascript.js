const container = document.querySelector('#grid-container');

let n = 16;
    
//Create the grid
for (i = 1; i <= n; i++){
    for (c = n; c >= 1; c--){
        const itemRow = document.createElement('div');
        itemRow.classList.add('item-column', i);
        itemRow.style.cssText = 'grid-row-start: ' + c;
        container.appendChild(itemRow);
    }
}

//Add event for drawing effect on grid
const items = document.querySelectorAll('.item-column');

items.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add('trans');
    })    
})