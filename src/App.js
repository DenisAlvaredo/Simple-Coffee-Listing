import './App.css';
import CoffeeList from './components/CoffeeList';

function App() {
  return (
    <div className="App">
      <div id='data-container'>
        <div id='header'>
          <h1 id='title'>Our Collection</h1>
          <p id='quote'>
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, 
            expertly roasted in small batches and shipped fresh weekly.
          </p>
        </div>
        <CoffeeList />
      </div>
    </div>
  );
}

export default App;
