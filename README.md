# Pollution Checker - How clean is the air today?

Check air quality and pollution near you with this 'Pollution checker' web app: https://pollution-checker.netlify.app/ 

## What is this project?

This app uses the World Air Quality Index (WAQI) API to check the levels of local air pollution and provides health implications and advice based on the results. The appearance of the app will vary depending on the local air quality at that time. 

This is a portfolio project intended to showcase front end web development skills.

## How to use the Pollution Checker?

When you visit the site, you should be presented with a header and a button. Click or tap on this button and the app will make a call to an API that uses the geo-location of your IP address to find the nearest air quality station to you. 

Based on the results of this, you'll be taken to a screen that shows you the air quality index (score), and health implications based on this score.

You'll also see links to other resources that explain what the WAQI is, what air pollution is, and a global campaign page called 'Action for clean air'.

## Why was this project made?

This project was made in order to showcase and reinforce learnings of how React components and Redux state management work together, working with a third party API and providing a function for users.

It's not perfectly written and could be refactored in a number of places. The focus was to keep all 'state' within the redux store, to make the appearance dynamic based on the current local air quality (based on the results of the API response), and to be fast performing.

## What is this project made with?

- React
- Redux
- NPM
- Javascript
- CSS
- VSCode
- Git & Github

### Any call outs on the structure or function of the app?

#### When does the call to the API get made?

There hasn't been a 'loading' page created for this app. Despite createAsyncThunk and CreateSlice redux functions allowing a pending state, the call to the WAQI API is made when the '/' homepage is rendered. As a result, the app state 'extra reducers' will either be set to 'failed' or 'fullfilled' by the time the user clicks on the button to request the results. This results in a fast performance after the user clicks the main button. 

#### How do the dynamic styles work based on the results of the API?

I created an array of objects, each object listing all the options for air quality, including AQI, level, implications and associated color. I then set the 'zone' state based on the results to a number between 0-5. This correlates to the index of the array that is assocated with that air quality range. I then apply a dynamic className to the div container of the results component. I apply all of the styles using this class to target that element and its decendants. 

#### How does the animation work on the results page?

I've used an animation on a sun svg and two cloud svgs (the providers are referenced in the svg files). Depending on the air quality score, this animation works one way or in reverse, ti signify a sun appearing through clearing smog, or the opposite. 

#### How does the API work?

This is a simple free JSON API which requires an access token obtained by registering your email. I have hidden this behind a gitignore.

## What license do you have?

MIT License

Copyright (c) 2023 Tim Cavey