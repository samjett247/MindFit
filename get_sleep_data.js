// This function will get the previous sleep data for a fitbit user given current day and userId and access token
// import ComputeProbabilities from './test_for_anomaly.js';

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

// Returns the token from the URL hash
function getToken() {
	//substring(1) to remove the '#'
	hash = parseParms(document.location.hash.substring(1));

	// Return hash for parsing later
	return hash
}

// Send the user to the authorize endpoint for login and authorization
function authorize(client_id) {
	console.log('authorize fxn')
	// window.location = "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=" + client_id +"&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800"; //&redirect_uri=" + settings.callback_url;
	location.href = "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=" + client_id +"&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800";
}

// Make a call using our token to the Fitbit API
function call_api(userId, token) {
	var api_response;
	$.ajax({
		url:  "https://api.fitbit.com/1.2/user/" + userId + "/sleep/list.json?beforeDate=2019-02-18&sort=desc&offset=0&limit=1",// 'https://api.fitbit.com/1/user/'+ userId+ '/sleep/date/2019-02-16.json',
		method: "GET",
		headers: {
			"Authorization" : "Bearer " + token
		},
		success: function(response) {
			$("#response-code").html(JSON.stringify(response, null, 2));
			// Prism.highlightAll();
		var api_response = JSON.stringify(response, null, 2);
		console.log(api_response)
		}
	});
	return api_response
	}


