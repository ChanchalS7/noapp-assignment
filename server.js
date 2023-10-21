//Defining module
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const uploadRoutes = require('./routes/uploadRoutes');
/**
@description This is an API related to upload bulk data in csv format
@author Chanchal Verma

 */

//Configure the dotenv file 
dotenv.config();

//Configure the app;
const app = express();

//Connect to MongoDB 
mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

//middleware
app.use(bodyParser.json());

//Define API routes
app.use('/api/upload', uploadRoutes);
const PORT = process.env.PORT || 8002
if (process.env.NODE_ENV === 'test') {
	// Use a different port for testing
	app.set('port', 8080);
} else {
	app.set('port', PORT);
}

// Start the server
const server = app.listen(app.get('port'), () => {
	console.log(`Server is running on port ${app.get('port')}`);
});

module.exports = server