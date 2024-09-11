// can get object values in the braces {} and also comments {/* */} in
// you can use style ={{}} in the tags when your style depend upon javacript variable
// we cannot access the src by giving source in the attribute we have to import it and access the component type value
// {} let you 'escape back' into javascript so that you can embed some variable from your code and display it to the user
// we can simple use objects, condition as we see writting regular javascript
// calling the function is without paranthesis, React will call your event when it's clicked
// create a variable name[count] or setvalue by second parameter by assigning state //  type [something, setSomething] = useState(0); chng value by // setSomething()
// something will be 0 because you passed 0 to useState(),
// function starting with use are called Hooks you can call only at the top of the components
// create and use context
// const ThemeContext = createContext(null); // variable name is ThemeContext and asssigning null
// <ThemeContext.Provider value = "drk"></ThemeContext.Provider> assigning a context to new value by provider
// const theme = useContext(ThemeContext) // theme have a drk value
// props passed to the class component are available as  // this.props
// state of class component is available as this.state, state field must be an object, if you chng the state, call setState with the new state
// constructors runs before your class component mounts
import Image from "../assets/usman.png";
import { useState } from "react"; // calling Hook
import { createContext, useContext } from "react";

export default function myApp() {
  
  let flag;
  const user = {
    name: "Usman Ur Rehman",
    email: "usman1urrehman2@gmail.com",
    age: 23,
    imageSize: 140,
  };
  if (user.name == "usman") {
    flag = <>(Wrong Name)</>;
  } else {
    flag = <p></p>;
  }
  const [name, setName] = useState([
    { fname: "usman", isAlive: false, id: 1 },
    { fname: "ur", isAlive: false, id: 2 },
    { fname: "rehman", isAlive: true, id: 3 },
  ]);
  const [count, setCount] = useState(0);
  function MyButton() {
    setCount(count + 1);
  }

  return (
    <>
      {/* <DisplayName /> 
      we can call a function name by putting function name in tag, how many time you call it creates or update separately 
      and pass information by {}
      */}
      <div className="container">
        <p className="title">
          <h1>
            {user.name}
            {flag} {/* simle if condtion */}
            {user.age == 24 ? <>Wrong Age</> : <></>}{" "}
            {/* ? condtion operator */}
            {user.age == 24 && <>{name[0].fname}</>} {/* ? condtion operator */}
            {user.imageSize == 160 && <>Wrong image address</>}{" "}
            {/* &&  operator when you don't need the else branch */}
          </h1>
          <img
            src={Image}
            alt={"photo of " + user.name}
            height={user.imageSize}
            width={user.imageSize}
          ></img>
        </p>
        <h2 className="chngColor">Welcome to My app</h2>
        <button onClick={MyButton}>Clicked {count} times</button>
      </div>
    </>
  );
}
function DisplayName() {
  return <h1>Hello Usman!</h1>;
}
