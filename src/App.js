
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Bvaccine from "./Component/Bvaccine";
import Home from "./Component/Home";
import Wvaccine from "./Component/Wvaccine";
import Hospital from "./Component/Hospital";
import Htips from "./Component/Htips";
import Contact from "./Component/Contact"
import Navbar from "./Component/Navbar/Navbar";
import Login from "./Component/Login";
const App = () => {
 
  return (
    <Router>
    
    <Switch>
      <Route path='/' component={Login} exact><Login/> </Route>
      <Route path="/home" component={Home} exact>
        <Navbar></Navbar>
        <Home></Home>
      </Route>
      <Route path="/Bvaccine" component={Bvaccine} exact>
        <Navbar></Navbar>
        <Bvaccine></Bvaccine>
      </Route>
      <Route path="/Wvaccine" component={Wvaccine} exact>
        <Navbar></Navbar>
        <Wvaccine></Wvaccine>
      </Route>
      <Route path="/Hospital" component={Hospital} exact>
        <Navbar></Navbar>
        <Hospital></Hospital>
      </Route>
      <Route path="/Htips" component={Htips} exact>
        <Navbar></Navbar>
        <Htips></Htips>
      </Route>
      <Route path="/Contact" component={Contact} exact>
        <Navbar></Navbar>
        <Contact></Contact>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
