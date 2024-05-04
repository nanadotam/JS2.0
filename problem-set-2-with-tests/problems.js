function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let oddIndices = [];
    for (let i = 1; i < arr.length; i += 2){
        oddIndices.push(arr[i]);
    }
    return oddIndices; 
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let oddIndices = [];
    for (let i = arr.length - 1; i >= 0; i --) { //loops from the end of arr and decrements i in each iteration by 1
        if (i % 2 !== 0) {
            oddIndices.push(arr[i]); //appends to array
        }
    }
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let powOfTwo = [];
    for (let i=0; i<arr.length; i++){
        if ((i * i-1) === 1){ 
            powOfTwo.push(i);
        }
    }
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    newArray = [];
    for (let i=0; i<arr.length; i++) {
        if (Math.log2(i+1)%n===0) {
            newArray.push(i);
        }
    };
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let midIndex = Math.ceil(arr.length/2)-1;
    let firstHalf = arr.slice(0,midIndex + 1);
    return firstHalf;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
