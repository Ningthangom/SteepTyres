
import './App.css';
import Home from './pages/Home'
import Header from './pages/Header'
import MinorRepair from './pages/repair/MinorRepair'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <MinorRepair/>
    </div>
  );
}

export default App;
