import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Itemlistcontainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Header />
        <Itemlistcontainer greeting='Catalogo'/>
    </div>
  );
}

export default App;
