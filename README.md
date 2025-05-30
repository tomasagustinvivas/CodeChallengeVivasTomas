# restful-booker
A simple Node booking form for testing RESTful web services.

# Requirements
- Docker 17.09.0
- Docker Compose 1.16.1

# Installation
1. Ensure mongo is up and running by executing ```mongod``` in your terminal
2. Clone the repo
3. Navigate into the restful-booker root folder
4. Run ```npm install```
5. Run ```npm start```
 
Or you can run this via Docker:
1. Clone the repo
2. Navigate into the restful-booker root folder
3. Run ```docker-compose build```
4. Run ```docker-compose up```
5. APIs are exposed on http://localhost:3001

# API
API details can be found on the [publically deployed version of Restful-Booker](https://restful-booker.herokuapp.com/).


# Run tests

To run the Playwright tests, follow these steps:

1. Make sure the API server is running locally at http://localhost:3001 (either via Docker or npm).

2. Install dependencies (if you haven't already): 
    npm install

3. Run all Playwright tests: 
    npx playwright test

4. To run a specific test file, use:
    npx playwright test tests/<your-test-file>.ts




