export const generateRandomBetween = (min: number, max: number, exclude: number): number => {
	let rndNum = 0;
	try {
		rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
	return rndNum;
	} catch (_) {
		return  rndNum;
	}
}