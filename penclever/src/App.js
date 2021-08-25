import "./App.css";
import { Topnav } from "./components/Topnav";
import { Viewone } from "./components/View1";
import "bootstrap/dist/css/bootstrap.min.css";
import { Combine } from "./components/auth/Combine.js";

function App() {
  return (
    <div>
      <Topnav />
      <Viewone />
      <Combine />
    </div>
  );
}

export default App;
