function maximumOccurringCharacter(text) {
	// Write your code here
	// iterate thru texts and store counts in a hash
	let hashCount = {};

	for (let i = 0; i < text.length; i++) {
		const char = text[i];

		if (!hashCount[char]) {
			hashCount[char] = 0;
		}
		hashCount[char]++;
	}

	// find idx of max count from counts
	// use idx on hash keys to find the char

	const charCounts = Object.values(hashCount);
	const maxCount = Math.max(...charCounts);

	for (let j = 0; j < text.length; j++) {
		const char = text[j];

		if (hashCount[char] === maxCount) return char;
	}
}


function finalInstances(instances, averageUtil) {
    // Write your code here
    // iterate thru averageUtil
    // if aU < 25, half the instances. Take ceiling of result
    // but if instance = 1, take no action
    // if aU >= 25 || aU <= 60, no action
    // if au > 60, 2x instances, but if 2x > 2x10**8, no action
    // return instances at end
    let instance = instances;

    for (let i = 0; i < averageUtil.length; i++) {
        const aU = averageUtil[i];
        console.log(aU)

        if (aU < 25) {
            if (instance === 1) continue;
            let nextInstance = Math.ceil(instance / 2);
            if (nextInstance > 1) {
                instance = nextInstance;
                i += 10;
            }
        } else if (aU > 60) {
            let nextInstance = instance * 2;
            if (nextInstance < (2 * 10 ** 8)) {
                instance = nextInstance;
                i += 10;
            }
        }
    }
    
    return instance;
}

        // console.log(`pre-instance: ${instance}`)
        // console.log(`nextIns: ${nextInstance}`)
        // console.log(`postIns: ${instance}`)


function getSpecialSubstring(s, k, charValue) {
  // Write your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const normies = [];

  for (let i = 0; i < charValue.length; i++) {
    if (charValue[i] === 0) {
      normies.push(alphabet[i]);
    }
  }

  const allSubStrings = subStrings(s);

  for (const sub of allSubStrings) {
    let normCount = 0;
    for (let i = 0; j < sub.length; j++) {}
  }
}

function subStrings(string) {
  const subs = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      subs.push(string.slice(i, j));
    }
  }

  return subs;
}