const container = document.querySelector('#grid-container');

let n = 16;

CreateGrid(n);

const button = document.querySelector('#button');
button.addEventListener('click', () => {
    n = parseInt(prompt("Choose a size in pixels"));
    const child = document.createElement('div');
    container.replaceChildren(child);
    if (n <= 100) {
        CreateGrid(n);
    } else {
        alert("Number can't exceed 100");
    }
    
})

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    const child = document.querySelectorAll('.item-column');
    child.forEach((child) => {
        child.classList.remove('trans');
    })
})
 
//Create the grid
function CreateGrid(n) {

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
}





// let clicked = false;
// window.addEventListener('mousedown', (e) => {
//     clicked = true;
//     console.log(e.type);
//     console.log(clicked);
//     if (clicked) {
        
//         items.forEach((item) => {
//             item.addEventListener('mousemove', (e) => {
//                 item.classList.add('trans');
//                 console.log(e.type);
//                 console.log(clicked);
//                 if (clicked == false) {
//                     items.forEach((item) => {
//                         item.removeEventListener('mousemove', item);
//                     })
//                 }
//             })
//         })
        
//     }
    
// })  
// window.addEventListener('mouseup', (e) => {
//     clicked = false;
//     console.log(e.type);
//     console.log(clicked);
// })





// items.forEach((item) => {
//     item.addEventListener('mousedown', () => {
//         item.addEventListener('mousemove', (e) => {
//             item.classList.add('trans');
//             console.log(e.type);
//         })
//     })
// })

// items.forEach((item) => {
//     item.addEventListener('mouseover', () => {
//         item.classList.add('trans');
//     })
// })

