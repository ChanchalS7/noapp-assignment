// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../server'); // Import your Express app
// const fs = require('fs');

// chai.use(chaiHttp);
// const expect = chai.expect;

// // Define your test data (valid and invalid CSVs)
// const validCSVPath = 'test/valid.csv';
// const invalidCSVPath = 'test/invalid.csv';

// describe('Upload Controller Tests', () => {
// 	it('should upload valid CSV data', (done) => {
// 		chai
// 			.request(app)
// 			.post('/api/upload')
// 			.attach('csvFile', fs.readFileSync(validCSVPath), 'valid.csv') // Attach a valid CSV file
// 			.end((err, res) => {
// 				expect(res).to.have.status(200);
// 				expect(res.body).to.have.property('message', 'Data upload successful');
// 				done();
// 			});
// 	});

// 	before((done) => {
// 		chai
// 			.request(app)
// 			.post('/api/upload')
// 			.attach('csvFile', fs.readFileSync(invalidCSVPath), 'invalid.csv') // Attach an invalid CSV file
// 			.end((err, res) => {
// 				expect(res).to.have.status(400);
// 				expect(res.body).to.have.property('errors');
// 				done();
// 			});
// 	});a
// });

// describe('CSV Upload API Tests', () => {
// 	it('should upload valid CSV data', (done) => {
// 		chai
// 			.request(app)
// 			.post('/api/upload')
// 			.attach('csvFile', fs.readFileSync('/Data/myFile.csv'), 'valid.csv') // Attach a valid CSV file
// 			.end((err, res) => {
// 				expect(res).to.have.status(200);
// 				expect(res.body).to.have.property('message', 'Data upload successful');
// 				done();
// 			});
// 	});

// 	after((done) => {
// 		chai
// 			.request(app)
// 			.post('/api/upload')
// 			.attach('csvFile', fs.readFileSync('/Data/invalid.csv'), 'invalid.csv') // Attach an invalid CSV file
// 			.end((err, res) => {
// 				expect(res).to.have.status(400);
// 				expect(res.body).to.have.property('errors');
// 				done();
// 			});
// 	});
// });

// // Close the Express server after all tests
// after((done) => {
// 	app.close();
// 	done();
// });



const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Import your Express app
const fs = require('fs');
const path = require('path'); // Add path module for file paths

chai.use(chaiHttp);
const expect = chai.expect;

// Define your test data (valid and invalid CSVs)
const validCSVPath = path.join(__dirname, '/Data/valid.csv');
const invalidCSVPath = path.join(__dirname, '/Data/valid.csv');

describe('Upload Controller Tests', () => {
	it('should upload valid CSV data', (done) => {
		chai
			.request(app)
			.post('/api/upload')
			.attach('csvFile', fs.readFileSync(validCSVPath), 'valid.csv') // Attach a valid CSV file
			.end((err, res) => {
				if (err) return done(err); // Handle errors
				expect(res).to.have.status(200);
				expect(res.body).to.have.property('message', 'Data upload successful');
				done();
			});
	});

	it('should handle invalid CSV data', (done) => {
		chai
			.request(app)
			.post('/api/upload')
			.attach('csvFile', fs.readFileSync(invalidCSVPath), 'invalid.csv') // Attach an invalid CSV file
			.end((err, res) => {
				if (err) return done(err); // Handle errors
				expect(res).to.have.status(400);
				expect(res.body).to.have.property('errors');
				done();
			});
	});
});

// No need to close the server in this setup
