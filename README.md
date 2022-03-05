# Role Based Authorization in Nodejs

You may have seen applications or programs that offer service to users based on the user's role or subscription package. A good scenario can be where accounts in a system are categorized into something like free, basic and premium accounts.

In this article, I will be showing you how this can be implemented using Nodejs.


## Prerequisites
* Basic understanding of Express.js
* A code editor (I'll be using VScode)
* Baic knowledge of git and github to code along.

## Theory
This concept of authentication and authorization in expressjs can be achieved easily using middleware functions.

One might ask what is a middleware, well a `middleware` is simply a function. You could think of it as a function that processes requests before the final handler for the matched route does it's job and responds to the client who made the request.

A sample use case of middlewares in relation to this topic is having a function(middleware) to check headers or body of a request for an authentication token which is verified by the server to authenticate the current user, i.e to know the current user who made the request. If the server can't authenticate the user the middleware can simply handle the request and send an authentication error back to the user, without the request getting to the client.

This same idea for authenticating users can be applied to check if a user is authorized to use a particular resource. From the example I gave earlier we could add one more middleware that checks if the authenticated user has right to a resource using the users details.

Enough talks, now let's start coding and see this in action.

## Project setup
To make things easier I made available some starter files if you would like to code along. Available at [github.com/SpiffGreen/Node_auth_tutorial](github.com/SpiffGreen/Node_auth_tutorial). The finished version lies on the `main` branch while the starter files are on the `starter` branch. To code along run the following commands in the command line. make sure to have git installed.

```sh
# Clone start files to local machine
git clone https://github.com/SpiffGreen/node_auth_tutorial
cd node_auth_tutorial

# Install app dependencies
npm install

# Run app in develoment mode
npm run dev
```

## Detailed look at the file structure

## Authentication setup

## Authorization setup

## Conclusion# node_auth_tutorial
