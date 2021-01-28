$(function () {
	$("#Submit").click(function () {
		alert("Вы нажали кнопку");
	});
});



$(function () {
	let button 			 = $('#button'),
		$listOfElements  = $('.rowheight'),
		numberOfElements = $listOfElements.length;

	let checker = new Promise((resolve, reject) => { 

		for (let i = 0; i < numberOfElements; i++) {
			let valueCity = $(".rowheight td:nth-child(7)")[i];
			console.log(valueCity);
		}

	})

	checker.then(() => {
		button.click();
	});
});