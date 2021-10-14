import "./App.css";
import About from "./About/About";
import { Route } from "react-router-dom";
import FirstPage from "./FirstPage/FirstPage";
import Destination from "./DestinationGPS/Destination";
import MatchedRouters from "./MatchedRoutes/MatchedRouters";
import AllRoutes from "./AllRoutes/AllRoutes";
import Choosebus from "./ChooseBus/Choosebus";
import SpecificBusInfo from "./SpecificBusInfo/SpecificBusInfo";
import SpecificBusInfo2 from "./SpecificBusInfo2/SpecificBusInfo2";
import Payment from "./Pages/Payment/Payment";

function App() {
  return (
    <div>
      <Route exact path="/" component={FirstPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/destination" component={Destination} />
      <Route exact path="/route" component={MatchedRouters} />
      <Route exact path="/allroutes" component={AllRoutes} />
      <Route exact path="/choosebus" component={Choosebus} />
      <Route exact path="/businfo1" component={SpecificBusInfo} />
      <Route exact path="/businfo2" component={SpecificBusInfo2} />
      <Route exact path="/payment" component={Payment} />
    </div>
  );
}

export default App;
