
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CheckOut from './components/checkout/CheckOut';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
