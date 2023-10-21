const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
	username: String,
	identifier: String,
	firstName: String,
	lastName: String,
	emailAddress: String,
})
const DataModel = mongoose.model('Data', dataSchema);
module.exports = DataModel;
