import './App.css';
import Banner from './components/Banner/Banner';
import FoodList from './components/FoodList/FoodList';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <FoodList/>
    </div>
  );
}

export default App;
