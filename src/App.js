import "./App.css";
import About from "./Pages/About/About";
import { Route } from "react-router-dom";
import FirstPage from "./Pages/FirstPage/FirstPage";
import Destination from "./Pages/DestinationGPS/Destination";
import MatchedRouters from "./Pages/MatchedRoutes/MatchedRouters";
import AllRoutes from "./Pages/AllRoutes/AllRoutes";
import Choosebus from "./Pages/ChooseBus/Choosebus";
import SpecificBusInfo from "./Pages/SpecificBusInfo/SpecificBusInfo";
import SpecificBusInfo2 from "./Pages/SpecificBusInfo2/SpecificBusInfo2";
import Payment from "./Pages/Payment/Payment";
import ChoosePayment from "./Pages/ChoosePayment/ChoosedPayment";
import BookBus from "./Pages/BookBus/BookBus";
import OrderUberBus from "./Pages/OrderUberBus/OrderUberBus";
import Confirmation from "./Pages/Confirmation/Confitmation";
import TripDetails from "./Pages/TripDetails/TripDetails";

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
      <Route exact path="/choosepayment" component={ChoosePayment} />
      <Route exact path="/bookbus" component={BookBus} />
      <Route exact path="/orderuberbus" component={OrderUberBus} />
      <Route exact path="/confirmation" component={Confirmation} />
      <Route exact path="/tripdetails" component={TripDetails} />
    </div>
  );
}

export default App;
