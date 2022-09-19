function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function randomRGBColor() {
  let r = randomNumber(256);
  let g = randomNumber(256);
  let b = randomNumber(256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid() {
  const container = document.querySelector('.container');
  for (let i = 0; i < 100; i++) {
    const divi = document.createElement('div');
    divi.classList.add('gridi');
    for (let j = 0; j < 100; j++) {
      const divj = document.createElement('div');
      divj.classList.add('gridj');
      divj.addEventListener('mouseover', (e) => divj.style.backgroundColor = randomRGBColor());
      divi.appendChild(divj);
    }
    container.appendChild(divi);
  }
  document.getElementById("button1").addEventListener('click', changeSize);
  changeSize();
}

function changeSize() {
  let newSize = document.getElementById('input1').value;
  if (newSize === '') {
    newSize = 16;
  } else {
    newSize = Math.min(Number(newSize), 100);
  }
  let sideLength = Math.floor(96 / newSize * 1000) / 1000;
  const container = document.querySelector('.container');
  let divi = container.firstElementChild;
  for (let i = 0; i < 100; i++) {
    let divj = divi.firstChild;
    for (let j = 0; j < 100; j++) {
      if (j >= newSize || i >= newSize) {
        divj.style.height = '0vh';
        divj.style.width = '0vh';
      } else {
        divj.style.height = `${sideLength}vh`;
        divj.style.width = `${sideLength}vh`;
      }
      divj.style.backgroundColor = 'black';
      divj = divj.nextSibling;
    }
    divi = divi.nextElementSibling;
  }
}

createGrid();
