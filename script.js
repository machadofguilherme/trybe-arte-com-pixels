const colorPallete = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const pixel = document.getElementsByClassName('pixel');
const colorBlack = document.querySelector('.color-black');
const colorRed = document.querySelector('.color-red');
const colorBlue = document.querySelector('.color-blue');
const colorGreen = document.querySelector('.color-green');
const clear = document.querySelector('#clear-board');

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

function paintPixels(selectedColor) {
  if (
    colorBlack.className.includes('selected') ||
    colorRed.className.includes('selected') ||
    colorBlue.className.includes('selected') ||
    colorGreen.className.includes('selected')
  ) {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].addEventListener('click', () => {
        pixel[i].style.backgroundColor = selectedColor;
      });
    }
  }
}

function paintBlack() {
  colorBlack.classList.add('selected');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', () => {
      selectedColor = getComputedStyle(colorPallete[0]).backgroundColor;
      pixel[i].style.backgroundColor = selectedColor;
    });
  }
}

colorBlack.addEventListener('click', () => {
  if (
    colorBlue.className.includes('selected') ||
    colorRed.className.includes('selected') ||
    colorGreen.className.includes('selected')
  ) {
    colorBlue.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorGreen.classList.remove('selected');
  }
  colorBlack.classList.add('selected');
  selectedColor = getComputedStyle(colorPallete[0]).backgroundColor;
  paintPixels(selectedColor);
});

colorRed.addEventListener('click', () => {
  if (
    colorBlack.className.includes('selected') ||
    colorBlue.className.includes('selected') ||
    colorGreen.className.includes('selected')
  ) {
    colorBlack.classList.remove('selected');
    colorBlue.classList.remove('selected');
    colorGreen.classList.remove('selected');
  }
  colorRed.classList.add('selected');
  selectedColor = getComputedStyle(colorPallete[1]).backgroundColor;
  paintPixels(selectedColor);
});

colorBlue.addEventListener('click', () => {
  if (
    colorBlack.className.includes('selected') ||
    colorRed.className.includes('selected') ||
    colorGreen.className.includes('selected')
  ) {
    colorBlack.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorGreen.classList.remove('selected');
  }
  colorBlue.classList.add('selected');
  selectedColor = getComputedStyle(colorPallete[2]).backgroundColor;
  paintPixels(selectedColor);
});

colorGreen.addEventListener('click', () => {
  if (
    colorBlack.className.includes('selected') ||
    colorRed.className.includes('selected') ||
    colorBlue.className.includes('selected')
  ) {
    colorBlack.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorBlue.classList.remove('selected');
  }
  colorGreen.classList.add('selected');
  selectedColor = getComputedStyle(colorPallete[3]).backgroundColor;
  paintPixels(selectedColor);
});

clear.addEventListener('click', () => {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});

window.onload = function() {
  setPaletteColor();
  createPixels();
  paintBlack();
};