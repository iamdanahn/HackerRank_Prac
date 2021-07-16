// function getSubstringCount(s) {
// 	// Write your code here
// 	const subs = new Set();
// 	let range = 2;

// 	while (range < s.length) {
// 		for (let i = 0; i < s.length - range + 1; i++) {
// 			let subString = s.slice(i, i + range);
// 			subs.add(subString);
// 			// console.log(subString)
// 		}
// 		range += 2;
// 	}
// 	console.log(subs);

// 	let count = 0;
// 	subs.forEach((sub) => {
// 		if (binaryString(sub)) count++;
// 		console.log(`IS IT TRUE: ${binaryString(sub)}`);
// 	});

// 	return count;
// }

// function binaryString(str) {
// 	let leftIdx = 0;
// 	let rightIdx = str.length - 1;
// 	const startChar = str[leftIdx];
// 	const endChar = str[rightIdx];
// 	let result = true;

// 	console.log(str);
// 	// console.log(`startChar ${startChar}`);
// 	// console.log(`endChar ${endChar}`)
// 	while (leftIdx < rightIdx) {
// 		// console.log(`str[leftIdx] ${str[leftIdx]}`)
// 		// console.log(`str[rightIdx] ${str[rightIdx]}`)
// 		if (
// 			str[leftIdx] !== startChar ||
// 			str[rightIdx] !== endChar ||
// 			startChar === endChar
// 		)
// 			result = false;
// 		leftIdx++;
// 		rightIdx--;
// 	}
// 	return result;
// }

// while (range <= s.length) {
//         let start = 0;
//         let end = range;

//         while (end < s.length) {
//             const subString = s.slice(start, end);
//             subs.add(subString);

//         }
//         range += 2
//     }

function getSubstringCount(s) {
	let curr = 1, //
		prev = 0, //
		ans = 0; //

	for (let i = 1; i < s.length; i++) {
		if (s[i] === s[i - 1]) {
			curr++;
		} else {
			ans += Math.min(curr, prev);
			prev = curr;
			curr = 1;
		}
	}
	return ans + Math.min(curr, prev);
}

const countSubstrings = (binString) => {
	let count,
		prevCount,
		currCount = 0;
	let prevChar,
		currChar = ""; // 0

	for (let i = 0; i < binString.length; i++) {
		const marker = binString.charAt(i);
		if (currChar === marker) {
			currCount++;
		} else {
			count += Math.min(currCount, prevCount);
			prevChar = currChar;
			prevCount = currCount;
			currChar = marker;
			currCount = 1;
		}
	}
	count += Math.min(currentCount, prevCount);
	return count;
};
// TEST CASES:
console.log(getSubstringCount("000110"));
console.log(getSubstringCount("001100011"));
console.log(getSubstringCount("001100011"));
console.log(getSubstringCount("010101010"));
console.log(getSubstringCount("011001"));
