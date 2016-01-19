var array = [];

var koko = document.querySelectorAll("img");

for (var i = 0; i < koko.length; i++) { 
	array.push(koko[i].src);
}

console.log(array);
