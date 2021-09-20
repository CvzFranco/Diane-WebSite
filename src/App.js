import Home from "./pages/Home";
import FirstYear from "./pages/Page1";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Naissance from "./pages/Naissance";
import test from "./pages/test";
import page3 from "./pages/page3";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
