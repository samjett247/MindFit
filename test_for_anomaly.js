// This script contains the js to test whether a given data point is an anomaly

function Read_Data(){
	//Read in the example_data.json
	var JSONItems = [];
	$.getJSON("/example_data.json", function( data){
	JSONItems = data;
	console.log(JSONItems);
});
}


function Smooth(vec, m) {

	return vec //Reduced length
}

function Mean(vec) {

	return mu// nx1 dimensional vector
}

function Covariance(vec, m) {

	return sigma // nxn dimensional matrix
}

function Probability(vec, mu, sigma) {

	return p_vec // 1xp vector
}

function AnomalyTest(p_vec, sigma) {

	return bool_vec // 1xp vector
}