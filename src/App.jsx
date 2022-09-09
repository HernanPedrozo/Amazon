import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Itemlistcontainer from './components/ItemListContainer';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
        <Header />
        <Itemlistcontainer greeting='Catalogo'/>
        <Counter/>
    </div>
  );
}

export default App;
