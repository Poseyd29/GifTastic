var animalArray = [];
var dest = $("#buttons-section");
var gifDest = $("#gifs-section");

// Saving API Key and limit to variables
var apiKey = "iTls9ki6uT188mEiYAnMS8QqKtPTJDP4";
var limit = 10;

// Click function to add animal button
$("#add-button").on("click", function () {
	dest.empty();
	var animal = $('#gif-form').val().trim();
	animalArray.push(animal);
	$('#gif-form').val('');

	// Calling renderButtons function to append button
	renderButtons();



});


function renderButtons() {
	var leng = animalArray.length;
	for (var i = 0; i < leng; i++) {
		var newButton = $("<button>");
		newButton.addClass("gifButton");
		newButton.text(animalArray[i]);
		newButton.attr("data-animal", animalArray[i]);
		dest.append(newButton);
	}
}

renderButtons();

$("#buttons-section").on("click", ".gifButton", function () {
	var clickedVal = $(this).attr("data-animal");
	makeRequest(clickedVal);

});


function makeRequest(x) {

	var animal = x;
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=" + apiKey + "&limit=" + limit;

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function (response) {
		// array of 10 animal giphs
		var resArr = response.data;
		console.log(resArr);
		renderGifs(resArr);


	});

}


function renderGifs(resArr) {
	gifDest.empty();

	resArr.forEach(function (val) {
		var gifDiv = $("<div class='gifDiv'>");
		var imageStill = val.images.original_still.url;
		var imageAnimate = val.images.original.url;
		var newImage = $("<img class='gifImage'>");
		newImage.attr("src", imageStill);
		newImage.attr("data-still", imageStill);
		newImage.attr("data-animate", imageAnimate);
		newImage.attr("data-state", "still");
		gifDiv.append(newImage);
		gifDest.append(gifDiv);
	});

}

$("#gifs-section").on("click", ".gifImage", function () {

	var state = $(this).attr("data-state");
	// If the clicked image's state is still, update its src attribute to what its data-animate value is.
	// Then, set the image's data-state to animate
	// Else set src to the data-still value
	if (state === "still") {
		$(this).attr("src", $(this).attr("data-animate"));
		$(this).attr("data-state", "animate");
	} else {
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state", "still");
	}

});

