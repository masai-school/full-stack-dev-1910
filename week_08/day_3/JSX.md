
## `JSX`:

[Docs](https://reactjs.org/docs/jsx-in-depth.html)

```javascript
const element = <h1>Hello, world!</h1>;
```

This is not a string or HTML

It is called `JSX`, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

The above code is translated into this:
```javascript
var element = React.createElement("h1", null, "Hello, world!");
```

So `JSX` essentially creates an element when you use JSX

You can try this on [the Babel online compiler](https://babeljs.io/repl/)

Do you need to use JSX?
Well, no. JSX is not a requirement for using React.

Each `JSX` element is just `syntactic sugar` for calling `React.createElement(component, props, ...children)`. So, anything you can do with JSX can also be done with just plain JavaScript.

```javascript
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);
```

can be compiled to this code that `does not use JSX`:

```javascript
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
```



## Using `Dot Notation` for JSX Type 

You can also refer to a React component using dot-notation from within JSX. This is convenient if you have a single module that exports many React components.

```javascript
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

`Without JSX`:
```javascript
var MyComponents = {
  DatePicker: function DatePicker(props) {
    return React.createElement("div", null, "Imagine a ", props.color, " datepicker here.");
  }
};

function BlueDatePicker() {
  return React.createElement(MyComponents.DatePicker, {
    color: "blue"
  });
}
```



## User-Defined Components Must Be `Capitalized`:

When an element type starts with a lowercase letter, it refers to a built-in component like <div> or <span> and results in a string 'div' or 'span' passed to React.createElement. Types that start with a capital letter like <Foo /> compile to React.createElement(Foo) and correspond to a component defined or imported in your JavaScript file.

```javascript
import React from 'react';

// Wrong! This is a component and should have been capitalized:
function hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
  return <hello toWhat="World" />;
}
```

To fix this, we will rename hello to Hello and use <Hello /> when referring to it:

```javascript
import React from 'react';

// Correct! This is a component and should be capitalized:
function Hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Correct! React knows <Hello /> is a component because it's capitalized.
  return <Hello toWhat="World" />;
}
```


## `Props in JSX`

[CodeSandbox](https://codesandbox.io/s/props-m6545)

There are several different ways to specify props in JSX.

### JavaScript Expressions as Props 

For MyComponent, the value of props.foo will be 10 because the expression 1 + 2 + 3 + 4 gets evaluated.

if statements and for loops are not expressions in JavaScript, so they can’t be used in JSX directly. Instead, you can put these in the surrounding code. For example:

```javascript
<MyComponent foo={1 + 2 + 3 + 4} />


function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}
```


### `String Literals `

You can pass a string literal as a prop. These two JSX expressions are equivalent:

```javascript
<MyComponent message="hello world" />

<MyComponent message={'hello world'} />
```

If you pass no value for a prop, it defaults to true. These two JSX expressions are equivalent:
### Props Bool to “True” 

```javascript
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```

### `Spread Attributes `

If you already have props as an object, and you want to pass it in JSX, you can use ... as a “spread” operator to pass the whole props object. These two components are equivalent:

```javascript
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
```

You can also pick specific props that your component will consume while passing all other props using the spread operator.

```javascript
const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};
```

In the example above, the kind prop is safely consumed and is not passed on to the button element in the DOM. All other props are passed via the ...other object making this component really flexible. You can see that it passes an onClick and children props.

Spread attributes can be useful but they also make it easy to pass unnecessary props to components that don’t care about them or to pass invalid HTML attributes to the DOM. We recommend using this syntax sparingly. 

### `Booleans, Null, and Undefined Are Ignored `

```javascript
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```

This can be useful to conditionally render React elements. This JSX renders the <Header /> component only if showHeader is true:

```javascript
<div>
  {showHeader && <Header />}
  <Content />
</div>
```

Conversely, if you want a value like false, true, null, or undefined to appear in the output, you have to convert it to a string first.


### `JavaScript Expressions as Children `

You can pass any JavaScript expression as children, by enclosing it within {}. For example, these expressions are equivalent:

```javascript
<MyComponent>foo</MyComponent>

<MyComponent>{'foo'}</MyComponent>
```

This is often useful for rendering a list of JSX expressions of arbitrary length. For example, this renders an HTML list:

```javascript
function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
  );
}
```

### `Functions as Children `

Normally, JavaScript expressions inserted in JSX will evaluate to a string, a React element, or a list of those things. However, props.children works just like any other prop in that it can pass any sort of data, not just the sorts that React knows how to render. For example, if you have a custom component, you could have it take a callback as props.children:

Children passed to a custom component can be anything, as long as that component transforms them into something React can understand before rendering. This usage is not common, but it works if you want to stretch what JSX is capable of.

```javascript
// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
```