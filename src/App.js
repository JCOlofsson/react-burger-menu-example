import logo from './logo.svg'
import './App.sass'
import Header from './Header.js'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <div id="no1" style={{backgroundColor: 'pink', height: '100vh'}}>section 1</div>
        <div id="no2" style={{backgroundColor: 'blue', height: '100vh'}}>section 2</div>
        <div id="no3" style={{backgroundColor: 'green', height: '100vh'}}>section 3</div>
      </div>
    </div>
  );
}

export default App;
