const leftArrow = document.querySelector('.l-arrow');
const rightArrow = document.querySelector('.r-arrow');
const modelsGrid = document.querySelector('.models-grid');

let counter = 0;
let indent = 0;

leftArrow.addEventListener('click', () => {
  if (counter == 0) {
    counter = 3;
    indent = 1125;
    modelsGrid.style.marginLeft = `-${indent}px`;  
  } else {
    counter -= 1;
    indent -= 375;
    modelsGrid.style.marginLeft = `-${indent}px`;  
  }
})
rightArrow.addEventListener('click', () => {
  if (counter == 3) {
    counter = 0;
    indent = 0;
    modelsGrid.style.marginLeft = '0px';  
  } else {
    counter += 1;
    indent += 375;
    modelsGrid.style.marginLeft = `-${indent}px`;  
  }
})