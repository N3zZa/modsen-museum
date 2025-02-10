import { fireEvent, render, screen } from '@testing-library/react';
import MiniCard from 'components/MiniCard/MiniCard';
import { FavoritesContext } from 'context/FavoritesContext';
import { act } from 'react';
import { BrowserRouter as Router } from 'react-router';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';


// Мокаем контекст для тестов
const mockToggleFavorite = jest.fn();
const mockIsFavorite = jest.fn();
const mockFavorites = [
  {
    title: 'Мона Лиза',
    artist: 'Леонардо да Винчи',
    image_url: 'image_url',
    image_urlMin: 'image_urlMin',
    id: 1,
    artist_display: 'Display',
    credit_line: 'Credit Line',
    date_display: 'Date',
    dimensions: 'Dimensions',
    place_of_origin: 'Place',
  },
]; // Пример массива избранного

const mockContext = {
  favorites: mockFavorites,
  toggleFavorite: mockToggleFavorite,
  isFavorite: mockIsFavorite,
};

const mockProps = {
  title: 'Мона Лиза',
  artist: 'Леонардо да Винчи',
  image_url: 'image_url',
  image_urlMin: 'image_urlMin',
  id: 1,
  artist_display: 'Display',
  credit_line: 'Credit Line',
  date_display: 'Date',
  dimensions: 'Dimensions',
  place_of_origin: 'Place',
};

describe('MiniCard', () => {
  beforeEach(() => {
    mockToggleFavorite.mockClear();
    mockIsFavorite.mockClear();
  });

  test('Должен корректно рендерить компонент', async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <FavoritesContext.Provider value={mockContext}>
              <MiniCard {...mockProps} />
            </FavoritesContext.Provider>
          </Router>
        </ThemeProvider>
      );
    });

    // Проверяем наличие элементов
    expect(screen.getByText('Мона Лиза')).toBeInTheDocument();
    expect(screen.getByText('Леонардо да В...')).toBeInTheDocument();
  });

  test('Должен вызывать toggleFavorite при нажатии на кнопку избранного', async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <Router>
            <FavoritesContext.Provider value={mockContext}>
              <MiniCard {...mockProps} />
            </FavoritesContext.Provider>
          </Router>
        </ThemeProvider>
      );
    });

    const favoriteButton = screen.getByRole('button'); // Найдем кнопку
    fireEvent.click(favoriteButton); // Кликаем по кнопке

    expect(mockToggleFavorite).toHaveBeenCalledWith({
      title: 'Мона Лиза',
      artist: 'Леонардо да Винчи',
      image_url: 'image_url',
      image_urlMin: 'image_urlMin',
      id: 1,
      artist_display: 'Display',
      credit_line: 'Credit Line',
      date_display: 'Date',
      dimensions: 'Dimensions',
      place_of_origin: 'Place',
    });
  });

  test('Должен показывать иконку с заливкой, если элемент в избранном', () => {
    mockIsFavorite.mockReturnValue(true); // Мокаем, что элемент в избранном

    render(
      <ThemeProvider theme={theme}>
        <Router>
          <FavoritesContext.Provider value={mockContext}>
            <MiniCard {...mockProps} />
          </FavoritesContext.Provider>
        </Router>
      </ThemeProvider>
    );

    const favoriteButton = screen.getByRole('button'); // Кнопка избранного
    const svg = favoriteButton.querySelector('svg'); // Ищем svg в кнопке

    // Проверяем, что цвет заливки правильный (золотой)
    expect(svg).toHaveAttribute('fill', '#E0A449');
  });

  test('Должен показывать иконку без заливки, если элемент не в избранном', () => {
    mockIsFavorite.mockReturnValue(false); // Мокаем, что элемент не в избранном

    render(
      <ThemeProvider theme={theme}>
        <Router>
          <FavoritesContext.Provider value={mockContext}>
            <MiniCard {...mockProps} />
          </FavoritesContext.Provider>
        </Router>
      </ThemeProvider>
    );

    const favoriteButton = screen.getByRole('button');
    const svg = favoriteButton.querySelector('svg');

    // Проверяем, что цвет заливки отсутствует
    expect(svg).toHaveAttribute('fill', 'none');
  });
});
