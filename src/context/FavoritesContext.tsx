import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Artwork } from 'types/artModel';
import { LocalStorageService } from 'utils/localStorage';

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
  const [favorites, setFavorites] = useState<string[]>(
    () => LocalStorageService.getItem<string[]>(FAVORITES_KEY) || []
  );

  useEffect(() => {
    LocalStorageService.setItem(FAVORITES_KEY, favorites);
  }, [favorites]);

  const toggleFavorite = (art: Artwork) => {
    setFavorites((prev) =>
      prev.find((artworkId) => artworkId === art.id.toString())
        ? prev.filter((artworkId) => artworkId !== art.id.toString())
        : [...prev, art.id.toString()]
    );
  };

  const isFavorite = (artId: number) => {
    if (favorites.find((artworkId) => artworkId === artId.toString()))
      return true;
    return false;
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
