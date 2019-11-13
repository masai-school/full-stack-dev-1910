### Week 4 - Day 3


#### Session 1

**Javascript Basic DOM Manipulation**


#### What is JavaScript?

JavaScript is a scripting or programming language that allows you to implement complex things on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.


**How to write Javascript**


```
<script>
function doSomething(){
 // Your Code Goes Here
}
</script>
```



### **`HTML Events`**

[HTML events](https://developer.mozilla.org/en-US/docs/Web/API/Event) allow JavaScript to register different event handlers on elements in an HTML document.

`click`  

Execute a JavaScript when the element is clicked:

```
<button onclick="function1()">MASAI Button</button>
```



`alert()`  

Display an alert box:

```
alert("Hello! I am an alert box!!");
```

<https://codepen.io/nrupuld/pen/gNMKWm>


### `DOM`

```
The DOM is one of the most-used APIs on the Web because it allows code running in a browser to access and interact with every element in the document. Elements can be created, moved and changed. Event listeners can be added to elments and triggered on occurrence of a given event.
```

- Represented by a tree structure of all the elements created by the browser
- We can use javascript to manipulate/read/write the DOM

![https://i.imgur.com/OK78Vah.png](https://i.imgur.com/OK78Vah.png)

### `Changing Elements`

### `getElementById()`

```
The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
```

[document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

Change the content inside a particular HTML [ELEMENT](https://developer.mozilla.org/en-US/docs/Web/API/Element)

```
Element.innerHTML
    Is a DOMString representing the markup of the element's content.
```


```javascript
document.getElementById("id").innerHTML = "New Value"
```

<https://codepen.io/nrupuld/pen/qzNyYP>

[https://www.w3schools.com/jsref/prop_html_innerhtml.asp](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)



Get the [value](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement/value) of an input element

```javascript
document.getElementById("id").value
```

<https://codepen.io/nrupuld/pen/zVBJaa>

Get the value of an select element

<https://codepen.io/nrupuld/pen/NZrOVL>



Getting Values and Setting Values and HTML

<https://codepen.io/nrupuld/pen/pXbOee>



**Styling Elements**

```javascript
document.getElementById("id").style.color
```

[https://www.w3schools.com/jsref/dom_obj_style.asp](https://www.w3schools.com/jsref/dom_obj_style.asp)

<https://codepen.io/nrupuld/pen/vqKzbY>

