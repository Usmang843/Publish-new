import React from "react";

const Comments = () => {
  return (
    <div>
      {/* Javascript make easy to manage and build complex front end
            (phentam)Ghost Message which is not updated when clicked
            State -> JS  & UI -> DOM
            React, rendering logic and markup live together in the same place—components.
            <>  </> is called Fragment -> Fragments let you group things without leaving any trace in the browser HTML tree.
            use a value from JavaScript by replacing " and " with { and }
            inline styling in the jsx is style = {{property: value}} 
            {{ and }} the value we passing inside {} wrap the object in another pair of curly braces, a JavaScript object tucked inside JSX curly braces.
             Don’t miss the pair of { and } curlies inside of functions ( and ) when declaring props:
            ...props -> components forward all of their props to their children,
            Use spread syntax with restraint. If you’re using it in every other component, something is wrong
            Local variables don’t persist between renders. When React renders this component a second time, 
            it renders it from scratch—it doesn’t consider any changes to the local variables.
            Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data
            replace this line let index = 0; with const [index, setIndex] = useState(0) convention -> const [something, setSomething]
            In React, useState, as well as any other function starting with “use”, is called a Hook.
            Hooks—functions starting with use—can only be called at the top level of your components 
             Unlike props, state is fully private to the component declaring it. 
             Not set the value by setName(prompt('What is your name?')); -> const name =prompt('What is your name?') simple js
             During the initial render, React will create the DOM nodes for <section>, <h1>, and three <img> tags.
            During a re-render, React will calculate which of their properties, 
            if any, have changed since the previous render. It won’t do anything with that information until the next step, the commit phase.
            React only changes the DOM nodes if there’s a difference between renders. 
            Conditional (ternary) operator (condition? true:false)
            Logical AND operator (&&)  (condition && true)
            React considers false as a “hole” in the JSX tree, just like null or undefined, and doesn’t render anything in its place.
            This process is known as reconciliation, and it is an important aspect of how React works. 
            By using a declarative approach and a VDOM, React is able to optimize the rendering of components and improve the performance of web applications.
            Arrow functions implicitly return the expression right after =>, so you didn’t need a return statement:
            you must write return explicitly if your => is followed by a { curly brace!
            (...objectName) is a syntax shortcut saying “pass all properties of the object as props to the component”   
            React elements are plain objects, and are cheap to create.
            “Rendering” means that React is calling your component, which is a function. 
            The JSX you return from that function is like a snapshot of the UI in time.
            Its props, event handlers, and local variables were all calculated using its state at the time of the render.
            React executing the function -> Calculating the snapshot -> Updating the DOM tree
            When React calls your component, it gives you a snapshot of the state for that particular render.
            You tell React to update the state -> React updates the state value -> React passes a snapshot of the state value into the component
            React keeps the state values “fixed” within one render’s event handlers. You don’t need to worry whether the state has changed while the code is running.
            React stores state outside of your component, as if on a shelf.
            Every render (and functions inside it) will always “see” the snapshot of the state that React gave to that render.
            pure function -> It minds its own business. It does not change any objects or variables that existed before it was called.
            Same inputs, same output. Given the same inputs, a pure function should always return the same result.
            React assumes that every component you write is a pure function.
            React’s rendering process must always be pure. 
            Components should only return their JSX, and not change any objects or variables that existed before rendering—that would make them impure!        
             it’s completely fine to change variables and objects that you’ve just created while rendering.
             the problem was that the component changed a preexisting variable while rendering. This is often called a “mutation” 
            side effects usually belong inside event handlers.
            These changes—updating the screen, starting an animation, changing the data—are called side effects,  They’re things that happen “on the side”, not during rendering.
            Component is the base class for the React components defined as JavaScript classes. 
            Class components are still supported by React, but we don’t recommend using them in new code.
            useContext, useState, 
            The context of a class component is available as this.context
            Reading this.context in class components is equivalent to useContext in function components.
            The props passed to a class component are available as this.props.
            The state of a class component is available as this.state.
            The state field must be an object. Do not mutate the state directly. If you wish to change the state, call setState with the new state.
            The constructor runs before your class component mounts (gets added to the screen) -- constructor should not return anything.
             componentDidMount method, React will call it when your component is added (mounted) to the screen.
             This is a common place to start data fetching, set up subscriptions, or manipulate the DOM nodes. 
            if componentDidMount reads some state or props, you also have to implement componentDidUpdate to handle their changes,
             and componentWillUnmount to clean up whatever componentDidMount was doing.
            cmponentDidUpdate method, React will call it immediately after your component has been re-rendered with updated props or state.  
            This method is not called for the initial render.
            common place to do network requests as long as you compare the current props to previous props 
            if your component’s render method reads directly from an external data source, you have to tell React to update the user interface when that data source changes.
             That’s what forceUpdate lets you do.
            // The render method is the only required method in a class component. The render method should specify what you want to appear on the screen,
            Every time after your component re-renders with a different value, your Effect will re-synchronize. 
            The main reason your Effect will re-synchronize in practice is if some data it uses has changed. 
             React knew that your Effect needed to re-synchronize after value changes. 
             It’s because you told React that its code depends on value by including it in the list of dependencies:
            if your component re-renders but value has not changed, your Effect will remain connected to the same value
            Each Effect in your code should represent a separate and independent synchronization process.
            Thinking from the component’s perspective, the empty [] dependency array means
            this Effect connects  only when the component mounts, and disconnects only when the component unmounts.
            Think from the Effect’s perspective, you don’t need to think about mounting and unmounting at all.
            What’s important is you’ve specified what your Effect does to start and stop synchronizing.
            All values inside the component (including props, state, and variables in your component’s body) are reactive.
            Any reactive value can change on a re-render, so you need to include reactive values as Effect’s dependencies.
            When you write and read Effects, think from each individual Effect’s perspective (how to start and stop synchronization) 
            rather than from the component’s perspective (how it mounts, updates, or unmounts).
            You can access the current value of that ref through the ref.current property. 
            This value is intentionally mutable, meaning you can both read and write to it. It’s like a secret pocket of your component that React doesn’t track. 
            Unlike state, ref is a plain JavaScript object with the current property that you can read and modify.
            This is why reading ref.current during render leads to unreliable code. If you need that, use state instead.
            
    */}
    </div>
  );
};

export default Comments;
