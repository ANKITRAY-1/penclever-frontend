import "./App.css";
import { Topnav } from "./components/Topnav";
import { Viewone } from "./components/View1";
import { Footer } from "./components/Footer";
import { Arcticle } from "./components/Arcticle";
import { Loder } from "./components/Loder";
import { Userprofile } from "./components/Userprofile";
import Combine from "./components/auth/Combine";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Script.js";
import { Switch, Route } from "react-router";
/* import Editor from "./components/Editor"; */
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Loder />
        <Topnav />
        <Viewone />
        <Footer />
      </Route>

      <Route exact path="/scince">
        <Loder />
        <Topnav />
        <Footer />
      </Route>

      <Route path="/indianspacestation">
        <Loder />
        <Topnav />
        <Arcticle />
        <Footer />
      </Route>
      <Route path="/signin">
        <Loder />
        <Combine />
      </Route>
      <Route path="/userprofile">
        <Loder />
        {/* <Topnav /> */}
        <Userprofile />
      </Route>
      <Route path="/editor">
        <Loder />
        <Topnav />
        {/*<Editor />*/}
        <Footer />
      </Route>
    </Switch>
  );
}

export default App;
