import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Person from './components/Person';

function App() {
  return <div>
    <Navbar/>
    <Person/>
    <Card name="Macbook Air" price="1000" desc="Macbook Air with M1 Chip and 256 SSD."/>
    <Card name="Macbook Pro" price="2000" desc="Macbook Air with M1 Chip and 356 SSD."/>
    <Card name="Macbook Mini" price="3000" desc="Macbook Air with M1 Chip and 456 SSD."/>
    <Card name="Macbook Air" price="4000" desc="Macbook Air with M1 Chip and 556 SSD."/>
    <Card name="Macbook Air" price="5000" desc="Macbook Air with M1 Chip and 656 SSD."/>
  </div>
}

export default App;
