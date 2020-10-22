# Robo Joker
![](https://github.com/TomKiWorld/RoboJoker/blob/master/public/robo-joker-192x192.png?raw=true)

## Preview

## Usage 
A fun [React](https://github.com/facebook/create-react-app) exercise connection to a [jokeapi](https://sv443.net/jokeapi/v2/) to fetch a random joke and tells it using the [Voice Rss API](http://www.voicerss.org/).

Uses Docker to run and Travis-CI for testing and deploying to an AWS server.

## Available Scripts

In the project directory, you can choose to run with docker or docker compose:

## `docker build -f Dockerfile.dev .` || `docker-compose up --build`

To create an updated image. If you add modules you must run this command before continuing. <br />
* If you are using docker-compose you must run `docker-compose down` before rebuilding.

### `docker run -it -p 3000:3000 -v /app/node_modules -v "/$(PWD)":/app CONTAINER_ID` <br/> Or `docker-compose up`

Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `docker run -it CONTAINER_ID npm run test` || `docker exec -it CONTAINER_ID npm run test` from a second terminal with interactive connection

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `docker build .` followed by `docker run -it -p 8080:80 CONTAINER_ID`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to being served using an nginx engine.
