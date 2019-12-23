# Week 10 Day 1

## `Scaling complexity`

Over the last few weeks you have started to build larger applications, and you have started to work on state management. The complexity of building these apps will increase as the apps become bigger. 

Larger the app gets, the complexity of state and props have increased. Some bugs like:

        Forgetting to pass a prop 
        Managing deeply nested states
        Duplication of state objects
        Not Updating all dependant props
        Components with large no of props
        Understanding where the data is going


## Facebook and `MVC`
<img src="https://www.tutorialsleader.com/Images/c-sharp-tutorials/asp-net-mvc-architecture.png" width="200" height="200" /> 


- The MVC architecture became too complex for facebook
- The complexity manifested into bugs
- Facebook rearchitectured into one-way data flow

Watch this video:
The birth of `React`

[Rethinking Web App Development at Facebook](https://www.youtube.com/watch?v=nYkdrAPrdcw&feature=youtu.be&t=10m22s)


## `Flux`

An application architecture for React utilising a unidirectional data flow.

    Views react to changes in stores
    Stores can only get updated through dipatchers
    Dispatchers can only be triggerred by actions
    Actions can only get triggered by Views

Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.

Flux applications have three major parts: the dispatcher, the stores, and the views (React components). 

### `Structure and Data Flow`

![](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-1300w.png)

Data in a Flux application flows in a single direction:

A unidirectional data flow is central to the Flux pattern, and the above diagram should be the primary mental model for the Flux programmer. The dispatcher, stores and views are independent nodes with distinct inputs and outputs. The actions are simple objects containing the new data and an identifying type property.

The views may cause a new action to be propagated through the system in response to user interactions:

![](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-with-client-action-1300w.png)

All data flows through the dispatcher as a central hub. Actions are provided to the dispatcher in an action creator method, and most often originate from user interactions with the views. The dispatcher then invokes the callbacks that the stores have registered with it, dispatching actions to all stores. Within their registered callbacks, stores respond to whichever actions are relevant to the state they maintain. The stores then emit a change event to alert the controller-views that a change to the data layer has occurred. Controller-views listen for these events and retrieve data from the stores in an event handler. The controller-views call their own setState() method, causing a re-rendering of themselves and all of their descendants in the component tree.

![](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-explained-1300w.png)

This structure allows us to reason easily about our application in a way that is reminiscent of functional reactive programming, or more specifically data-flow programming or flow-based programming, where data flows through the application in a single direction — there are no two-way bindings. Application state is maintained only in the stores, allowing the different parts of the application to remain highly decoupled. Where dependencies do occur between stores, they are kept in a strict hierarchy, with synchronous updates managed by the dispatcher.

We found that two-way data bindings led to cascading updates, where changing one object led to another object changing, which could also trigger more updates. As applications grew, these cascading updates made it very difficult to predict what would change as the result of one user interaction. When updates can only change data within a single round, the system as a whole becomes more predictable.


## [Redux](https://redux.js.org/) - Alternative Predictable State Management

As Flux is not a framework per se, developers have tried to come up with many implementations of the Flux pattern. Eventually, a clear winner emerged, which was Redux. Redux combines the ideas from Flux.

Its core concepts are:

    App state is described by a single plain old JavaScript object.
    Dispatch an action (also a Javscript Objct) to modify the state.
    Reducer is a pure function that takes in current state and action to produce a new state.

The concepts sound simple, but they are really powerful as they enable apps to:

    Have their state rendered on the server, booted up on the client.
    Trace, log and backtrack changes in the whole app.
    Implement undo/redo functionality easily.


## `Redux`

### What is redux?

Redux is a predictable state container for any JavaScript application. For our purpose we are going to use Redux to manage a React Application.

However, Redux has nothing to do with React JS, you can write applications that use Redux in plain JavaScript and direct DOM updates. Redux can also be used with any Front End or Backend framework like AngularJS, EmberJS, VueJS etc.

## The three core principles of Redux

`Single Source of Truth:`

The store in redux is known as the single source of truth. This is because there is only one store in redux and it holds all the application state. Any state that need to be read in redux can only be done from the store.

`State is READ only`

You cannot modify state directly in Redux like you do within a React application using `setState()`.

According to the Redux Docs, "The only way to change the state is to emit an action, an object describing what happened."

Only modify state in Redux using actions and reducers!

`Changes in Redux are made with pure functions:`

Pure functions are functions that **do not** modify their arguments. Instead they create copies of the arguments and modify and change those copies to be returned later. 

Moreover for any given input, pure functions will always return the same value.


```
Action -> Reducer -> Update Store
```

`actions`

    Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

`dispatch`

    Dispatches an action. This is the only way to trigger a state change.

`reducer`

    Reducers specify how the application's state changes in response to actions sent to the store. 

`store`

    A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

The store has the following responsibilities:

    Holds application state
    Allows access to state
    Allows state to be updated via dispatch(action)
    Allows the app to listen to changes in the state

`pure function` - 

    Pure functions take an input value (a parameter or argument) and depending on that input, produce an output value, that's all. They do one thing only, but they do it well. It should be that whenever you give a pure function the same input it will return the same output every single time.


![](https://raw.githubusercontent.com/masai-school/full-stack-dev/master/course/week_10/day_1/redux_basic.gif)



[Cartoon guide to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)