This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Developer Space (Server)

DevSpace is a full-stack social application created for developers anywhere in the world to be able to create their own profile along with their portfolio, and create posts. Created with HTML5, CSS3, SaaS, React, Express, PostgreSQL, Heroku, and Netlify for deployment.

## Links

Live Link to App - https://developerspace.netlify.com/

Link to Client Repo - https://github.com/jordanduran/DevSpace-client

Link to API Repo - https://github.com/jordanduran/DevSpace-server

## Set up

Complete the following steps to clone the server:

1. Clone this repository to your local machine `git clone https://github.com/jordanduran/DevSpace-server.git`
2. `cd` into the cloned repository
3. Install the node dependencies `npm i`
4. For the first time, create a database user `createuser --interactive postgres`
5. Don't set a password for the database.
6. Create the database `createdb -U postgres devspace`
7. Run the migrations `npm run migrate`

## Endpoints

- GET /api/users/

  - Returns all existing users

- POST /api/users/

  - Creates new user

- DELETE /api/users/:id

  - Deletes user by id

- GET /api/users/:id

  - Returns a specific user by id

- GET /api/post

  - Returns all posts

- POST /api/post

  - Creates new post

- GET /api/post/:userid

  - Returns posts created from specific user

- DELETE /api/post/:id

  - Deletes post by id

- POST /api/reviews

  - Creates a new review

- DELETE /api/reviews/:id

  - Deletes a review when the review id is provided in the params

- POST /api/users
  - Creates a new user once valid fields are provided

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

Run the migrations `npm run migrate`

Run migrations for test database `npm run migrate:test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch

### **_Status_**

[![Netlify Status](https://api.netlify.com/api/v1/badges/660afacb-8383-40b3-a1cc-a6687d9d147b/deploy-status)](https://app.netlify.com/sites/developerspace/deploys)
