/** 
  File: "~/main.js"
  Showing: Entire file
*/
function handleImageClick({ target }) {
  displayedImage.setAttribute('src', target.getAttribute('src'));
  displayedImage.setAttribute('alt', target.getAttribute('alt'));
}

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = [
  'pic1.jpg',
  'pic2.jpg',
  'pic3.jpg',
  'pic4.jpg',
  'pic5.jpg',
];

/* Declaring the alternative text for each image file */
const altTexts = {
  'pic1.jpg': 'A closeup of an human eye',
  'pic2.jpg': 'An abstract pattern painting',
  'pic3.jpg': 'A lot of violet and white flowers',
  'pic4.jpg': 'An Egyptian painting in a wall',
  'pic5.jpg': 'A yellow butterfly in a leaf',
};

/* Looping through images */
imageFilenames.forEach((imageName) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${imageName}`);
  newImage.setAttribute('alt', altTexts[imageName]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', handleImageClick);
});

/* Wiring up the Darken/Lighten button */
function handleButtonClick() {
  let currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    btn.setAttribute('class', 'light');
  } else {
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    btn.setAttribute('class', 'dark');
  }
}

btn.addEventListener('click', handleButtonClick);
