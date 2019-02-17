// Settings for the script, you MUST fill these out for the example to work
var settings = {
	client_id: "22DJS4",
	// callback_url: "YOUR_CALLBACK_URL_HERE"
};

// Fix an issue with Prism cdn (this is for looks only, feel free to ignore this)
Prism.languages.json = {
	'property': /"(?:\\.|[^|"])*"(?=\s*:)/ig,
	'string': /"(?!:)(?:\\.|[^|"])*"(?!:)/g,
	'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
	'punctuation': /[{}[\]);,]/g,
	'operator': /:/g,
	'boolean': /\b(true|false)\b/gi,
	'null': /\bnull\b/gi
};

Prism.languages.jsonp = Prism.languages.json;

var token= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRKUzQiLCJzdWIiOiI3QlJUUE4iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNTUwOTQwNDMzLCJpYXQiOjE1NTAzNTc0OTh9.3LrFpkcWNeMq0KdhKf9WPyp6nQqCQ0wUka65uJNzomY";
var hash;
var userId;

window.onload = function() {
	// Try to get the token from the URL
	hash = getToken();
	token = hash.access_token
	userId = hash.user_id
	console.log(token)
	console.log(userId)
	// If the token has been given so change the display
	if (token) {
		document.getElementById('api-call').disabled = false;
		document.getElementById('authenticated-msg').innerHTML += token;
		document.getElementById('authenticated-msg').style.display = "block";
		document.getElementById('make-call-msg').style.display = "block";
	} else { // Else we haven't been authorized yet
		document.getElementById('un-authenticated-msg').style.display = "block";
	}
}

// Parses the URL parameters and returns an object
function parseParms(str) {
	var pieces = str.split("&"), data = {}, i, parts;
	// process each query pair
	for (i = 0; i < pieces.length; i++) {
		parts = pieces[i].split("=");
		if (parts.length < 2) {
			parts.push("");
		}
		data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	}
	return data;
}

// Returns  URL hash
function getToken() {
	//substring(1) to remove the '#'
	hash = parseParms(document.location.hash.substring(1));
	// Return hash for parsing later
	return hash
}

// Send the user to the authorize endpoint for login and authorization
function authorize() {
	window.location = "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=" + settings.client_id +"&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800"; //&redirect_uri=" + settings.callback_url;
}

// Make a call using our token to the Fitbit API
function testCall() {
	var token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRKUzQiLCJzdWIiOiI3QlJUUE4iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNTUwOTQwNDMzLCJpYXQiOjE1NTAzNTc0OTh9.3LrFpkcWNeMq0KdhKf9WPyp6nQqCQ0wUka65uJNzomY"
	$.ajax({
		url:  "https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2019-02-18&sort=desc&offset=0&limit=1",// 'https://api.fitbit.com/1/user/'+ userId+ '/sleep/date/2019-02-16.json',
		method: "GET",
		headers: {
			"Authorization" : "Bearer " + token
		},
		success: function(response) {
			$("#response-code").html(JSON.stringify(response, null, 2));
			Prism.highlightAll();
		}
	});
}