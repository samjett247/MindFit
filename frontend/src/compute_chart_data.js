
import $ from 'jquery'; 

function parseParms(str) {
  var pieces = str.split("&"), data = {}, i, parts;
  // process each query pair
  for (i = 0; i < pieces.length; i++) {
    var parts = pieces[i].split("=");
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
  var hash = parseParms(document.location.hash.substring(1));

  // Return hash for parsing later
  return hash
}

// Send the user to the authorize endpoint for login and authorization
function authorize(client_id) {
  console.log('authorize fxn')
  window.location = "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=" + client_id +"&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800"; //&redirect_uri=" + settings.callback_url;
  // var location.href = "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=" + client_id +"&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800";
}

// Make a call using our token to the Fitbit API
function call_api(userId, token) {
  var api_response;
  $.ajax({
    url:  "https://api.fitbit.com/1.2/user/" + userId + "/sleep/list.json?beforeDate=2019-02-18&sort=desc&offset=0&limit=1",// 'https://api.fitbit.com/1/user/'+ userId+ '/sleep/date/2019-02-16.json',
    method: "GET",
    async: false,
    headers: {
      "Authorization" : "Bearer " + token
    },
    success: function(response) {
      // $("#response-code").html(JSON.stringify(response, null, 2));
      // Prism.highlightAll();
    api_response = JSON.stringify(response, null, 2);
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
  //FOR Production
  var api_response = call_api(userId, token); //FOR PRODUCTION
  var response = JSON.parse(api_response)

// Create a new response to consider a larger initial dataset
  var new_response = JSON.parse(JSON.stringify(response));

  var dates = ['2019-02-10','2019-02-11','2019-02-12', '2019-02-13', '2019-02-14', '2019-02-15', '2019-02-16']
  for (var k = 0; k<dates.length; k++){
    var res = response['sleep'][0]
    if (k<7) {res['dateOfSleep'] = dates[k]}
    new_response['sleep'].push(JSON.parse(JSON.stringify(res)))
  }
  var parsed_data = parse_data(new_response)
  console.log(parsed_data)
  // console.log(parsed_data)

  //Save some example data
  // download(JSON.stringify(parsed_data), 'example_data.json', 'text/plain');

  // Check to see if the most recent data point is an anomaly
  // ComputeProbabilities(parsed_data)
  return parsed_data
}

function parse_data(full_data) {
  
  // This function will parse the json from the fitbit response
  var return_data = []
  var data = full_data['sleep']

  for (var i = 0; i < data.length; i++) {
    //Add the date into this entry
    return_data[i] = {}
    return_data[i]['Date']= data[i]['dateOfSleep']

    //define the summary dataset, and fill in the counts for each sleep type 
    var labels = ['deep', 'light', 'rem']
    var new_labels = ['Deep Sleep', 'Light Sleep', 'REM Sleep']

    for (var j=0;j<labels.length; j++) {
      return_data[i][new_labels[j]] = Math.round(data[i]['levels']['summary'][labels[j]]['minutes'] + 80*(0.5-Math.random())) //Change this if you dont want random data
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

export default get_user_data;