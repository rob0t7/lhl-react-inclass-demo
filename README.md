# LHL React CRUD Component Composition

Hey Class,

Today we went through a few different topics during our ReactJS
lecture/breakout.

We covered the following topics:

1. React Component Lifecycle Events
2. Stateless Components (i.e. Pure functions that return JSX)
3. Component Composition
4. State/Props
5. ReactJS & AJAX

## React Component Lifecycle

React Components have different lifecycle events that you can tie
into. Below is an image of the lifecycle flow of events:

![alt react lifecycl](http://imgh.us/react-lifecycle.svg)

Even though every component has these events, by default there are
implemented as NOOPs. Most of the time you do not need to worry about
them (unless your a framework/library developer) and the only
functions you will care about are:

* **componentDidMount()** For loading initial state from the server
* **shouldComponentUpdate()** For performance tuning
* **componentDidUnmount()** Getting rid of timers, event listeners,
  etc that were defined in **componentDidMount**

## Stateless Components

As of ReactJS v14 you can now create react components from functions.
The following two are equivalent:

``` javascript
# ES6 Style
class MyComponent extends React.Compenent {
  render() {
    return (
      <div>
        <h1>Some JSX...{this.props.name}</h1>
      </div>
    )
  }
}

# Above as a Pure Function
const MyComponent = (props) => {
  return (
    <div>
      <h1>Some JSX...{props.name}</h1>
    </div>
  )
}
```

In fact the current best practices is that you first create your
components as pure function and only convert them to ES6 classes when
you need to add either state or lifecycle events to them.

## Component Composition

On of the hardest things to learn with React (in fact any FrontJS
Library / Framework) is how to compose the UI in terms of different
components. This topic spans more than just React programming.

In class we discussed how we were going to architect the UI before we
started development.

For some more reading checkout: (https://facebook.github.io/react/docs/thinking-in-react.html)

## State / Props

By default when we create components we pass the data to them through
the use of properties (**props**). This represents **NEVER
CHANGES**. We must make sure that we always return the same output for
the same set of properties.

When we create components that have to change data dynamically when
the use **state**. We also pass this **state** to our children
components through their **props**.

State is also how you trigger UI changes throughout your app.

However most of the components that you create do NOT need state. But
there is always atleast 1 root component that holds all the state of
the app.

## React & AJAX

In our in class demo we used click/form submit events to trigger AJAX
calls using fetch. Upon successfull AJAX calls we changed the state of
the app using **setState** to reflect those changes and update our UI
automatically.

## Resources

* [Official React Docs](https://facebook.github.io/react/)
*
  [Fetch() API](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
* [Demo Code](git@github.com:rob0t7/lhl-react-inclass-demo.git)
