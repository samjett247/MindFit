// Listen for the button click
document.getElementById('idLink').onclick = function() {
    console.log('clicked')
    get_api_data();
};


function get_api_data (){
var url = window.location.href;

var url = "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22DJS4&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800"
console.log('app.js ran')

// Get the parameters from the url
var params = getUrlVars(url)

// Get relevant parameters from the params
var access_token = params.access_token
var userId = params.userId
// console.log(params.client_id)
// console.log(params)

//getting the access token from url
// var access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRKUzQiLCJzdWIiOiI3QlJUUE4iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNTUwOTQwNDMzLCJpYXQiOjE1NTAzMzg0MzR9.SU_LpVvrx3hkfwIy2FEYPo8BYVIml6ZS8bSIBQ34hr4'
// var userId = '7BRTPN'
// console.log(access_token);
// console.log(userId);

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.fitbit.com/1/user/'+ userId +'/sleep/date/2019-02-16.json');
xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
xhr.onload = function() {
   if (xhr.status === 200) {
      console.log(xhr.responseText);
      document.write(xhr.responseText);
   }
};
xhr.send()

// Define function to get parameters from the url
function getUrlVars(url_in) {
    var vars = {};
    var parts = url_in.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
return}
