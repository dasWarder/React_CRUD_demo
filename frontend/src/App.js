import './App.css';
import ClientListComponent from './components/ClientListComponent';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
            <div className="container">
                <div className={ "row" }>
                    <HeaderComponent/>
                </div>
                <div className={ "row" }>
                    <ClientListComponent/>
                </div>
                <div className={ "row" }>
                    <FooterComponent/>
                </div>
            </div>
  );
}

export default App;
