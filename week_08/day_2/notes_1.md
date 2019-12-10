# Week 8 - Day 2

## Introduction to ReactJS Part 2 -B

[Documentation](https://reactjs.org/docs/lists-and-keys.html)

First, let’s review how you transform lists in JavaScript.
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

//This code logs [2, 4, 6, 8, 10] to the console.
```
## `Rendering Multiple Components - List/Arrays`

You can build collections of elements and include them in JSX using curly braces {}.

Below, we loop through the numbers array using the JavaScript map() function. We return a <li> element for each item. Finally, we assign the resulting array of elements to listItems:

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```

We include the entire listItems array inside a ul element, and render it to the DOM:


```javascript
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

[Codepen](https://codepen.io/gaearon/pen/GjPyQr?editors=0011)

When you run this code, you’ll be given a warning that a key should be provided for list items. A `“key”` is a special string attribute you need to include when creating lists of elements.

## `Keys`

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:


```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```


## Importance of keys

React uses keys to identify elements. React needs to be aware of all elements that are added, removed or modified. 

When you pass a list of elements is very important to give each element a **unique key**. You must do this manually. 

This key **must not** be the index of the element. 

**Example where elements values are used as keys:**

[https://codepen.io/gaearon/pen/jrXYRR?editors=0011](https://codepen.io/gaearon/pen/jrXYRR?editors=0011)


Here is a great article on why index should not be used as the key [https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318).

If you want to know why react needs to use key read this [https://reactjs.org/docs/reconciliation.html#recursing-on-children](https://reactjs.org/docs/reconciliation.html#recursing-on-children).

## Rules of keys

**Keys should be used with correct context:**

When rendering child elements, keys should be applied from the parent, not the child. 

**Incorrect:**

```jsx
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

**Correct:**
```javascript
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

**CodePen:** [https://codepen.io/gaearon/pen/ZXeOGM?editors=0010](https://codepen.io/gaearon/pen/ZXeOGM?editors=0010)

**Keys only need to be unique among siblings:**

Key are just used by react to differentiate between siblings, therefore keys just need to be unique among siblings. They can be non-unique globally. 

**CodePen:** [https://codepen.io/gaearon/pen/NRZYGN?editors=0010](https://codepen.io/gaearon/pen/NRZYGN?editors=0010)

**Keys are not passed to components:**

Keys are not passed as props to your component, if you need to identify components you create, you can pass another prop with a different name but with the same keys. 

**Example:**

```jsx
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```
Here id is passed as a key and as a prop called `id`. They both use `post.id` but only `id` is available to the Post component as props. 

### Embedding `map()` in to JSX

Since `map()` is a valid JavaScript expression you can also embed `map()` right into JSX. 

**CodePen:** [https://codepen.io/steviekong/pen/YmNaGe?editors=0010](https://codepen.io/steviekong/pen/YmNaGe?editors=0010)

