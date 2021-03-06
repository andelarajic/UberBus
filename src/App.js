import "./App.css";
import About from "./Pages/About/About";
import { Route } from "react-router-dom";
import FirstPage from "./Pages/FirstPage/FirstPage";
import Destination from "./Pages/DestinationGPS/Destination";
import MatchedRouters from "./Pages/MatchedRoutes/MatchedRouters";
import AllRoutes from "./Pages/AllRoutes/AllRoutes";
import Choosebus from "./Pages/ChooseBus/Choosebus";
import SpecificBusInfo from "./Pages/SpecificBusInfo/SpecificBusInfo";
import Payment from "./Pages/Payment/Payment";
import ChoosePayment from "./Pages/ChoosePayment/ChoosedPayment";
import BookBus from "./Pages/BookBus/BookBus";
import OrderUberBus from "./Pages/OrderUberBus/OrderUberBus";
import Confirmation from "./Pages/Confirmation/Confitmation";
import TripDetails from "./Pages/TripDetails/TripDetails";
import ArrivalRating from "./Pages/ArrivalRating/ArrivalRating";
import { useLoadScript } from "@react-google-maps/api";
import "./Style/Global.css"

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyATwgpzSq0TU95Mcj8HipmTNUxkwLUEId8" // Add your API key
  });

  return (
    <>
      {isLoaded 
      ?
      <div>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/destination" component={Destination} />
        <Route exact path="/route" component={MatchedRouters} />
        <Route exact path="/allroutes" component={AllRoutes} />
        <Route exact path="/choosebus" component={Choosebus} />
        <Route exact path="/businfo" component={SpecificBusInfo} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/choosepayment" component={ChoosePayment} />
        <Route exact path="/bookbus" component={BookBus} />
        <Route exact path="/orderuberbus" component={OrderUberBus} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/tripdetails" component={TripDetails} />
        <Route exact path="/arrivalrating" component={ArrivalRating} />
      </div>
      :
      <div>
      </div>
    }
    </>
  );
}

export default App;
