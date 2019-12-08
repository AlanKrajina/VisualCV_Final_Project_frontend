# VisualCV

VisualCV is a Full Stack web application created using Rails backend and React/Redux frontend.

It is a single page application that utilizes Create, Read and Delete functions of persistent storage. 
App uses RESTful architectural style with the implementation of the client and server done independently, meaning that the code on the client side can be changed at any time without affecting the operation of the server, and the code on the server side can be changed without affecting the operation of the client. 
Utilizes GET and POST fetch requests to get and submit data to the database, Thunk middleware for async logic that interacts with the store and in addition uses EXTERNAL and INTERNAL APIs. 
Project is build upon ES6 JS standards.

## Summary

Main technologies used in this project were Ruby on Rails and Javascript with React and Redux.
Why Ruby? 
Ruby is scalable and projects with large code are easily maintainable. Its sintax is similar to normal language as we use in everyday conversation and for that reason very user friendly, and fun to learn.
But coding language woudnt fulfil its full potential without a backend framework like Rails that helps developers to build websites and applications, because it abstracts and simplifies common repetitive tasks. A developer using Ruby on Rails can basically create a full stack web application using only Rails. And in additions with a library like ActiveRecord we can work with databases like sqlite3 and postgeSQL.
The second and the coolest part of the App is Javascript frontend library React that was build by Facebook developers and is taking the developer world by storm, surpassing Angular and Vue by far. It gives a developer an option tu create a single page application without refreshing a page offering a much faster experience for users when browsing through the page.
React makes developers life much easier because it combines all parts of a website in its own individual components that have only one task. 
For example creating a comment on a blog.
One component has input field to type the comment and submit it. Second component takes all comments created and sends an individual comment to the third component. And that third one just shows it on the page.
That is the beauty of React, you can easly access individual components, modify them, upgrade and improve.  
    
[Quick project demo](https://www.youtube.com/watch?v=NoJUi5paX_s)


## Built Using

- ReactJS
- Redux
- Redux Thunk Middleware
- Rails
- Fast JSON:API serializer
- SQLite database
- React Bootstrap
- ES6 JS standards


## Installation

To install this app onto your local machine:

- Open your terminal and change to the local directory where you want to clone your repository and run:

```
$ git clone + git@github.com:AlanKrajina/VisualCV_Final_Project_frontend.git
```
- Then clone backend repository:

```
$ git clone + git@github.com:AlanKrajina/VisualCV_Final_Project.git
```
- Open first terminal and run:

```
$ rails s
```

- Open second terminal and run:

```
$ npm start
```

And that should be it, your browser should open new window and show the App.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can ru:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
