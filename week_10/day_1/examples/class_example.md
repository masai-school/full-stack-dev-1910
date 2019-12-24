
Lets create a simple function that takes some state and some update
```javascript
// state and update are objects
const reducer = (state, update) => state

// Give in a state, and merge the two objects
const reducer = (state, update) => ({
    ...state,...update
})

// lets play around

let state = {}
state = reducer(state, {item:'Buy Milk'})
state = reducer(state, {item:'Buy Bread'})
state = reducer(state, {item:'Buy Eggs'})
console.log(state)
```

Lets make our redux model better now

Store

    maintains the state
    getState
    dispatch
    listeners - store needs to update and the components react to it
            We wont do this now


```javascript

class Store{
    constructor(reducer,initialState){
        this.reducer = reducer
        this.state = initialState
    }
}

// useless right now, as it only creates.

// lets create a getState()

class Store{
    constructor(reducer,initialState){
        this.reducer = reducer
        this.state = initialState
    }
    getState(){
        return this.state
    }
}

const store = new Store(reducer,{})

console.log(store.getState())

```

Create a dispatch

```javascript
class Store{
    constructor(reducer,initialState){
        this.reducer = reducer
        this.state = initialState
    }
    getState(){
        return this.state
    }
    dispatch(update){
        this.state = this.reducer(this.state,update)
    }
}

const store = new Store(reducer,{})

console.log(store.getState())

store.dispatch({name:'Albert'})
store.dispatch({item:'Buy Milk'})

```
change state = {} inside reducer

So far it handles just merges data

Lets now think of how we can make a todo list.

As of now the reducer only merges. We need to basically append some info into an array

```javascript

const todoAddReducer = (state, newItem) => [ ...state, newItem ]
const toggleStatusItem = (state,updateItem)=>{
    newState = state.map(item=>item.itemName===updateItem.itemName?{...item,completed:!item.completed}:item)
    return newState
}

// HOW DO WE ADD MULTIPLE REDUCERS?
// WELL WE NEED TO DESCRIBE THE TYPE OF ACTION THAT WE ARE DOING

store.dispatch( {type:"ADD_TODO",payload: {item:'BUY MILK',completed:false} } )
store.dispatch( {type:"ADD_TODO",payload: {item:'BUY EGGS',completed:false} } )

// THis is more complicated, as you can see that actions are 
// are nested objects

var initialState = {
    todo:[]
}

const reducer = (state,action) => {
    if(action.type==='ADD_TODO'){
        return {
            ...state,
            todo:todoAddReducer(state.todo,action.payload)
        }
    }
    if(action.type==='TOGGLE_ITEM'){
        return {
            ...state,
           todo:toggleStatusItem(state.todo,action.payload) 
        }
    }
    return state
}


// Make changes to Store

class Store{
    constructor(reducer,initialState){
        this.reducer = reducer
        this.state = this.reducer(initialState,{})
        
    }
    getState(){
        return this.state
    }
    dispatch(update){
        this.state = this.reducer(this.state,update)
    }
}

const store = new Store(reducer,initialState)


// AT THIS STAGE, WE HAVE SOME ACTIONS DEFINED, OUR REDUCER WHICH HANDLES UPDATING THE STATE, AND WE HAVE A GETSTATE FUCNTION TO GET THE LATEST DATA

// LETS MAKE OUR ACTIOSN BETTER
// RATHER THAN HARDCODING THE TYPE AS A STRING, LETS STORE IT AS A VARIABLE

const ADD_TODO = 'ADD_TODO'
const TOGGLE_ITEM = 'TOGGLE_ITEM'

// UPDATE THE REDUCERS ALSO
// SO THAT IF WE CANT MISPELL

// NOW EVERYTIME WE WANT TO CREATE AN ACTION, WE HAVE TO TYPE IT OUT
// LETS GO AHEAD AND MAKE IT SIMPLER AND WRITE IT A FUNCTION THAT RETURNS THE ACTION

const addTodo = (item) =>({
    type:ADD_TODO,
    payload:item
})

const toggleItem = (item) =>({
    type:TOGGLE_ITEM,
    payload:item
})


//with action creator

store.dispatch( addTodo({itemName:'BUY MILK',completed:false}) )
store.dispatch( addTodo({itemName:'BUY EGGS',completed:false}) )

store.dispatch( toggleItem({itemName:'BUY EGGS'}))


// WITH THIS WE HAVE IMPLEMENTED MOST OF THE FEATURES OF REDUX
// SINGLE SOURCE OF TRUTH
// STATE ARE UPDATED THROUGH ACTIONS VIA DISPATCHERS
// UPDATES ARE MADE WITH PURE FUNCTIONS
// ACTIONS => REDUCER => UPDATE STORE

// SO THERE IS A PROBLEM HERE
// THE WAY WE HAVE WRITTEN THE REDUCER WILL CAUSE ISSUES WHEN SCALING UP
// EXAMPLE WE WANT TO KEEP COUNT OF THE TODOS AND SINCE MULTIPLE ACTION TYPES 
// WILL END UP AFFECTING THAT STATE, THE LOGIC WILL BECOME COMPLICATED
// SO ITS BETTER IF WE SEND ALL COMBINE ALL THE CONDITIONS INTO A SINGLE TODO REDUCER
// WE CAN KEEP A NEW FIELD FOR COUNT


const todoReducer = (state, action) => {
    if(action.type===ADD_TODO){
        return [...state,action.payload]
    }
    if(action.type===TOGGLE_ITEM){
        const updateItem = action.payload
        newState = state.map(item=>item.itemName===updateItem.itemName?{...item,completed:!item.completed}:item)
        return newState
    }
    return state
}

const countReducer = (state,action) =>{
    if(action.type===ADD_TODO){
        return state+1
    }
    return state
}

var initialState = {
    todo:[],
    count:0
}

const reducer = (state,action) => ({
    todo:todoReducer(state.todo,action),
    count:countReducer(state.count,action)
})

// NOW ITS ALMOST FULLY IMPLEMENTED REDUX
// WHATS MISSING
// A WAY TO NOTIFY THAT THE STATE IS UPDATED

// LETS GO CREATE OUR APP
// LETS INSTALL REDUX IN OUR APP
// REDUX GIVES US A CREATESTORE OPTION
// INSTEAD OF WRITING NEW STORE
// WE CAN IMPORT CREATESTORE
// WE CAN REMOVE STORE CLASS
// WE CAN REMOVE NEW

// import {createStore} from 'redux'
const {createStore} = require('redux')


const store = createStore(reducer,initialState)


// WE ALSO MADE A CUSTOM FUNCTION CALLED COMBINE REDUCER
// WELL REDUX HAS COMBINEREDUCER

const reducer = combineReducers({
    todo: todoReducer,
    count:countReducer
})
// GIVE DEFAULT VALUES FOR THE STATES FOR EACH OF THE REDUCER THAT WE MADE

// THERES A LOT OF STUFF IN A SINGLE FILE
// LETS SPLIT THE DETAILS INTO SMALLER FILES

// WE CAN ALSO START TO USE A SWITCH STATMENT INSTEAD OF IF 
```

