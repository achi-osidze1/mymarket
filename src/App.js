import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Auth from "./components/auth/Auth"
import Products from "./components/products/Products";
import Error from "./components/error/Error"
 
function App() {

  return (  
    <><BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path="*" component={Error}/>
      </Switch>
    </BrowserRouter><>
    
    <style>{'body { background-color: #f1f3f6; }'}</style></></>
);
}



export default App;