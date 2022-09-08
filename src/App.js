import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CoinApp from './components/coin';
import CoinDetails from './components/details';
import CoinNav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <CoinNav />
      <Routes>
        <Route path="/" element={<CoinApp />} />
        <Route path="/details" element={<CoinDetails />}>
          <Route path=":id" element={<CoinDetails />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
