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
