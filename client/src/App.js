import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";

function App() {
  return (
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/home" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
