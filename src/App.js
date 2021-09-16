import Home from "./pages/Home";
import FirstYear from "./pages/FirstYear";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

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
