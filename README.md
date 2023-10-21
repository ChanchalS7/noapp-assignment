# noapp-assignment
# Bulk Data Upload API

This Node.js application allows you to upload bulk data in CSV format and store it in a MongoDB database. It includes unit tests to validate the CSV upload and data storage functionality.

## Getting Started

Follow these steps to set up and run the application.

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/ChanchalS7/noapp-assignment.git
`````

2. Install dependency :
```
npm install
```
### Configuration


Create a .env file in the project root directory to set environment variables. You can use the following template and adjust it as needed:

```
MONGODB_URL=mongodb://localhost:27017/bulk_data
PORT=8000
```

### Start the Application

```
npm start
````

### Running Tests

```
npm test

```

### API Endpoints

POST /api/upload: Use this endpoint to upload CSV data. Attach the CSV file as a csvFile field in the request.


### Example CSV Files
You can find example CSV files in the test/fixtures directory:
````
valid.csv: Contains valid data.
invalid.csv: Contains invalid data.
````

### Author 


- [Chanchal Verma (LinkedIn)](https://www.linkedin.com/in/chanchals7/)
- [Chanchal Verma (GitHub)](https://github.com/ChanchalS7)
