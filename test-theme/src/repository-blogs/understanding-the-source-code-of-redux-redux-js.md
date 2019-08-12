---
title: 'Understanding the source code of Redux (ReduxJS)'
date: "2019-07-23"
path: 'understanding-the-source-code-of-redux-redux-js'
excerpt: 'We are going to look into the createStore file, and its functions like getState, dispatch, subscribe and replaceReducer.'
versionControl: GitHub
repositoryUrl: https://github.com/reduxjs/redux
repoOrganization: reduxjs
repoName: redux
author: sant0shg
---

# Introduction

Redux is a predictable state container for Javascript apps. You can store the state of your application using Redux. Redux provides some core functions for allowing you to access the state and write to state, and other helper functions which allow you to combine reducers, bind actions, etc. 

There are many folders that you will find when you open the Redux repository. The main source code of Redux lies in the "src" folder. We are going to focus on the "src" folder in this blog post.

# Source folder

If you open the "src" folder, you will find the following files.

## index.js file

The index.js file exports all the functions from other files. It also checks if you are using the development version of redux in production code without setting the environment variable NODE_ENV as "production". In simple terms, if you have not set NODE_ENV as production, but if your code is still minified, then it means that the Redux source code will be in development mode. So in index.js file, they have written a function called "isCrushed". 


```js
function isCrushed() {}

if (
  process.env.NODE_ENV !== 'production' &&
  typeof isCrushed.name === 'string' &&
  isCrushed.name !== 'isCrushed'
) {
  warning(
    'You are currently using minified code outside of NODE_ENV === "production". ' +
      'This means that you are running a slower development build of Redux. ' +
      'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' +
      'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' +
      'to ensure you have the correct code for your production build.'
  )
}
```

When you are using the minified code, the function name of "isCrushed" will be obfuscated to something smaller. But if you have not set NODE_ENV as production, Redux will not know that it has to include minified code. So you will be using development build of Redux. The above warning is to check for that edge case where you have forgotten to set the NODE_ENV as production when actually you are using the minified code in your build (Usually people use minified code in production builds)

## createStore.js

This is one of the main files of the Redux repository. It is a simple function, which exports 4 functions. The map of this file looks something like this.

```
export default function createStore(reducer, preloadedState, enhancer) {
    function getState() {
       ...
    }

    function subscribe(listener) {
       ...
    }

    function dispatch(action) {
       ...
    }

    function replaceReducer(nextReducer) {
       ...
    }

    function observable() {
       ...
    }

    return {
        dispatch,
        subscribe,
        getState,
        replaceReducer,
        [$$observable]: observable
    }
}
```

## getState function

The getState function returns the currentState of the application. It checks if the current state is isDispatching, and if it is, then throws the error. isDispatching is a kind of lock that we have in the database. When the redux is updating the state (in dispatch function), it sets isDispatching to true, and only when the state is completely updated, it sets isDispatching back to false. This check-in getState is to prevent return inconsistent state when it is being updated.

```js
function getState(){
    if (isDispatching) {
      throw new Error(
        'You may not call store.subscribe() while the reducer is executing. ' +
          'If you would like to be notified after the store has been updated, subscribe from a ' +
          'component and invoke store.getState() in the callback to access the latest state. ' +
          'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.'
      )
    }
    
    return currentState
}
```

## subscribe function

The subscribe function accepts a listener function as a parameter and adds it to an array of list of listeners called nextListeners. This array of functions is called whenever the state changes. It also returns the unsubscribe function, which can be used to remove the function from the array of functions (nextListeners). The pseudo-code of the subscribe function is as follows

```js
const listnerFunction = () => { ... }
const res = redux.subscribe(listnerFunction);

...
// when you want to remove the listnerFunction
res.unsubscribe();
```

## dispatch function

The dispatch function dispatches an action, which is used to change the state. The pseudo-code of dispatch function, after removing the checks that they have written is as follows.

```js
function dispatch(action) {
    try {
      isDispatching = true
      currentState = currentReducer(currentState, action)
    } finally {
      isDispatching = false
    }

    const listeners = (currentListeners = nextListeners)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }

    return action
  }
```

Here we set isDispatching to true (if you call getState when isDispatching is true, it throws an error instead of returning state). Then we pass the currentState and action to the currentReducer function, which returns a new state, which is again assigned to currentState. After that, the isDispatching is set to false again.

Also, after the state is changed, all the listener functions from the nextListeners array are called. 

## replaceReducer function

In replaceReducer function, as the name suggests, it replaces the currentReducer with the new reducer function passed in the parameter of the function. It also dispatches an internal action called "REPLACE", so that the currentState is updated with new state and all listener functions are notified.

The observable function allows you to observe for the changes in state. Whenever the state is changed, the function that is subscribed to observing it is called. Observables are different from promises. In promises, the function is resolved once. But in observables, the observed function is called whenever the function is resolved. 

The createStore also dispatched an internal state called INIT when it is called. 

```js
dispatch({ type: ActionTypes.INIT })
```

# Conclusion

We have looked into two important files "index.js" and "createStore.js". We will look into other source files in another blog post.