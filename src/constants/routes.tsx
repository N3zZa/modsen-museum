import { lazy } from 'react';
import { RouteObject } from 'react-router';

// Ленивая загрузка страниц (если нужно)
const HomePage = lazy(() => import('pages/Home/Home'));
const FavoritesPage = lazy(() => import('pages/Favorites/Favorites'));
const DetailInfoPage = lazy(() => import('pages/DetailInfo/DetailInfo'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

type AppRoute = RouteObject & {
  path: string;
  element: React.ReactNode;
};

export const routesPaths = {
  home: '/',
  favorites: '/favorites',
  card: '/card/',
};

const routes: AppRoute[] = [
  { path: routesPaths.home, element: <HomePage /> },
  { path: routesPaths.favorites, element: <FavoritesPage /> },
  { path: `${routesPaths.card}:cardId`, element: <DetailInfoPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
