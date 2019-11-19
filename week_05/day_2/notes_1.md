### Week 5 - Day 2

#### Session 2


**setAttribute**

The `setAttribute()` method adds the specified attribute to an element, and gives it the specified value.  

If the specified attribute already exists, only the value is set/changed.

```
element.setAttribute(attributename, attributevalue)
```

Adding Classes & IDs

https://codepen.io/nrupuld/pen/VJMNBw

Other Attributes

https://codepen.io/nrupuld/pen/qzPwzW?editors=1010

Using loops & conditional operators

https://codepen.io/nrupuld/pen/KjXLpe


```
Using setAttribute() to modify certain attributes, most notably value in XUL, works inconsistently, as the attribute specifies the default value. To access or modify the current values, you should use the properties. For example, use Element.value instead of Element.setAttribute().
```

**getAttribute**

The `getAttribute()` method gets the specified attribute of an element.



**removeAttribute**

The `removeAttribute()` method removes a given attribute of a specific HTML element.

```
ele.removeAttribute(name);
```

https://codepen.io/nrupuld/pen/gNXYOg



**style**

The `HTMLElement.style` property is used to get as well as set the *inline* style of an element. 

The `style` property has the same (and highest) priority in the CSS cascade as an inline style declaration set via the `style` attribute.

```
ele.style.property = value
```

https://codepen.io/nrupuld/pen/BgmBGV

Using loops 

https://codepen.io/nrupuld/pen/OeOJyB



**CSS Properties DOM Notation accessed from JS**

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference


The Element.hasAttribute() method returns a Boolean value indicating whether the specified element has the specified attribute or not.

The hasAttributes() method of the Element interface returns a Boolean indicating whether the current element has any attributes or not.


See the Element documentation to see all the other properties and methods that can be accessed from Element:

[https://developer.mozilla.org/en-US/docs/Web/API/Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)