$("button").on("click", function(){

	var animal = $(this).data('name');

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=iTls9ki6uT188mEiYAnMS8QqKtPTJDP4&limit=10";

})

var topics = [""]

 
console.log("hi");

// create function that displays gif selection 


		// create variable that stores user input 
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=cat&api_key=iTls9ki6uT188mEiYAnMS8QqKtPTJDP4&limit=10";

		$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

        	var results = response.data;

        	console.log(response);
          // Creating a div to hold the gif
          var gifDiv = $("<div class='gif'>");
          // Storing the rating data
          var rating = response.Rated;
          // Creating an element to have the rating displayed
          var rate = $("<p>").text("Rating: " + rating);
          // Displaying gif
          gifDiv.append(rate);
          
          gifDiv.append(gif);

		
		});


for (var i = 0; i < results.length; i++) {
	var submit = $("<button>")

					submit.addClass("gif");
          
          submit.attr("data-name", results[i]);
        
          submit.text(results[i]);
    
          $("#buttons-section").append(submit);
}

// After data 
	$("#add-button").on("click", function(event){
		event.preventDefault();

		var userGif = $("#gif-form").val().trim();

		topics.push(userGif);
	});





	$(document).ready(function() {
		displayGifs();
	});