function get_user_data() {
	// userId and token will change for each user, clientId will not change

	// These are for testing
	var userId = '7BRTPN'
	var token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRKUzQiLCJzdWIiOiI3QlJUUE4iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNTUwOTQwNDMzLCJpYXQiOjE1NTAzNTc0OTh9.3LrFpkcWNeMq0KdhKf9WPyp6nQqCQ0wUka65uJNzomY"
	var clientId = "22DJS4"

	// authorize(clientId);
	//FOR DEVELOPMENT
	var response = {
  "pagination": {
    "beforeDate": "2019-02-18",
    "limit": 1,
    "next": "",
    "offset": 0,
    "previous": "",
    "sort": "desc"
  },
  "sleep": [
    {
      "dateOfSleep": "2019-02-16",
      "duration": 20460000,
      "efficiency": 92,
      "endTime": "2019-02-16T08:04:30.000",
      "infoCode": 0,
      "levels": {
        "data": [
          {
            "dateTime": "2019-02-16T02:23:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-02-16T02:23:30.000",
            "level": "light",
            "seconds": 330
          },
          {
            "dateTime": "2019-02-16T02:29:00.000",
            "level": "deep",
            "seconds": 2460
          },
          {
            "dateTime": "2019-02-16T03:10:00.000",
            "level": "light",
            "seconds": 1290
          },
          {
            "dateTime": "2019-02-16T03:31:30.000",
            "level": "rem",
            "seconds": 1110
          },
          {
            "dateTime": "2019-02-16T03:50:00.000",
            "level": "light",
            "seconds": 870
          },
          {
            "dateTime": "2019-02-16T04:04:30.000",
            "level": "deep",
            "seconds": 1110
          },
          {
            "dateTime": "2019-02-16T04:23:00.000",
            "level": "light",
            "seconds": 1380
          },
          {
            "dateTime": "2019-02-16T04:46:00.000",
            "level": "deep",
            "seconds": 420
          },
          {
            "dateTime": "2019-02-16T04:53:00.000",
            "level": "light",
            "seconds": 120
          },
          {
            "dateTime": "2019-02-16T04:55:00.000",
            "level": "rem",
            "seconds": 930
          },
          {
            "dateTime": "2019-02-16T05:10:30.000",
            "level": "light",
            "seconds": 960
          },
          {
            "dateTime": "2019-02-16T05:26:30.000",
            "level": "wake",
            "seconds": 210
          },
          {
            "dateTime": "2019-02-16T05:30:00.000",
            "level": "light",
            "seconds": 2490
          },
          {
            "dateTime": "2019-02-16T06:11:30.000",
            "level": "rem",
            "seconds": 1740
          },
          {
            "dateTime": "2019-02-16T06:40:30.000",
            "level": "light",
            "seconds": 270
          },
          {
            "dateTime": "2019-02-16T06:45:00.000",
            "level": "rem",
            "seconds": 1260
          },
          {
            "dateTime": "2019-02-16T07:06:00.000",
            "level": "light",
            "seconds": 270
          },
          {
            "dateTime": "2019-02-16T07:10:30.000",
            "level": "wake",
            "seconds": 330
          },
          {
            "dateTime": "2019-02-16T07:16:00.000",
            "level": "light",
            "seconds": 2910
          }
        ],
        "shortData": [
          {
            "dateTime": "2019-02-16T02:23:00.000",
            "level": "wake",
            "seconds": 150
          },
          {
            "dateTime": "2019-02-16T03:13:30.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-02-16T03:17:30.000",
            "level": "wake",
            "seconds": 90
          },
          {
            "dateTime": "2019-02-16T03:22:30.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-02-16T03:48:00.000",
            "level": "wake",
            "seconds": 120
          },
          {
            "dateTime": "2019-02-16T04:23:00.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-02-16T04:52:00.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-02-16T05:08:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-02-16T05:16:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-02-16T05:32:30.000",
            "level": "wake",
            "seconds": 90
          },
          {
            "dateTime": "2019-02-16T05:47:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-02-16T05:51:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-02-16T06:19:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-02-16T06:31:00.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-02-16T06:39:30.000",
            "level": "wake",
            "seconds": 60
          },
          {
            "dateTime": "2019-02-16T07:00:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-02-16T07:30:30.000",
            "level": "wake",
            "seconds": 30
          },
          {
            "dateTime": "2019-02-16T07:49:30.000",
            "level": "wake",
            "seconds": 180
          }
        ],
        "summary": {
          "deep": {
            "count": 3,
            "minutes": 65,
            "thirtyDayAvgMinutes": 0
          },
          "light": {
            "count": 19,
            "minutes": 169,
            "thirtyDayAvgMinutes": 0
          },
          "rem": {
            "count": 8,
            "minutes": 79,
            "thirtyDayAvgMinutes": 0
          },
          "wake": {
            "count": 20,
            "minutes": 28,
            "thirtyDayAvgMinutes": 0
          }
        }
      },
      "logId": 21243743051,
      "minutesAfterWakeup": 0,
      "minutesAsleep": 313,
      "minutesAwake": 28,
      "minutesToFallAsleep": 0,
      "startTime": "2019-02-16T02:23:00.000",
      "timeInBed": 341,
      "type": "stages"
    }
  ]
};

// Create a new response to consider a larger initial dataset
	var new_response = JSON.parse(JSON.stringify(response));

	console.log(response['sleep'])
	dates = ['2019-02-16', '2019-02-15', '2019-02-14', '2019-02-13', '2019-02-12', '2019-02-11', '2019-02-10']
	for (k = 0; k<120; k++){
		res = response['sleep'][0]
		if (k<7) {res['dateOfSleep'] = dates[k]}
		new_response['sleep'].push(JSON.parse(JSON.stringify(res)))
	}
	// response = call_api(userId, token); //FOR PRODUCTION
	var parsed_data = parse_data(new_response)
	console.log(parsed_data)

	//Save some example data
	// download(JSON.stringify(parsed_data), 'example_data.json', 'text/plain');

	// Check to see if the most recent data point is an anomaly
	ComputeProbabilities(parsed_data)
	return parsed_data
}

function parse_data(full_data) {
	
	// This function will parse the json from the fitbit response
	var return_data = []
	data = full_data['sleep']

	for (i = 0; i < data.length; i++) {
		//Add the date into this entry
		return_data[i] = {}
		return_data[i]['date']= data[i]['dateOfSleep']

		//define the summary dataset, and fill in the counts for each sleep type 
		labels = ['deep', 'light', 'rem']
		return_data[i]['sleepData'] = {}

		for (j=0;j<labels.length; j++) {
			return_data[i]['sleepData'][labels[j]] = data[i]['levels']['summary'][labels[j]]['minutes'] + 120*(0.5-Math.random()) //Change this if you dont want random data
		}
	// console.log(return_data)
	}

	return return_data

}

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

