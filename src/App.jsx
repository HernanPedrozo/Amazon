import Header from "./components/Header"; 
import Itemlistcontainer from './components/ItemListContainer';
import Counter from './components/Counter';

import './App.css';

function App() {

  const handleOnAdd = (quantity)  => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }
  return (
    <div className="App">
        <Header />
        <Itemlistcontainer greeting='Catalogo'/>
        <Counter stock={10} onAdd={handleOnAdd}/>|
    </div>
  );
}

export default App;
