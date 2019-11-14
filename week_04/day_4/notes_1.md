### Week 4 - Day 4

#### Session 1


Import your js files into your html file

```
<script src="index.js"></script>
```


**Basic DOM manipulation**

```html
<div id="id1">
    <div id="id2">
        <div id="id3">
            <p id="id4">
                Some Text
            </p>
        </div>
        <div id="id5">
            Some Text
        </div>
    </div>
    <div id="id6">
        Some Text
    </div>
</div>
```

- **Child node**: A node *directly* inside another node `id2` and `id6` are child nodes of `id1`  also `id3` is child node of `id2` and `id4` is child node of `id3`
- **Descendant node**: A node *anywhere* inside another node. `id2` and `id6` are child nodes of `id1` and also descendants. `id3` `id4` `id5` are not child nodes of `id1` but descendants
- **Sibling nodes**: Nodes that sit on the same level. In the above example `id2` and `id6` are siblings and `id3` and `id5` are also siblings

### `getElementsByClassName()`

The `getElementsByClassName()` method returns all the elements that matches the classname

```javascript
var elems = document.getElementsByClassName()
```


[https://codepen.io/albseb511/pen/RwwYJwj](https://codepen.io/albseb511/pen/RwwYJwj)


### `querySelector`

The `querySelector()` method returns the first element that matches one or more CSS selectors. If no match is found, it returns `null`.

```javascript
var ele = document.querySelector(selector);
```

https://codepen.io/nrupuld/pen/BgdvQQ



### `querySelectorAll`

The `querySelectorAll()` returns all elements that match the specified CSS selector.  

```javascript
var eles = document.querySelectorAll(selector);
```

Using Element Selector  
https://codepen.io/nrupuld/pen/QXMzOa  

Using Class Selectors  
https://codepen.io/nrupuld/pen/xoLmNx



### `createElement`

The `createElement()` method creates a new HTML element  

```javascript
document.createElement(tagName);
```

https://codepen.io/nrupuld/pen/MMvLed  



### `appendChild`

The `appendChild()` method adds an element as the last child to the HTML element

```javascript
ele.appendChild(childEle);
```

https://codepen.io/nrupuld/pen/zVdezv



### `removeChild`

The `removeChild()` method **removes a specified child element** from the HTML element

```javascript
ele.removeChild(childEle);
```

https://codepen.io/nrupuld/pen/ewExqz



### `insertBefore`

The `insertBefore()` method **adds a specified child element before another child element**.

```javascript
ele.insertBefore(newEle, refEle);
```

https://codepen.io/nrupuld/pen/dBzLVy
