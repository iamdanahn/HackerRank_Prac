function funWithAnagrams(text) {
	// Write your code here
	const result = []; // SPACE: O(n)
	const removedIdx = []; // SPACE: O(n)

	for (let i = 0; i < text.length; i++) {
		// TIME: O(n)
		if (removedIdx.includes(i)) continue;
		const word1 = text[i];
		result.push(word1);

		for (let j = i + 1; j < text.length; j++) {
			// TIME: O(n)
			const word2 = text[j];
			if (word1.length !== word2.length) continue;

			if (matchingAnagrams(word1, word2)) removedIdx.push(j); // TIME: O(n logn)
		}
	}

	return result.sort(); // TIME: O(n logn)
}

function matchingAnagrams(a, b) {
	const word1 = a.split("").sort().join(""); // TIME: O(n logn)
	const word2 = b.split("").sort().join(""); // TIME: O(n logn)

	return word1 === word2;
}
