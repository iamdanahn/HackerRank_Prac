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
