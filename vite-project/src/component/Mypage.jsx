// can get object values in the braces {} and also comments {/* */} in
// you can use style ={{}} in the tags when your style depend upon javacript variable
// we cannot access the src by giving source in the attribute we have to import it and access the component type value
// {} let you 'escape back' into javascript so that you can embed some variable from your code and display it to the user
// we can simple use objects, condition as we see writting regular javascript
import Image from "../assets/usman.png";
function MyButton() {
  return <button>I'am a Button</button>;
}
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

export default function myApp() {
  return (
    <>
      <div className="container">
        <p className="title">
          <h1>
            {user.name}
             {flag} {/* simle if condtion */} 
            {user.age == 24 ? <>Wrong Age</> : <></>} {/* ? condtion operator */}
            {user.imageSize == 160 && <>Wrong image address</>} {/* &&  operator when you don't need the else branch */}
          </h1>
          <img
            src={Image}
            alt={"photo of " + user.name}
            height={user.imageSize}
            width={user.imageSize}
          ></img>
        </p>
        <h2 className="chngColor">Welcome to My app</h2>
        <MyButton />
      </div>
    </>
  );
}
