# NodeJs Movie Application README

## Overview

This Node.js application leverages the Express.js framework and MongoDB as its database, seamlessly connected using the Mongoose library. The application is divided into two main endpoints: "user" and "movie."

### User Endpoint

The "user" endpoint handles user registration and login functionalities. During the registration process, field validation is implemented using the Mongoose library. For user login, encryption is employed via the "encrypt" library to hash passwords, and JSON Web Tokens (JWT) are generated for client authentication.

### Movie Endpoint

The "movie" endpoint is responsible for the RESTful management of the movie database. This includes functionalities such as adding, editing, deleting, retrieving all movies (with additional mechanisms for limiting and paginating items), and fetching a single movie. The endpoints for adding, editing, and deleting movies are secure, and only authenticated users have access to them.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Encrypt (for password hashing)
- JSON Web Tokens (for JWT token)

## Access the API endpoints
### User
- POST, '/api/user/login'
- POST, '/api/user/signup'
### Movie
- GET, '/api/movies' -> get all movies (additional query params: page=page_number, limit=limit_movies)
- GET, '/api/movies/:id' -> get single movie
- POST, '/api/movies' -> create movie
- PUT, '/api/movies/:id' -> update movie
- DELETE, '/api/movies/:id' -> delete movie
  
---

Feel free to explore and enhance the functionality of this movie application!
