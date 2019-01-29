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

textTransform[0].addEventListener('select', e => {
	e.style.color = 'green';
})