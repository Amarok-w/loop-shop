function modelsSlider() {

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

}
function headerSlider() {

  const slideMarks = document.querySelectorAll('.slide-mark');
  const sliderLine = document.querySelector('.slider-line');
  let current = 0;



  slideMarks.forEach(slideMark => {
    slideMark.addEventListener('click', el => {

      slideMarks.forEach(elem => {
        elem.classList.remove('slider-mark_current');
      })

      el.target.classList.add('slider-mark_current');

      current = 100 * el.target.classList[1].substring(el.target.classList[1].length - 1);

      sliderLine.style.right = `${current}%`;

    })
  })

}


modelsSlider();
headerSlider();