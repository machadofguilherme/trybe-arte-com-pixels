const colorPallete = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');

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

window.onload = function () {
  setPaletteColor();
  createPixels();
};