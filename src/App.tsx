import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import DetailInfo from './pages/DetailInfo/DetailInfo';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Navigate to={'/'} />} />
            <Route path="/card/:cardId" element={<DetailInfo />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </FavoritesProvider>
  );
}

export default App;
