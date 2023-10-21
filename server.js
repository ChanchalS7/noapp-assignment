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
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})