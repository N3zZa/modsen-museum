import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import routes from 'constants/routes';
import { FavoritesProvider } from 'context/FavoritesContext';
import { SortArtsProvider } from 'context/SortArtsContext';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

function App() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
