

// var request = require('request');
function get(movieTitle){
	// var movieURL = ();
	const keys = require("./env.js");
	const request = require('request');
	request("https://www.googleapis.com/customsearch/v1?key=" + keys.googleApiKey + "&cx=" + keys.googleAppId + "&q=" + movieTitle, function (error, response, body) {
		// console.log('error:', error);
		var parsedBody = JSON.parse(body).items[1].snippet;
		console.log(parsedBody);
		// console.log('body:', body);

	});
}


module.exports = get;
