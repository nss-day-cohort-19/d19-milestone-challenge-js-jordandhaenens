var keys;

function growTree(object) {
	keys = {
	height: document.getElementById("height").value,
	character: document.getElementById("character").value
	};
	var height = keys.height;
	var char = keys.character;
	var counter = keys.height;
	var rowIndent = counter - 1;
	var charCount = 1;
	var seed = "";
	var space = " ";

	for (var i = 1; i <= height; i++) {
		seed = space.repeat(rowIndent);
		previousRow =
		seed += char.repeat(charCount);
		console.log(seed);
		rowIndent--;
		charCount += 2;
	}
}


var heightBox = document.getElementById("height");
var charBox = document.getElementById("character");
var growButton = document.getElementById("growTree");

heightBox.addEventListener("keyup", function(e){
	// console.log("height value", heightBox.value);
	if (e.keyCode === 13 && heightBox.value !== "" && charBox.value !== "") {
		growTree(keys);
	}
});

charBox.addEventListener("keyup", function(e){
	// console.log("char value", charBox.value);
	if (e.keyCode === 13 && heightBox.value !== null && charBox.value !== null) {
		// console.log("charBox event listener firing");
		growTree(keys);
	}
});

growButton.addEventListener("click", function(){
	// console.log("growButton is firing");
	if (heightBox.value !== null && charBox.value !== null) {
		growTree(keys);
	}
});









