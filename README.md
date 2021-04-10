# Kermen
## Idea
Kermen is a MERN stack web application built for flower enthusiasts.

## Client Side
The client side is written in ReactJS with react-bootstrap and vannila CSS from styling. Firebase for authentication and Context API for state management.

There are 2 HOCs for route guarding - isAuth and isGuest. There are public and private routes depending on an user is authenticated or not.

The homepage is accessible by everybody dispite their authentiation status, but if an user is not authenticated he can only see the first six flower adds.

When authenticated the user can watch all adds; create one; open details page of a chosen flower; buy, edit or delete an add depending if he is the creator on not.

In the My Flowers page the user can open all the adds he created.

The client is hosted in firebase.com

## Server

The server is hosted in heroku.com

Every server route is written in REST standart. There is only one "flower controller" with his "flower service".

There is only one model - "Flower" model. The service is connected to could database - MongoDB Atlas.

## Installation

To run the server you need to open the server folder and run:
```
npm install
npm start
```

To run the client you need to open the client folder and run:
```
npm install
npm start
```
Then open your browser on http://localhost:3000