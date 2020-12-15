import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/catalog/catalog";
import Home from "./components/home/home";
import About from "./components/about/about";
import Cart from "./components/cart/cart";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // to import from node_modules, no slash in beginning
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/catalog" component={Catalog}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/cart" exact component={Cart}></Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
