import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import routes from 'constants/routes';
import { FavoritesProvider } from 'context/FavoritesContext';
import { SortArtsProvider } from 'context/SortArtsContext';
import DetailInfo from 'pages/DetailInfo/DetailInfo';
import Favorites from 'pages/Favorites/Favorites';
import Home from 'pages/Home/Home';
import { Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router';

function App() {
  return (
    <FavoritesProvider>
      <SortArtsProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <div className="wrapper">
              <Routes>
                {routes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
              </Routes>
            </div>
            <Footer />
          </Suspense>
        </Router>
      </SortArtsProvider>
    </FavoritesProvider>
  );
}

export default App;
