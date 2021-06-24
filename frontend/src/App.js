import './App.css';
import ClientListComponent from './components/ClientListComponent';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AddClientComponent from "./components/AddClientComponent";

function App() {
  return (
      <div>
          <Router>
                <HeaderComponent/>
                    <div className="container">
                        <Switch>
                            <Route path={ "/" } exact={ true } component={ ClientListComponent }></Route>
                            <Route path={ "/clients" }  exact={ true } component={ ClientListComponent }></Route>
                            <Route path={ "/clients/client" } component={ AddClientComponent }></Route>
                            <ClientListComponent/>
                        </Switch>
                    </div>
                <FooterComponent/>
          </Router>
      </div>
  );
}

export default App;
