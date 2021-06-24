import './App.css';
import ClientListComponent from './components/ClientListComponent';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AddClientComponent from "./components/AddClientComponent";
import GetClientComponent from "./components/GetClientComponent";

function App() {
  return (
      <div>
          <Router>
                <HeaderComponent/>
                    <div className="container">
                        <Switch>
                            <Route path={ "/" } exact={ true } component={ ClientListComponent }></Route>
                            <Route path={ "/clients" }  exact={ true } component={ ClientListComponent }></Route>
                            <Route path={ "/clients/client/store/:id" } exact ={ true } component={ AddClientComponent }></Route>
                            <Route path={ "/clients/client/:id" } exact ={ true } component={ GetClientComponent }></Route>
                            <ClientListComponent/>
                        </Switch>
                    </div>
                <FooterComponent/>
          </Router>
      </div>
  );
}

export default App;
