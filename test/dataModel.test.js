// // const mongoose = require('mongoose');
// // const chai = require('chai');
// // const expect = chai.expect;
// // const DataModel = require('../models/DataModel'); // Adjust the path as needed

// // describe('DataModel Tests', () => {
// // 	before((done) => {
// // 		// Connect to a test database or a MongoDB in-memory database
// // 		mongoose.connect('mongodb://localhost:27017/noapp', {
// // 			useNewUrlParser: true,
// // 			useUnifiedTopology: true,
// // 			useCreateIndex: true,
// // 		});
// // 		const db = mongoose.connection;

// // 		db.on('error', () => {
// // 			console.error('MongoDB connection error');
// // 			done();
// // 		});

// // 		db.once('open', () => {
// // 			console.log('Connected to MongoDB');
// // 			done();
// // 		});
// // 	});

// // 	after((done) => {
// // 		// Close the database connection after tests
// // 		mongoose.connection.close(() => {
// // 			console.log('MongoDB connection closed');
// // 			done();
// // 		});
// // 	});

// // 	beforeEach(async () => {
// // 		await DataModel.deleteMany({})
// // 	});

// // 	it('should save data to the database', (done) => {
// // 		const testData = {
// // 			username: 'testuser',
// // 			identifier: '123',
// // 			firstName: 'Test',
// // 			lastName: 'User',
// // 			emailAddress: 'testuser@example.com',
// // 		};

// // 		const newData = new DataModel(testData);
// // 		newData.save((err) => {
// // 			if (err) {
// // 				done(err);
// // 			}

// // 			DataModel.findOne({ username: 'testuser' }, (err, data) => {
// // 				if (err) {
// // 					done(err);
// // 				}
// // 				expect(data).to.be.an('object');
// // 				expect(data.username).to.equal('testuser');
// // 				done();
// // 			});
// // 		});
// // 	});
// // });


// // test/uploadController.test.js
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const sinon = require('sinon');
// const app = require('../server'); // Assuming your Express app is defined in server.js
// const DataModel = require('../models/DataModel');
// const { validateAndSaveData } = require('../controllers/uploadController');

// chai.use(chaiHttp);
// const expect = chai.expect;

// // Describe block for unit tests
// describe('Upload Controller Tests', () => {
// 	// Before hook to stub and mock MongoDB functions
// 	before(() => {
// 		sinon.stub(DataModel, 'insertMany').resolves([{ insertedCount: 1 }]);
// 	});

// 	// After hook to restore MongoDB functions
// 	after(() => {
// 		sinon.restore();
// 	});

// 	// Test case for valid data upload
// 	it('should upload valid CSV data', (done) => {
// 		chai
// 			.request(app)
// 			.post('/api/upload')
// 			.attach('csvFile', '/Data/myFile.csv')
// 			.end((err, res) => {
// 				expect(res).to.have.status(200);
// 				expect(res.body.message).to.equal('Data upload successful');
// 				done();
// 			});
// 	});

// 	// Test case for handling invalid data
// 	it('should handle invalid CSV data', (done) => {
// 		chai
// 			.request(app)
// 			.post('/api/upload')
// 			.attach('csvFile', '/Data/invalid.csv')
// 			.end((err, res) => {
// 				expect(res).to.have.status(400);
// 				expect(res.body.errors).to.be.an('array');
// 				done();
// 			});
// 	});
// });

// // You can create additional test cases as needed.
