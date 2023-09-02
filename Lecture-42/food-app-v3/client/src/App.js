import './App.css';
import FoodList from './components/FoodList/FoodList';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import MyCart from './pages/MyCart';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<FoodList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<MyCart />} />
      </Routes>
    </Layout>)
  ;
}

export default App;
