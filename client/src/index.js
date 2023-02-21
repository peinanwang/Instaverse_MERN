import React from 'react';
import ReactDOM from 'react-dom';

// Provider is a react component that knows how to read changes from our redux store
import { Provider } from 'react-redux';

// createStore is a function that creates a redux store
// applyMiddleware is a function that applies middleware to our redux store
// compose is a function that combines multiple functions
import { createStore, applyMiddleware, compose } from 'redux';

// thunk is a middleware that allows us to make asynchronous requests from our action creators
import thunk from "redux-thunk"

// reducers is a file that contains all of our reducers
import reducer from './reducers';

// App is the root component of our application
import App from './App';


const store = createStore(reducer, compose(applyMiddleware(thunk)));

// arguments: 1) root component, 2) where to render the root component
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    
    document.getElementById('root')
);