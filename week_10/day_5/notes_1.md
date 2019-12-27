# Week 10 Day 1

[Why use react-redux?](https://react-redux.js.org/introduction/why-use-react-redux)

## `Redux`

[`Advanced Redux - Docs`](https://redux.js.org/advanced/advanced-tutorial)

[`Redux-Thunk`](https://github.com/reduxjs/redux-thunk)

The purpose of redux is to hold our application state, one of the great features of redux is to change our state in a very well defined pattern, and this pattern is repeated over and over in our application.

- We call an `action` creater
- the `action creator` produces an `action`
- The `action` flows into our `middleware`
- and then the `middleware` does some work and passes action to our `reducers`,
- the `reducers` create our new application `state` 
- the new `state` flows into react
- This can re-render the app

![Redux middleware](https://i.imgur.com/aYzy0eW.png)

We have done this for `synchronous` calls. 

But vast majority of web applications fetch data with `asynchronous` channels. 

Its much more common that we call an action creator we need to fetch some information through
API or some `asynchronous` action, and only when that request resolves are we ready to pass the 
action into our reducers.

So how do we handle this `asynchronous` request?

- That is where `redux-thunk` comes into the picture.
- The purpose of redux thunk is to give direct control over the dispatch method.
- the dispatch method can be thought of as anything that happens after the action creators. 

What redux-thunk allows you to do is that, instead of returning objects in action creators, 
you can start to return functions. When it is a function, redux thunk takes care of it.

`Middleware` is software that takes an incoming request, processes it, and passes it on to the next piece of middleware in the chain.

In this case, based on a type of action, we call a middleware, once its resolved or rejected, we can do the appropriate action and manage state.

dependencies
```javascript
npm install redux-thunk redux react-redux axios
```

Lets build an `example` of fetching some github users based on a query.

Lets go about creating our store first:

We need to import applyMiddleware, and thunk from redux-thunk as shown

`store.js`
```javascript
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk));
export { store, reducer };
```

We havent made our reducer yet, 
we will make the actions first before that.

`action.js`

```javascript
import axios from "axios";

// actions
const FETCH_GITHUB_REQUEST = "FETCH_GITHUB_REQUEST";
const FETCH_GITHUB_SUCCESS = "FETCH_GITHUB_SUCCESS";
const FETCH_GITHUB_FAILURE = "FETCH_GITHUB_FAILURE";


// action creators
const fetchPostRequest = query => {
  console.log("fetch post request action called");
  return {
    type: FETCH_GITHUB_REQUEST,
    query: query || ""
  };
};

const fetchPostSuccess = data => {
  console.log("fetch post success action called");
  return {
    type: FETCH_GITHUB_SUCCESS,
    data: data
  };
};

const fetchPostFailure = error => {
  console.log("fetch post failure action called");
  return {
    type: FETCH_GITHUB_FAILURE,
    error: error
  };
};

// action to fetch the data 
const fetchData = (query = null) => {
  console.log("fetch Data called", query);
  return dispatch => {
    console.log("dispatching post request action...");
    dispatch(fetchPostRequest);
    console.log("hello");
    return axios
      .get(`https://api.github.com/search/users?q=${query}`)
      .then(res => {
        console.log("response success", res.data.items);
        return dispatch(fetchPostSuccess(res.data.items));
      })
      .catch(err => dispatch(fetchPostFailure(err)));
  };
};

// export
export {
  fetchData,
  fetchPostFailure,
  fetchPostRequest,
  fetchPostSuccess,
  FETCH_GITHUB_FAILURE,
  FETCH_GITHUB_REQUEST,
  FETCH_GITHUB_SUCCESS
};
```

`reducer.js`
```javascript
import {
  FETCH_GITHUB_REQUEST,
  FETCH_GITHUB_SUCCESS,
  FETCH_GITHUB_FAILURE
} from "./action";

const initStore = {
  isLoading: false,
  query: "",
  data: [],
  error: ""
};

const reducer = (state = initStore, action) => {
  console.log("reducer called");
  switch (action.type) {
    case FETCH_GITHUB_REQUEST:
      console.log("reducer github request called");
      return {
        ...state,
        isLoading: true,
        query: action.query
      };
    case FETCH_GITHUB_SUCCESS:
      console.log("reducer github success called", action);

      return {
        isLoading: false,
        data: action.data,
        error: state.error
      };
    case FETCH_GITHUB_FAILURE:
      console.log("reducer github failure called");
      return {
        isLoading: false,
        data: state.data,
        error: action.error
      };
    default:
      console.log("reducer default called");
      return state;
  }
};

export default reducer;
```

Component:

We will mapState, mapDispatch to Props and connect them to our Component

When the component mounts, we will run the fetchData action request

`GithubProfile.js`
```javascript
import React from "react";
import { fetchData } from "../redux/action";
import { connect } from "react-redux";

class GithubProfileRedux extends React.Component {
  componentDidMount() {
    console.log("component mounted");
    this.props.fetchData("masai");
  }
  render() {
    console.log("props are", this.props);
    return (
      <React.Fragment>
        <div>GITHUB PROFILES</div>
        {!this.props.isLoading ? (
          this.props.data.map(item => (
            <div style={{ padding: 10 }}>{item.url}</div>
          ))
        ) : (
          <div>...Loading</div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: a => dispatch(fetchData(a))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubProfileRedux);
```

We can now import everything into our index.js

import store, and Provider as well

`index.js`
```javascript
import React from "react";
import ReactDOM from "react-dom";
import GithubProfileRedux from "./components/GithubProfile";
import "./styles.css";

// importing store
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      {/* Provider created */}
      <Provider store={store}>
        <GithubProfileRedux />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```
Here is the example discussed in todays notes
[CodeSandbox](https://codesandbox.io/s/redux-async-mtubp)

[What are the next steps?](https://redux.js.org/advanced/next-steps)