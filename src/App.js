import logo from './logo.svg';
import './App.css';
const cards = require('./config/config.json')

function App() {

  function getAllCards() {
    let tempArray = [];
    for (const card in cards) {
      tempArray.push(
        <div key={cards[card].name} className="cardBox flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={cards[card].image_path} />
            </div>
            <div className="flip-card-back">
              <p>{cards[card].description}</p>
            </div>
          </div>
        </div>
      );
    }
    return tempArray;
  }

  function showCard() {
    const randoNumber = Math.floor(Math.random() * Object.keys(cards).length);

    const cardElements = document.getElementsByClassName('flip-card');

    for (const card in cards) {
      cardElements[card].classList.remove('show')
    }
    
    cardElements[randoNumber].classList.add('show');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>ur mom</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button id="rando" onClick={showCard}>Click me</button>
      <div id="cardContainer">
        {
          getAllCards()
        }
      </div>
    </div>
  );
}

export default App;
