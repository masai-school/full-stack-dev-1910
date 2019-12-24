# Week 10 Day 2

[Why use react-redux?](https://react-redux.js.org/introduction/why-use-react-redux)

## `React - Redux`

[Docs]((https://react-redux.js.org/introduction/quick-start))

React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

`Installation`: 

```javascript
npm install react-redux
```


`Provider`

[Docs](https://react-redux.js.org/api/provider)

React Redux provides <Provider />, which makes the Redux store available to the rest of your app:

```javascript
import { Provider } from 'react-redux'
import store from './store'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
```

`connect()`

[Docs](https://react-redux.js.org/api/connect)

```javascript
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
```


### `Connect: Extracting Data with mapStateToProps`

[Docs](https://react-redux.js.org/using-react-redux/connect-mapstate)

As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data from the store that the connected component needs. It’s frequently referred to as just mapState for short.

It is called every time the store state changes.
It receives the entire store state, and should return an object of data this component needs.

`Definition`:
```javascript
function mapStateToProps(state, ownProps?)
```

It should take a first argument called state, optionally a second argument called ownProps, and return a plain object containing the data that the connected component needs.

This function should be passed as the first argument to connect, and will be called every time when the Redux store state changes. If you do not wish to subscribe to the store, pass null or undefined to connect in place of mapStateToProps.

`Return`

Your mapStateToProps function should return a plain object that contains the data the component needs:

Each field in the object will become a prop for your actual component
The values in the fields will be used to determine if your component needs to re-render

```javascript
function mapStateToProps(state) {
  return {
    a: 42,
    todos: state.todos,
    filter: state.visibilityFilter
  }
}

// component will receive: props.a, props.todos, and props.filter
```


[Read full Documentation](https://react-redux.js.org/using-react-redux/connect-mapstate)


### `Connect: Dispatching Actions with mapDispatchToProps`

As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store.

dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.

With React Redux, your components never access the store directly - connect does it for you. React Redux gives you two ways to let components dispatch actions:


The mapDispatchToProps function will be called with dispatch as the first argument. You will normally make use of this by returning new functions that call dispatch() inside themselves, and either pass in a plain action object directly or pass in the result of an action creator.

`dispatch`:

```javascript
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  }
}

// You will also likely want to forward arguments to your action creators:

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  }
}
```

`Return:`

Your mapDispatchToProps function should return a plain object:

Each field in the object will become a separate prop for your own component, and the value should normally be a function that dispatches an action when called.
If you use action creators ( as oppose to plain object actions ) inside dispatch, it is a convention to simply name the field key the same name as the action creator:

```javascript
const increment = () => ({ type: 'INCREMENT' })
const decrement = () => ({ type: 'DECREMENT' })
const reset = () => ({ type: 'RESET' })

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  }
}
```

[Read full Documentation](https://react-redux.js.org/using-react-redux/connect-mapdispatch)


[CodeSandbox](https://codesandbox.io/s/01-redux-connect-g6oxg)