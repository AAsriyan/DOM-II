// Your code goes here

// Playing with alert and click events
const signUpBtn = document.querySelectorAll('div .btn');

signUpBtn[0].addEventListener('click', e => {
  alert(`Is this thing on?`);
});

signUpBtn[1].addEventListener('dblclick', e => {
	alert(`Double clicks are pretty neat...`);
});

signUpBtn[2].addEventListener('mouseover', e => {
	alert(`You must really like buttons huh!`);
});

// Changing the h1 while moving the mouse over and out of element

const bigHeader = document.querySelector('.logo-heading');
console.log(bigHeader);

bigHeader.addEventListener('mouseenter', e => {
  bigHeader.textContent = 'SUPER FUN BUS ACTIVATED';
});

bigHeader.addEventListener('mouseout', e => {
  bigHeader.textContent = 'Fun Bus';
});

// Working on making the text green when I select the text

const textTransform = document.querySelectorAll('p');
console.log(textTransform);

textTransform[0].addEventListener('mouseup', e => {
	e.currentTarget.style.color = 'green';
	e.currentTarget.style.fontSize = '20px';
});

textTransform[1].addEventListener('mouseup', e => {
	e.currentTarget.style.color = 'green';
	e.currentTarget.style.fontSize = '20px';
});

textTransform[2].addEventListener('mouseup', e => {
	e.currentTarget.style.color = 'green';
	e.currentTarget.style.fontSize = '20px';
});

textTransform[3].addEventListener('mouseup', e => {
	e.currentTarget.style.color = 'green';
	e.currentTarget.style.fontSize = '20px';
});

textTransform[4].addEventListener('mousedown', e => {
	e.currentTarget.style.color = 'green';
	e.currentTarget.style.fontSize = '20px';
});

// Changing h2 elements background color

const subHeaderColor = document.querySelectorAll('h2');

// Trying to figure out a forEach loop for event listeners

// subHeaderColor.forEach(element => {
// 	element.addEventListener('mouseover', e => {
// 		e.currentTarget.style.backgroundColor = 'black';
// 		e.currentTarget.style.color = 'white';
// });

subHeaderColor[0].addEventListener('mousemove', e => {
	e.currentTarget.style.backgroundColor = 'black';
	e.currentTarget.style.color = 'white';
});

subHeaderColor[1].addEventListener('mousemove', e => {
	e.currentTarget.style.backgroundColor = 'black';
	e.currentTarget.style.color = 'white';
});

subHeaderColor[2].addEventListener('mousemove', e => {
	e.currentTarget.style.backgroundColor = 'black';
	e.currentTarget.style.color = 'white';
});

subHeaderColor[3].addEventListener('mousemove', e => {
	e.currentTarget.style.backgroundColor = 'black';
	e.currentTarget.style.color = 'white';
});

subHeaderColor[0].addEventListener('mouseleave', e => {
	e.currentTarget.style.backgroundColor = 'white';
	e.currentTarget.style.color = 'black';
});

subHeaderColor[1].addEventListener('mouseleave', e => {
	e.currentTarget.style.backgroundColor = 'white';
	e.currentTarget.style.color = 'black';
});

subHeaderColor[2].addEventListener('mouseout', e => {
	e.currentTarget.style.backgroundColor = 'white';
	e.currentTarget.style.color = 'black';
});

subHeaderColor[3].addEventListener('mouseout', e => {
	e.currentTarget.style.backgroundColor = 'white';
	e.currentTarget.style.color = 'black';
});

const fourthHeaderText = document.querySelectorAll('h4');

fourthHeaderText[0].addEventListener('click', e => {
	e.currentTarget.textContent = 'INSERT USELESS TEXT';
	e.currentTarget.style.fontSize = '30px';
});

fourthHeaderText[1].addEventListener('click', e => {
	e.currentTarget.textContent = 'INSERT USELESS TEXT';
	e.currentTarget.style.fontSize = '30px';
});

fourthHeaderText[2].addEventListener('click', e => {
	e.currentTarget.textContent = 'INSERT USELESS TEXT';
	e.currentTarget.style.fontSize = '30px';
});

// stopping navigation items from refreshing the page

const navBar = document.querySelectorAll('nav a');

navBar[0].addEventListener('click', e => {
	e.currentTarget.style.color = 'pink';
	e.preventDefault();
})

navBar[1].addEventListener('click', e => {
	e.currentTarget.style.color = 'pink';
	e.preventDefault();
})

navBar[2].addEventListener('click', e => {
	e.currentTarget.style.color = 'pink';
	e.preventDefault();
})

navBar[3].addEventListener('click', e => {
	e.currentTarget.style.color = 'pink';
	e.preventDefault();
})

// Changing input text color when selecting

const inputUpdate = document.querySelectorAll('input');

inputUpdate[0].addEventListener('select', e => {
	e.currentTarget.style.color = 'green';
});

inputUpdate[1].addEventListener('select', e => {
	e.currentTarget.style.color = 'green';
});