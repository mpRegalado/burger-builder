# Burger Builder Project

## About this project

This is a project to test and practice the implementation of different [reactjs](https://reactjs.org/) technologies for educational purposes.
An user will be able to build a burger, log in or sign up with their account, place an order, and review their past orders.

The interface has been built using components from the [ElasticUi](https://elastic.github.io/eui/#/) library.

Some of the lessons applied to this project were:

- State management with `useState()`, `react-redux` and `useContext()`
- The use of `react-router` to implement a single page application with multiple urls.
- Form implementation, submission and validation.
- Communication with a backend.

The backend of the project has been built using [Firebase](https://firebase.google.com/)

[You can find a live version of the project here](https://borger-boilder.web.app/)

## Setting up this project

### Setting up the backend

This project has been designed around a [Firebase](https://firebase.google.com/) backend.
In order to run it yourself, you will need to start your own project.
In your new project, start a realtime database and add a entry to it with the following structure
```
{
    ingredients: {
        bacon: {
            ammount: 1, //Or your innitial ammount, the user will change this locally
            price: 1 //The user will not change or submit this information
        },
        salad: {
            ammount: 1, 
            price: 1
        },
        cheese: {
            ammount: 1,
            price: 1
        },
        meat: {
            ammount: 1,
            price: 1
        },
    }
}
```
The project could handle more or less ingredients, but there are only assets for those four as it is.

You will also need to set up access rules to the database, copy and paste this
```
{
  "rules": {
    "ingredients": {
    	".read": "true",
        ".write": "false"
    },
    "orders" : {
      "$uid":{
      	".read" : "auth != null && auth.uid == $uid",
        ".write" : "auth != null && auth.uid == $uid"  
      }      
    }
  }
}
```

And last, you need to enable the Email/Password method for your authentication.

### Setting up the project

Download or clone this repository and run `npm install` in the root directory to install all the dependencies.
Modify the .env file found in the root directory with the base url for your database and the web API key for your project.
```
REACT_APP_WEB_API=//Web api key for your firebase project here
REACT_APP_BASE_URL=//Base url for your firebase database here
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
