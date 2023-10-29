function parseCount(parseValue) {
			let parseResult = Number.parseFloat(parseValue);
			if (Number.isNaN(parseResult)) {
				throw new Error('Невалидное значение');
			} else {
				return parseResult;
			}
		}

function validateCount(parseValue) {
	try {
		return parseCount(parseValue);
		} catch (error){
		return error;
	} finally {

	}
}