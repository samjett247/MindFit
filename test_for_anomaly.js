// This script contains the js to test whether a given data point is an anomaly

// Define some global variables
const m = 3
const n=3 //This is the number of features
const epsilon = 0.01 // This is the confidence probability value to compare against

var JSONItems = [];
function ComputeProbabilities(data){

	var labels = ['deep', 'light', 'rem']
	var data_mat = []
	
	// Generate vectors from json
	for (j=0; j<labels.length;j++){
		data_mat[j]=[]
	for (i=0;i<data.length; i++)  {
		// console.log()
		data_mat[j][i]=data[i]['sleepData'][labels[j]]
	}
	}
	// mat = math.matrix(data_mat)
	// console.log(mat._data)
	smoothed_mat = Smooth(data_mat, m)
	mean_vec = Mean(smoothed_mat)
	covariance = Covariance(smoothed_mat, mean_vec)

}

function Smooth(mat, m) {
	// Smooths the input matrix along one dimension
	var len = mat[0].length
	var smoothed_arr = []

	for (j=0; j<3; j++) {
		smoothed_arr[j]=[]

		for (i=0; i<len;i++) {
		if (i ==0 || i==len-1){
		}
		else {
			smoothed_arr[j][i-1] = (1/3)*(mat[j][i] + mat[j][i-1] +mat[j][i+1])
		}
		}}
	return smoothed_arr

	}

function Mean(mat) {
	// Takes the mean of each feature
	var mu=[]
	for (j=0;j<mat.length; j++) {
		arr = mat[j]
		sum = arr.reduce(function(a, b) { return a + b; });
    	avg = sum / arr.length;
    	mu[j] = avg
	}

	return mu// nx1 dimensional vector
}

function cov_term(x, y) {
	// computes the middle term of the covariance series
	// Needed for Covariance fxn
	var term= []
	term[0] = [0,0,0]
	term[1]= [0,0,0]
	term[2] = [0,0,0]
	console.log(x.length)
	console.log(x[1]-y[1])

	for (k=0;k<x.length; k++) {
		for (j=0;j<y.length; j++) {
			term[k][j] = (x[j]- y[j])*(x[k]-y[k])
		}
	}
	console.log(term)
	return term
}

function Covariance(mat, mu) {
	// Computes the covariance of a matrix (nxn)

	var len = mat[0].length
	var sigma = []
	console.log(mu)


	sigma[0] = [0,0,0]
	sigma[1]= [0,0,0]
	sigma[2] = [0,0,0]

	for (i=0;i<len; i++) {
		//compute the covariance term for each data point 

		covariance_term = cov_term([mat[0][i], mat[1][i], mat[2][i]], mu)
		console.log(covariance_term)
		var sigma= sigma.map(function (num, idx) {
		  return num + array2[idx];
		}); // [6,8,10,12]

	}
	console.log(sigma)

	return sigma/len // nxn dimensional matrix
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