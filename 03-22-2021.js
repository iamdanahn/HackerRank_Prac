// HackerRank 03/22

/*
 * Complete the 'deviceNamesSystem' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY devicenames as parameter.
 */

function deviceNamesSystem(devicenames) {
	// Write your code here
	if (devicenames.length === 1) return devicenames;

	let nameCounter = {};
	const newNames = [];

	for (let i = 0; i < devicenames.length; i++) {
		let deviceNameCounter = nameCounter[devicenames[i]];

		if (deviceNameCounter) {
			newNames.push(devicenames[i] + deviceNameCounter);
			deviceNameCounter += 1;
		} else {
			newNames.push(devicenames[i]);
			deviceNameCounter = 1;
		}
	}
	return newNames;
}

// RUBY ATTEMPT
// def deviceNamesSystem(devicenames)
//     hash = {}
    
//     return devicenames.map do |device|
//         if hash[device]
//             hash[device] += 1
//             device + hash[device].to_s
//         else
//             hash[device] = 0
//             device
//         end
//     end
    
// end


// sample
// devices = ["switch", "tv", "switch", "tv", "switch", "tv"];
// turns into
// devices = ["switch", "tv", "switch1", "tv1", "switch2", "tv2"];



/*
 * Complete the 'mergeInBetween' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST list1
 *  2. INTEGER_SINGLY_LINKED_LIST list2
 *  3. INTEGER a
 *  4. INTEGER b
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function mergeInBetween(list1, list2, a, b) {
    // Write your code here
    
    return list1.slice(0, a) + list2 + list1.slice(b, list1.length)

}




/*
 * Complete the 'countTeams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY skills
 *  2. INTEGER minPlayers
 *  3. INTEGER minLevel
 *  4. INTEGER maxLevel
 */

function countTeams(skills, minPlayers, minLevel, maxLevel) {
    // Write your code here
    
    const availablePlayers = skills.filter(skill => (skill >= minLevel && skill <= maxLevel));
    if (availablePlayers.length < minPlayers) return 0;
    if (availablePlayers.length === minPlayers) return 1;
    
    
    
}
