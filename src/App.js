
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Bvaccine from "./Component/Bvaccine";
import Home from "./Component/Home";
import Wvaccine from "./Component/Wvaccine";
import Hospital from "./Component/Hospital";
import Htips from "./Component/Htips";
import Contact from "./Component/Contact"
import Navbar from "./Component/Navbar/Navbar";
const App = () => {
 
  return (
    <Router>
    <Navbar></Navbar>
    <Switch>
      <Route path="/" component={Home} exact>
        <Home></Home>
      </Route>
      <Route path="/Bvaccine" component={Bvaccine} exact>
        <Bvaccine></Bvaccine>
      </Route>
      <Route path="/Wvaccine" component={Wvaccine} exact>
        <Wvaccine></Wvaccine>
      </Route>
      <Route path="/Hospital" component={Hospital} exact>
        <Hospital></Hospital>
      </Route>
      <Route path="/Htips" component={Htips} exact>
        <Htips></Htips>
      </Route>
      <Route path="/Contact" component={Contact} exact>
        <Contact></Contact>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
