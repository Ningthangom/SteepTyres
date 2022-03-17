
import './App.css';
import Home from './pages/Home'
import Header from './pages/Header'
import MinorRepair from './pages/repair/MinorRepair'
import Footer from './pages/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <MinorRepair/>
      <Footer/>
    </div>
  );
}

export default App;
