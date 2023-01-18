var button = document.getElementById('btn_1');
var cat = document.getElementById('cat');


button.addEventListener('click', Cat);


function Cat() {
	fetch('https://aws.random.cat/meow')
		.then(result => result.json())
		.then(result => {
			cat.innerHTML = `<img src=${result.file} alt="cat" />`
		});
}