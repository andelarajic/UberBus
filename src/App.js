import "./App.css";
import About from "./About/About"
import { Route } from "react-router-dom";
import FirstPage from "./FirstPage/FirstPage";
import Destination from "./DestinationGPS/Destination";

function App() {
  return (
    <div>
      <Route exact path="/" component={FirstPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/destination" component={Destination} />
    </div>
  );
}

export default App;
