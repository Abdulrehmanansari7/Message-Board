# Odin Message

A simple message board built while learning **Node.js and Express.js**. Users can add messages and delete them using server-side rendered EJS pages.

## Features

* View messages
* Add a new message
* Delete messages
* Server-side rendering with EJS
* Express routing
* Form handling with POST requests
* Separate Express routers

## Tech Stack

* Node.js
* Express.js
* EJS
* HTML
* CSS

## Project Structure

```text
├── public/
│   └── style.css
├── routes/
│   ├── newRouter.js
│   └── deleteRouter.js
├── views/
│   ├── index.ejs
│   └── form.ejs
├── db.js
└── app.js
```

## What I Practiced

This project helped me practice:

* Express routes and routers
* EJS templates
* Dynamic data in EJS
* HTML forms and POST requests
* Route parameters
* Redirects
* ES modules
* Basic CRUD concepts

## Running Locally

Clone the repository and install the dependencies:

```bash
npm install
```

Start the server:

```bash
node app.js
```

Then open:

```text
http://localhost:8080
```

## Future Improvements

* Add edit/update messages
* Add a real database
* Add form validation
* Improve the UI
