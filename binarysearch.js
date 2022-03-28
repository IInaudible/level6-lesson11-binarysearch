// Import our word list contained in an accompanying JSON file, and
//   sort it using JavaScript's built-in sort algorithm
const wordList = require('./wordlist.json').sort()

// Define what word we're searching for here in our benchmark tests
const searchWord = "year"



// Use a binary search to reduce the amount of matches we need to check 
function binarySearch(sortedArray, searchWord, startIndex, endIndex) {

	// ADD THE ACTIVITY CODE HERE!!!

}

// Check each word from beginning to end for a match against
//   our search word
function linearSearch(arr, searchWord) {
	let foundIndex = -1
	for (let i = 0, iSize = arr.length; i < iSize; i++) {
		const currentWord = arr[i]
		if (currentWord === searchWord) {
			foundIndex = i
			break
		}
	}

	return foundIndex
}



// Magnify the time complexity difference between the two algorithms
//   by increasing the amount of times the algorithms runs
const loopCount = 10000

// Initiate benchmark test for Binary Search
console.time("BinarySearch") // Initiate Binary Search benchmark
for (let i = 0; i < loopCount; i++)	binarySearch(wordList, searchWord, 0, wordList.length-1)
console.timeEnd("BinarySearch") // End Binary Search benchmark
console.log("Result Index: " + binarySearch(wordList, searchWord, 0, wordList.length-1))

// Initiate benchmark test or Linear Search
console.time("LinearSearch") // Initiate Linear Search benchmark
for (let i = 0; i < loopCount; i++) linearSearch(wordList, searchWord)
console.timeEnd("LinearSearch") // End Linear Search benchmark
console.log("Result Index: " + linearSearch(wordList, searchWord))
