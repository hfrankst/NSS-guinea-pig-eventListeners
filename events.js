"use strict";

/***********INSTRUCTIONS*****************
1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"
2. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
3. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
4. When you type characters into the input field, the output element should mirror the text in the input field.
5. When you click the "Add color" button, the guinea-pig element's text color should change to blue.
6. When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
7. When you click the "Capture it" button, the guinea-pig element should have a border added to it.
8. When you click the "Rounded" button, the guinea-pig element's border should become rounded.
9. The first section's text should be bold.
10. The last section's text should be bold and italicized.
11. Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

***************************************/

//1. first grabbing the elements by class name, then listening for the click on the article sections 
var articleSection = document.getElementsByTagName('article')[0];
articleSection.addEventListener('click', function(event){
	console.log(event.target);
	document.getElementById('output-target').innerHTML = "You clicked on the " + event.target.innerHTML + " section.";
});

//2. Print to the output target "You moved your mouse over the header", when mousing over the h1
var mousedHeader = document.getElementById('page-title');
mousedHeader.addEventListener('mouseover', function(event){
	// console.log(event.target);
	document.getElementById('output-target').innerHTML = "You moved your mouse over the header.";
});

//3. When the mouse leaves the h1 element, display "You left me!!!" in the output div
	//no need to make a new variable, can just use the same one as the mouseover event listener.
mousedHeader.addEventListener('mouseleave', function(event){
	// console.log(event.target);
	document.getElementById('output-target').innerHTML = "You left me!!!";
});

//4. When typing into the input field, the output div should mirror the input
	//grabbing the input field by id and storing its value in a variable
var mirrorInput = document.getElementById('keypress-input');
	//attaching the event listener to the input field, setting it up to run on every keyup event
mirrorInput.addEventListener('keyup', function(event){
	//creating a new variable to hold the input field info and set it equal to the output div, so that when the key is released in the input field the text is printed to the output area
	var duplicate = document.getElementById('keypress-input');
	document.getElementById('output-target').innerHTML = duplicate.value;
});

//5. When the Add Color button is pressed, change the color to blue
var pig = document.getElementById('guinea-pig');
var blueBtn = document.getElementById('add-color');
	blueBtn.addEventListener('click', function(event){
		pig.classList.toggle('blue');
});

//6. When the Hulkify button is pressed, increase the font-size.  This is basically the same code as the blue button
var hulkBtn = document.getElementById('make-large');
	hulkBtn.addEventListener('click', function(event){
		pig.classList.toggle('hulk');
});

//7. When the Capture It button is pressed, put a border around the output div
var captureBtn = document.getElementById('add-border');
	captureBtn.addEventListener('click', function(event){
		pig.classList.toggle('bordered');
});

//8. When the Rounded button is pressed, put a border-radius on the border
var roundBtn = document.getElementById('add-rounding');
	roundBtn.addEventListener('click', function(event){
		pig.classList.toggle('round-border');
});