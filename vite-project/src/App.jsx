// React component name must always start with a capital letter
// JSX is stricter than HTML -- we have to close <br /> or <> </>
// you specify css selector with className same way as HTML-class 
// import Header from "./component/Header";
import Comments from "./component/Comments";
import Mypage from "./component/Mypage";
import ReactL from "./component/ReactL"
import "./App.css"

function App() {
  return (
    <div>
      {/* <Header /> */}
      <ReactL />
      <Comments />
      <Mypage/>
    </div>
  );
}

export default App;
