// get the url
var url = window.location.href;

//getting the access token from url
// var access_token = url.split("#")[1].split("=")[1].split("&")[0];
var access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRKUzQiLCJzdWIiOiI3QlJUUE4iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNTUwOTQwNDMzLCJpYXQiOjE1NTAzMzg0MzR9.SU_LpVvrx3hkfwIy2FEYPo8BYVIml6ZS8bSIBQ34hr4'
// var userId = url.split("#")[1].split("=")[2].split("&")[0];
var userId = '7BRTPN'
console.log(access_token);
console.log(userId);

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