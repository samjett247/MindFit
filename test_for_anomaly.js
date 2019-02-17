// This script contains the js to test whether a given data point is an anomaly

// Define some global variables
const m = 3
const n=3 //This is the number of features
const epsilon = 0.01 // This is the confidence probability value to compare against

var JSONItems = [];
function ComputeProbabilities(data){
	console.log(data)
	data_vec = math.Matrix()
	labels = ['deep', 'light', 'rem']
	// Generate vectors from json
	for (i=0;i<data.length; i++) {
	for (j=0; j<labels.len;j++) {
		data_vec.get(i,j)= data[i]['sleepData'][labels[j]]
	}
	}
	console.log(data_vec)

}

function Smooth(vec, m) {


	var vec = []

	return vec //Reduced length
}

function Mean(vec) {
	var mu=[]
	return mu// nx1 dimensional vector
}

function Covariance(vec, m) {
	var sigma=[]
	return sigma // nxn dimensional matrix
}

function Probability(vec, mu, sigma) {
	var p_vec = []
	return p_vec // 1xp vector
}

function AnomalyTest(p_vec, sigma) {
	bool_vec=[]
	return bool_vec // 1xp vector
}

// export default ComputeProbabilities;