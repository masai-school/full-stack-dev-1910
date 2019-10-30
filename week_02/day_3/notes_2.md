## Week 2 - Day 3

### Media Queries (CSS-7)

https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

**Exact Width** (Exact Width)

```css
@media (width: 480px) {
  div {
    background: red;
  }
}
```

**Min Width** (Specified Width and Above)

```css
@media (min-width: 600px) {
  div {
    background: green;
  }
}
```

**Max Width** (Specified Width And Below)

```css
@media (max-width: 1024px) {
  div {
    background: blue;
  }
}
```



https://codepen.io/nrupuld/pen/WNewBjj

#### Typical Device Breakpoints

```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
```