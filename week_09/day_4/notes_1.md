## Week 9 Day 4


[CodeSandbox](https://codesandbox.io/s/material-ui-kv9qx)

## Using NPM to import 3rd party packages and Styling

Till now we haven't really installed any NPM packages of our own. 

We also haven't used any UI frameworks like Bootstrap that can reduce the number of components we need to built from scratch. 

While we could use [reactstrap](https://reactstrap.github.io/) which gives us Bootstrap 4 components, I have chosen to go with [Material-UI](https://material-ui.com/) which is the most popular UI framework. 

To install any packages from npm, just run the `npm install command`. You can see the documentation here [https://docs.npmjs.com/cli/install](https://docs.npmjs.com/cli/install).

## Installing Material UI and importing components. 

You can find all the basic instructions on installing Material-UI here [https://material-ui.com/getting-started/installation/](https://material-ui.com/getting-started/installation/).

1. To start out with go to your react application folder and run `npm install @material-ui/core`.

2. Also make sure to include font and icon links in your base `index.html` file. 

This will ensure you have a consistent design language across your entire App. 

Add the following lines to `index.html`:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

3. We are just making basic template app so we can just keep all the javascript code in the App component. 

4. Lets add a simple navigation bar to our app. First you must import the App bar component with an import statement `import AppBar from '@material-ui/core/AppBar`.
`
You also need to import a ToolBar with another import statement `import Toolbar from '@material-ui/core/Toolbar`.

Finally you can render both it within your App component. 

Your App.js code should look like this:

```jsx
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class App extends React.Component{
    render(){
        return (
            <div>
                <AppBar>
                    <Toolbar>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default App
```
Lets also include a title and a menu button into the page.

We also want the material-ui icons package so run `npm install @material-ui/icons`.

Updated code:

```jsx
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

class App extends React.Component{
    render(){
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5">
                            Home
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default App
```

You can check out the example here [https://github.com/masai-school/full-stack-dev/tree/master/course/week_8/day_4/material_test](https://github.com/masai-school/full-stack-dev/tree/master/course/week_08/day_4/material_test)

Material UI has many components but you can see all of them and any examples on [https://material-ui.com/components](https://material-ui.com/components).

[Minimizing Bundle Size ](https://material-ui.com/guides/minimizing-bundle-size/)

The website has many examples for each component so using them in your projects should be easy.

## Other UI frameworks

Don't let me limit your options, there are many other popular UI frameworks for ReactJS and you are free to use any of them.

Here is a small list of great frameworks:

1. [Ant Design (Used by Alibaba, Baidu and many other Chinese Companies)](https://ant.design/)
2. [React Bootstrap (Bootstrap 3)](https://react-bootstrap.github.io/)
3. [React Strap (Bootstrap 4)](https://reactstrap.github.io/)
4. [React Virtualized (Great for handling a lot of Data)](https://bvaughn.github.io/react-virtualized/)


There are many others so feel free to search Google for a UI framework that you like and enjoy working with!
