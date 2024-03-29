# NodeJS Blog
This is a simple blog web application built with Node.js and MongoDB.

## Why
This project's intention was to build a Node.js application from scratch, understanding the core concepts, while also exploring new areas such as MongoDB and server components (through ejs).

## Features
- Create Posts: Authenticated users can create new blog posts.
- Read Posts: Users can view all blog posts on the homepage.
- Delete & Edit Posts: Post creators can delete and edit posts.

## Technologies Used
- Node.js: JavaScript runtime environment for server-side development.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for storing blog posts and user data.
- Mongoose: MongoDB object modeling tool for Node.js.
- EJS: Templating engine for generating HTML markup.

## Getting Started
To get the Node.js application up and running locally, follow these steps:

1. Clone the Repository: `git clone https://github.com/your-username/your-nodejs-app.git`
2. Install Dependencies: `npm install`
3. Set Up MongoDB Database:
  Create a MongoDB database either locally or using a cloud-based service like MongoDB Atlas.
  Obtain the connection URI for your MongoDB database.
  Set the connection URI as an environment variable named DB_URI in a .env file in the root directory of your project. Example:
  plaintext `DB_URI=mongodb://username:password@hostname:port/database`
5. Start the Application: `nodemon app.js`
5. Access the Application: Open your web browser and navigate to **http://localhost:3000** to access the running application.

## Screenshots
<img width="1334" alt="Screenshot 2024-03-29 at 13 00 27" src="https://github.com/ChristopherJH/node-blog/assets/60347280/cae1123e-5653-4163-96af-fa5722fe85af">
<img width="1334" alt="Screenshot 2024-03-29 at 13 00 32" src="https://github.com/ChristopherJH/node-blog/assets/60347280/61cdbee0-351d-4174-b823-b68709ffc25a">
<img width="1334" alt="Screenshot 2024-03-29 at 13 00 37" src="https://github.com/ChristopherJH/node-blog/assets/60347280/09178655-a796-47bd-8f15-191856513e40">
