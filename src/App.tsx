import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router';
import Home from 'pages/Home/Home';
import Favorites from 'pages/Favorites/Favorites';
import Footer from 'components/Footer/Footer';
import DetailInfo from 'pages/DetailInfo/DetailInfo';
import { FavoritesProvider } from 'context/FavoritesContext';
import { SortArtsProvider } from 'context/SortArtsContext';
import Header from 'components/Header/Header';

function App() {
  return (
    <FavoritesProvider>
      <SortArtsProvider>
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
      </SortArtsProvider>
    </FavoritesProvider>
  );
}

export default App;
