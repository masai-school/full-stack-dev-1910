# Week 8 - Day 3


State management:

- We know that we can pass state from one parent to child.
- What if we needed to pass between two siblings?
- Well we cannot do it directly
- Here are the possible kind of ways you can pass values between components
    - Parent to Child
    - Child to Parent
    - Sibling to Sibling
- We learnt that state only flows down, so how do we tranfer state between child to parent or sibling to sibling
- So we can lift state up
    - What does this mean?
    - Well it just means that the state that you need to share between siblings should be defined in your parent. 
    - How will you manipulate the state in the parent?
    - Well, we can pass function expressions as props into children. 
        -  Wait what?
        - Yes, we pass a function that will handle the state manipulation in the parent and pass the state down back to the children

[https://reactjs.org/docs/lifting-state-up.html](https://reactjs.org/docs/lifting-state-up.html)

[CodeSandbox](https://codesandbox.io/s/props-parent-child-sibling-r2bwu)


