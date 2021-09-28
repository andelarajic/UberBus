import "./App.css";
import About from "./About/About";
import AllRoutes from "./AllRoutes/AllRoutes";
import { Route } from "react-router-dom";
import FirstPage from "./FirstPage/FirstPage";

function App() {
  return (
    <div>
      <Route exact path="/" component={FirstPage} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;
