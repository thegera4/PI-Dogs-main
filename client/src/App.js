import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import DogDetail from "./components/DogDetail/DogDetail";
import CreateDog from "./components/CreateDog/CreateDog";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/dog/:id" component={DogDetail}></Route>
        <Route path="/dog" component={CreateDog}></Route>
        <Route path="*" component={() => (<NotFound errMsg='Invalid Route!'/>)}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
