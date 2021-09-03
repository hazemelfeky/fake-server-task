import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import New from "./components/New";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new" exact component={New} />
          <Route path="/empolyee/:id" exact component={Details} />
          <Route path="/update/:id" exact component={Update} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
