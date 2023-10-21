const DataModel = require('../models/DataModel');
const csv = require('csv-parser');
const fs = require('fs');

// Function to validate and save CSV data
const validateAndSaveData = async (req, res) => {
	try {
		const results = [];
		const errors = [];

		fs.createReadStream(req.file.path)
			.pipe(csv())
			.on('data', (row) => {
				// Trim any potential whitespace from email addresses
				row.emailAddress = row.emailAddress.trim();

				// Validate required fields
				if (!row.username || !row.identifier || !row.firstName || !row.lastName || !row.emailAddress) {
					errors.push({ error: 'Required field missing', row });
					return;
				}

				// Validate data types and constraints (You can add more specific checks)
				if (isNaN(Number(row.identifier)) || !isValidEmail(row.emailAddress)) {
					errors.push({ error: 'Invalid data type or constraint violation', row });
					return;
				}

				// If a row is valid, save it to the results array
				results.push(row);
			})
			.on('end', async () => {
				// Check if there are any validation errors
				if (errors.length > 0) {
					// Return validation error response
					return res.status(400).json({ errors });
				}

				// If validation is successful for all rows, save them to the database
				await DataModel.insertMany(results);

				// Acknowledge the user with a success response
				res.status(200).json({ message: 'Data upload successful' });
			});
	} catch (error) {
		// Handle other errors
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

// Function to validate email format
function isValidEmail(email) {
	const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
	return emailRegex.test(email);
}

module.exports = {
	validateAndSaveData,
};
