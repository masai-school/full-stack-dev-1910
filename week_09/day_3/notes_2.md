## `Containment`


[https://reactjs.org/docs/composition-vs-inheritance.html](https://reactjs.org/docs/composition-vs-inheritance.html)


Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”.

We can use a prop called children to pass children elements directly into their output:


```javascript
const Form = ({ submit, children }) => (
  <form onSubmit={submit}>{children}</form>
);

const Children = () => {
  const clickFunction = e => {
    e.preventDefault();
    console.log("form submitted", name.current.value, age.current.value);
  };
  var name = React.createRef();
  var age = React.createRef();
  return (
    <div>
      HOME PAGE: PAGE 1
      <Form submit={clickFunction}>
        <div>
          Name: <input type="text" ref={name} />
        </div>
        <div>
          Age: <input type="text" ref={age} />
        </div>
        <button type="submit">SUBMIT</button>
      </Form>
    </div>
  );
};
```

Passing Components into props:

While this is less common, sometimes you might need multiple “holes” in a component. In such cases you may come up with your own convention instead of using children

App
```javascript
import React from "react";
import styles from "./child.module.css";

const Menu = props => {
  console.log("hello");
  return (
    <div className={styles.cont}>
      <div>{props.left}</div>
      <div>{props.right}</div>
    </div>
  );
};

const Title = ({ label }) => <div>{label}</div>;

const Children2 = props => (
  <div>
    <Menu left={<Title label="LEFT" />} right={<Title label="RIGHT" />} />
  </div>
);

export default Children2;

```

child.module.css:

```css

.cont {
  display: flex;
  width: 80%;
  border: 1px solid black;
}

.cont > * {
  flex: 1;
  border: 1px solid gray;
}


```