Action.js
```javascript
// action type
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'

// action creators
export const addTodo = (item) =>({
    type:ADD_TODO,
    payload:item
})

export const toggleItem = (item) =>({
    type:TOGGLE_ITEM,
    payload:item
})

```

Reducer.js
```javascript
import {combineReducers} from 'redux'
import {ADD_TODO,TOGGLE_ITEM} from './actions'

const todoReducer = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state,action.payload]
        case TOGGLE_ITEM:
            const updateItem = action.payload
            newState = state.map(item=>item.itemName===updateItem.itemName?{...item,completed:!item.completed}:item)
            return newState
        default:
            return state
    }
}

const countReducer = (state = 0,action) =>{
    switch(action.type){
        case ADD_TODO:
            return state+1
        default:
            return state
    }
}

const reducer = combineReducers({
    todo: todoReducer,
    count:countReducer
})

export default reducer
```

store.js
```javascript
import {createStore} from 'redux'
import reducer from './reducers'

var initialState = {
    todo:[],
    count:0
}

const store = createStore(reducer,initialState)

console.log(store.getState())

export default store
```

SO FAR WE HAVENT DISCSUSSED HOW REDUX WILL CHANGE THE UI FOR REACT.

HOW DO WE GET THE INFO FROM OUR STORE INTO OUR APP?

WELL STORE HAS A METHOD CALLED store.getState()

App.js
```javascript
import React from 'react';
import store from './redux/store'
import {addTodo} from './redux/actions'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      input:''
    }
  }
  render(){
    const items = store.getState().todo
    console.log(items)
    return(
      <div className="app">
        TODO
        <input type='text' onChange={(e)=>this.setState({input:e.target.value})} placeholder='add something' />
        <button onClick={()=>store.dispatch(addTodo({itemName:this.state.input,completed:false}))}>ADD TO DO</button>
        <ul>
          {items.map(item=><li>{item.itemName}</li>) }
        </ul>

      </div>
    )
  }
}

export default App;
```

redux library has a subscribe method, which will listen for changes


index.js
```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'

const render = ()=>ReactDOM.render(<App />, document.getElementById('root'));
render()
store.subscribe(render)

```