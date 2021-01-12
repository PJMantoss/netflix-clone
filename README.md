Netflix Clone is a Netflix look alike built with React.

It's my final project in the Frontend Developer Career Path bootcamp.

TECH OVERVIEW

- React Hooks
- React Router
- Styled Components(CSS in JS)
- Firebase (Cloud firestore and Authentication)

DESIGN PATTERN: Compound Components - a design pattern in React in which a component is composed of a subset of child components that all work in tandem to produce some functionality.

This project is a complex app that uses many of React features that I've learnt in the bootcamp. It connects to a database (cloud firestore) to pull in data for use in the app.

FIRST STEP: I designed the architecture of the app by organizing the directories that would be used in the app. The directories are COMPONENTS, CONTAINERS, CONSTANTS, CONTEXT, FIXTURES, HELPERS, HOOKS, PAGES and UTILS.

SECOND STEP: I installed the following dependencies using yarn.

- yarn add react-router-dom
- yarn add styled-components
- yarn add normalize.css
- yarn add fuse.js

THIRD STEP: I built out the components and containers starting with the Jumbotron, then Footer and Accordion. I then created a toggle context and state in the accordion component for displaying and hiding the accordion's body onClick. Then I created the Opt-form component for the SignIn/SignUp pages, the Header and Feature components.

FOURTH STEP: I hooked up the application with Firebase by creating a firbase context in CONTEXT folder and importing it in index.js together with other configurations from firebase.

FIFTH STEP: I then connected the app to the cloud firestore

SIXTH STEP: Built the SIGN IN/SIGN UP Pages with validations and added Routes constant file.

SEVENTH STEP: Built out the Browse page and container to hold the Profile component, Card, Search and Video Player.

EIGHT STEP: Added firbase sigh-in/sign-up auth functionality.

9TH STEP: Built Profile component, Search Box and added them to Header.

10TH STEP: Hydrated Firestore with seed Data.

11TH STEP: Created a custom firebase useContent Hook for pulling data from firebase.

12TH STEP: Created a data Selection map to merge pieces of data (series and films) from the database and pass them into the Browse container

13TH STEP: Created and styled the Card and Player components for displaying results from the database and playing video preview.

14TH STEP: Created custom Auth Listener hook for modifying routes

15TH STEP: Modify App Routes to be protected.

CHALLENGES AND SOLUTIONS:
- I had trouble hydrating the firestore database with seed data. I was able to solve this by changing 'allow read: false' to 'allow read, write: if true' in firebase and correctly importing seedDatabase and initializing firebase in index.js
- All background and data images from firestore refused to display initially. I later found out that I had to use a certain piece of code for referencing public folders when sourcing images in react, so I solved this challenge by adding process.env.PUBLIC_URL in front of every image path in the src attribute e.g. src={process.env.PUBLIC_URL + /images/} 

25-Dec-2020