//global variables
var images = [ 'images/food1.jpg',
				'images/food2.jpg',
				'images/food3.jpg',
				'images/food4.jpg',
				'images/food5.jpg',
				'images/food6.jpg',
				'images/food7.jpg',
				'images/food8.jpg'
];
var currentImageIndex = 0;
var votes = [];
// event handlers
$("#back-btn").on("click", onBackClicked);
$("#your-vote").on("change", onYourVoteChanged);
$("#skip-btn").on("click", onSkipClicked);

function onBackClicked(evt){
	evt.preventDefault();
	if(currentImageIndex > 0){
		currentImageIndex--;
		$("#image-to-vote-on").attr('src', images[currentImageIndex]);
		$("#your-vote").val(votes[currentImageIndex]);
	}
	console.log('onBackClicked');
}
// functions
function onSkipClicked(evt){
	evt.preventDefault();
	console.log('onSkipClicked');

	if(currentImageIndex < images.length){
		currentImageIndex++;
		$("#image-to-vote-on").attr('src', images[currentImageIndex]);
	}
}
function onYourVoteChanged(evt){
	evt.preventDefault();
	console.log	('onYourVoteChanged clicked');
// jquery is getting your vote loging it to your vote...its getting the value
// getting value from drop down saves to array

	var currentVote = $('#your-vote').val();
	console.log("currentVote: " + currentVote);
	votes[currentImageIndex] = currentVote;
	console.log("Votes: " + votes);

// go to next image
	if(currentImageIndex < images.length){
		currentImageIndex++;
		$("#image-to-vote-on").attr('src', images[currentImageIndex]);
		$("#your-vote").val('0');
	}

}






