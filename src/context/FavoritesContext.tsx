import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { Artwork } from 'constants/models/artModel';

interface FavoritesContextType {
  favorites: any[];
  toggleFavorite: (art: Artwork) => void;
  isFavorite: (art: number) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

const FAVORITES_KEY = 'favoriteArtworks';

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Artwork[]>(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (art: Artwork) => {
    setFavorites((prev) =>
      prev.find((artwork) => artwork.id === art.id)
        ? prev.filter((artwork) => artwork.id !== art.id)
        : [...prev, art]
    );
  };

  const isFavorite = (artId: number) => {
    if (favorites.find((artwork) => artwork.id === artId)) return true;
    return false;
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
