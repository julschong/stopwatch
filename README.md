
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Small Stopwatch Webapp 
this stopwatch app is a simple stopwatch displaying hr : min : second : milliseconds
the app uses simple setInternal() set to ms and built in Date.now() to track elapsed time.
[live demo](https://stopwatch-jc.netlify.app/)

![stopwatch](https://user-images.githubusercontent.com/71372051/116830156-fd4db000-ab5c-11eb-8bad-0917566adda1.gif)

# Main logic in Timer Components
Timer components where it stores:
  - timerState - "Started", "Paused", "Stopped"
  - timer - the elapsed time in milliseconds
  - timeoutId - to the ID to pause or stop running setTimeout function

