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

         */}
    </div>
  );
};

export default Comments;
