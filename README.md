# Udacity Readable
This project was made to [React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).

Basically, the app is a basic forum with no authentication to handle posts or comments. This app is running with React, Redux and a Node.js back-end.

## Cloning the repository
On terminal, go to the desired folder to clone this repository.
#### `git clone https://github.com/vinicius98s/udacity-readable`


## Installing dependencies
You have to install on both client and api server folder:
```
cd client
yarn install or npm install
cd..
cd api-server
yarn install or npm install
```

## Running our application
To initialize our application we have to run both client and api server.

On the api-server folder:
```
yarn start or npm start
```

Open another terminal on the client folder:
```
yarn start or npm start
```

Your browser will open with the following url: http://localhost:3000

## Routes
Our app counts with a route for each category of post: <br>
http://localhost:3000/react<br>
http://localhost:3000/redux<br>
http://localhost:3000/udacity<br>
