# Week 8 - Day 2



## Adding styles and CSS modules

It is commonplace in react to have a style-sheet for each component as this can help you retain a lot of modularity. 

You can add styles in many ways, including including inline styles, style object literals.

Here we will be using CSS Modules which offer many advantages including local scoping and class composition.  

Lets add some CSS to the `multiple_test` app. 

For the `App` component, I make a new css file called `app.module.css` in my components folder.

Any new CSS modules must follow the syntax `<name>.module.css`.

Here is the code for `app.module.css`:

```css
.header{
    color: blue;
    border: 1px groove black;
    background-color: lightgrey;
}
```
**Note:** Since this is not JSX you can use regular CSS syntax.

Now I have to import these styles from my `App` component. 

Updated code in app component:

```jsx
import React from 'react';
import SimpleList from './SimpleList.js'
import styles from './app.module.css'

class App extends React.Component{
    render(){
        return (
            <div>
                <h1 className = {styles.header} >Shopping List</h1>
                <SimpleList />
                <SimpleList />
            </div>
        );
    }
}

export default App
```

The only changes are `import styles from './app.module.css'` which imports the styles and `className = {styles.header}` which adds the header style to the `H1` tag. 

Lets also add styles to the `SimpleList` component. 

I create a file called `simpleList.module.css` and add the following css into it. 

```css
.list{
    font-family: monospace;
    font-size: 2em;
    margin: 2em;
    padding: 0;
    list-style-type: '> ';
}
```
Then I add a few lines of code to add the styles to my component. 

```jsx
import React from 'react';
import styles from './simpleList.module.css'

class SimpleList extends React.Component{
    render(){
        return (
            <ol className = {styles.list}>
                <li>Apple</li>
                <li>Banana</li>
                <li>Watermelon</li>
            </ol>
        );
    }
}

export default SimpleList
```

CODESANDBOX:
[https://codesandbox.io/s/modules-css-g6r3q](https://codesandbox.io/s/modules-css-g6r3q)

[https://codesandbox.io/s/modules-css-g6r3q](https://codesandbox.io/s/modules-css-g6r3q)

This is the basics of using CSS modules. For a deeper look visit [https://programmingwithmosh.com/react/css-modules-react/](https://programmingwithmosh.com/react/css-modules-react/)





## Using className and styles

[CodeSandbox](https://codesandbox.io/s/css-s3zdn)

[Docs](https://reactjs.org/docs/dom-elements.html#style)

![Image](https://i.imgur.com/m7dxOSQ.png)

```javascript

var style = "class3";
var style2 = "class4";
function App() {
  return (
    <div className="App">
      <div>
        <button style={{ background: "red" }}>ONE</button>
      </div>
      <div>
        <button style={{ background: "blue", fontSize: 30 }}>TWO</button>
      </div>
      <div>
        <button style={{ background: "blue", fontSize: "30px" }}>THREE</button>
      </div>
      <div>
        <button className="class1">FOUR</button>
      </div>
      <div>
        <button className="class1 class2">FIVE</button>
      </div>
      <div>
        <button className={`${style}`}>SIX</button>
      </div>
      <div>
        <button className={`${style} ${style2}`}>SIX</button>
      </div>
    </div>
  );
}
```

CSS FILE:
```css
.App {
  font-family: sans-serif;
  text-align: center;
}

button {
  width: 100px;
  height: 50px;
  margin: 10px;
}

.class1 {
  font-size: 20px;
  background: green;
}

.class2 {
  background: yellow;
  font-weight: bold;
}

.class3 {
  background: gray;
  font-size: 30px;
}

.class4 {
  background: aqua;
}
```


## Handling Props and State

![Props](https://i.imgur.com/8GoGmTa.png)

[CodeSandbox](https://codesandbox.io/s/props-state-child-0tjcv)

Props are read only. If you pass props into your child, and store that information in the state, it will not re-render the app if the the props data change. 

```javascript
// In the example provided you can see that we are passing information
// from 

  render() {
    return (
      <div>
        <Child data={this.state.data} data2={this.data} />
        <button onClick={() => this.addToData()}>Add with setState</button>
        <br /> <br />
        <button onClick={() => this.addToDataWithoutSetState()}>
          Add without setState
        </button>
      </div>
    );

// 
```
