const colorPallete = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const pixel = document.querySelectorAll('article.pixel');
const colorBlack = document.querySelector('.color-black');
const colorRed = document.querySelector('.color-red');
const colorBlue = document.querySelector('.color-blue');
const colorGreen = document.querySelector('.color-green');

let selectedColor = undefined;

function setPaletteColor() {
  colorPallete[0].style.backgroundColor = 'black';
  colorPallete[1].style.backgroundColor = 'red';
  colorPallete[2].style.backgroundColor = 'blue';
  colorPallete[3].style.backgroundColor = 'green';
}

function createPixels() {
  for (let index = 1; index <= 25; index += 1) {
    const pixel = document.createElement('article');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

colorBlack.addEventListener('click', () => {
  if (
    colorBlue.className.includes('selected') &&
    colorRed.className.includes('selected') &&
    colorGreen.className.includes('selected')
  ) {
    colorBlue.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorGreen.classList.remove('selected');
  }
    colorBlack.classList.add('selected');
  selectedColor = getComputedStyle(colorPallete[0]).backgroundColor;
  console.log(selectedColor);
});

  colorRed.addEventListener('click', () => {
    if (
      colorBlack.className.includes('selected') &&
      colorBlue.className.includes('selected') &&
      colorGreen.className.includes('selected')
    ) {
      colorBlack.classList.remove('selected');
      colorBlue.classList.remove('selected');
      colorGreen.classList.remove('selected');
    }
      colorRed.classList.add('selected');
  selectedColor = getComputedStyle(colorPallete[1]).backgroundColor;
  console.log(selectedColor);

});

colorBlue.addEventListener('click', () => {
    if (
      colorBlack.className.includes('selected') &&
      colorRed.className.includes('selected') &&
      colorGreen.className.includes('selected')
    ) {
      colorBlack.classList.remove('selected');
      colorRed.classList.remove('selected');
      colorGreen.classList.remove('selected');
    }
      colorBlue.classList.add('selected');
  selectedColor = getComputedStyle(colorPallete[2]).backgroundColor;
  console.log(selectedColor);

});

colorGreen.addEventListener('click', () => {
    if (
      colorBlack.className.includes('selected') &&
      colorRed.className.includes('selected') &&
      colorBlue.className.includes('selected')
    ) {
      colorBlack.classList.remove('selected');
      colorRed.classList.remove('selected');
      colorBlue.classList.remove('selected');
    }
      colorGreen.classList.add('selected');
  selectedColor = getComputedStyle(colorPallete[3]).backgroundColor;
  console.log(selectedColor);

});

window.onload = function () {
  setPaletteColor();
  createPixels();
};