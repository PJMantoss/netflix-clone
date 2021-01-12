Netflix Clone is a Netflix look alike built with React.

It's my final project in the Frontend Developer Career Path bootcamp.

TECH OVERVIEW

- React Hooks
- React Router
- Styled Components(CSS in JS)
- Firebase (Cloud firestore and Authentication)

DESIGN PATTERN: Compound Components - a design pattern in React in which a component is composed of a subset of child components that all work in tandem to produce some functionality.

This project is a complex app that uses many of React features that I've learnt in the bootcamp. It connects to a database (Firebase cloud store) to pull in data for use in the app.

FIRST STEP: I designed the architecture of the app by organizing the directories that would be used in the app. The directories are COMPONENTS, CONTAINERS, CONSTANTS, CONTEXT, FIXTURES, HELPERS, HOOKS, PAGES and UTILS.

SECOND STEP: I installed the following dependencies using yarn.

- yarn add react-router-dom
- yarn add styled-components
- yarn add normalize.css
- yarn add fuse.js

THIRD STEP: I build out the components and containers starting with the Jumbotron, then Footer and Accordion. I then created a toggle context and state in the accordion component for displaying and hiding the accordion's body onClick. Then I created the Opt-form component for the SignIn/SignUp, the Header and Feature component.

FOURTH STEP: I hooked up the application with Firebase by creating a firbase context in CONTEXT folder and importing it in index.js together with other configurations from firebase.

FIFTH STEP: I then connected the app to the cloud firestore

SIXTH STEP: I then built the SIGNIN/SIGN UP Pages with validations.

SEVENTH STEP: Then I built out the Browse page and container to hold the Profile component, Card, Search and Video Player.

EIGHT STEP: Added firbase sigh-in/sign-up auth functionality.

NINTH STEP: Built Profile component, Search Box and added them to Header.

TENTH STEP: 

25-Dec-2020