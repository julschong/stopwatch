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

# main logic in Timer Components
Timer components where it stores:
  - timerState - "Started", "Paused", "Stopped"
  - timer - the elapsed time in milliseconds
  - timeoutId - to the ID to pause or stop running setTimeout function
