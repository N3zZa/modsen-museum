import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SortArtsContext } from 'context/SortArtsContext';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import Search from './Search'; // Путь к вашему компоненту

const mockSetSortedArts = jest.fn();
const mockSetSelectedOption = jest.fn();

const renderSearchComponent = () => {
  render(
    <ThemeProvider theme={theme}>
      <SortArtsContext.Provider
        value={{
          sortedArts: [],
          setSortedArts: mockSetSortedArts,
          selectedOption: { label: 'Date', value: 'date' },
          setSelectedOption: mockSetSelectedOption,
        }}>
        <Search />
      </SortArtsContext.Provider>
    </ThemeProvider>
  );
};

describe('Search component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Должен отображать ошибку при введении менее 2 символов', async () => {
    renderSearchComponent();

    const inputElement = screen.getByPlaceholderText(
      /Search Art, Artist, Work.../i
    );

    // Вводим менее 2 символов
    fireEvent.change(inputElement, { target: { value: 'A' } });

    // Проверяем, что ошибка отображается
    await waitFor(() => {
      expect(
        screen.getByText('Enter at least 2 characters')
      ).toBeInTheDocument();
    });
  });

  it('Должен отображать ошибку при введении более 50 символов', async () => {
    renderSearchComponent();

    const inputElement = screen.getByPlaceholderText(
      /Search Art, Artist, Work.../i
    );

    // Вводим более 50 символов
    fireEvent.change(inputElement, { target: { value: 'A'.repeat(51) } });

    // Проверяем, что ошибка отображается
    await waitFor(() => {
      expect(screen.getByText('Maximum of 50 characters')).toBeInTheDocument();
    });
  });

  it('Должен корректно обновлять список картинок после успешного запроса', async () => {
    renderSearchComponent();

    const inputElement = screen.getByPlaceholderText(
      /Search Art, Artist, Work.../i
    );

    // Мокаем успешный ответ от fetch с корректной структурой данных
    const mockResponse = {
      data: [
        {
          id: 80072,
          title: 'Ink Landscape',
          artist: 'Kano Motonobu',
          artist_display: 'Kano Motonobu\nJapanese, 1476-1559',
          credit_line: 'Kate S. Buckingham Endowment',
          date_display: 'Muromachi period, early 16th century',
          dimensions: '41.9 × 74.4 cm (16 1/2 × 29 5/16 in.)',
          image_urlMin:
            'https://www.artic.edu/iiif/2/180dae61-d73b-4834-3492-6cb20582ef09/full/80,80/0/default.jpg',
          image_url:
            'https://www.artic.edu/iiif/2/180dae61-d73b-4834-3492-6cb20582ef09/full/843,/0/default.jpg',
          image_id: '180dae61-d73b-4834-3492-6cb20582ef09',
          artist_title: 'Kano Motonobu',
          place_of_origin: 'Japan',
          _score: 37.766506,
        },
      ],
    };

    // Мокаем fetch с объектом Response, который имеет правильные методы
    jest.spyOn(global, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify(mockResponse), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    );

    fireEvent.change(inputElement, { target: { value: 'Kano Motonobu' } });

    // Ждем, пока отобразится результат
    await waitFor(() => expect(mockSetSortedArts).toHaveBeenCalledTimes(1));

    // Обновляем проверку вызова mockSetSortedArts с правильными данными (без лишних полей)
    expect(mockSetSortedArts).toHaveBeenCalledWith([
      {
        id: 80072,
        title: 'Ink Landscape',
        artist: 'Kano Motonobu',
        artist_display: 'Kano Motonobu\nJapanese, 1476-1559',
        credit_line: 'Kate S. Buckingham Endowment',
        date_display: 'Muromachi period, early 16th century',
        dimensions: '41.9 × 74.4 cm (16 1/2 × 29 5/16 in.)',
        image_urlMin:
          'https://www.artic.edu/iiif/2/180dae61-d73b-4834-3492-6cb20582ef09/full/80,80/0/default.jpg',
        image_url:
          'https://www.artic.edu/iiif/2/180dae61-d73b-4834-3492-6cb20582ef09/full/843,/0/default.jpg',
        place_of_origin: 'Japan',
      },
    ]);

    // Проверяем наличие мини-карт
    expect(screen.getByRole('minicardslist')).toBeInTheDocument();
  });

  it('Должен отображать ошибку, если запрос завершился с ошибкой', async () => {
    renderSearchComponent();

    const inputElement = screen.getByPlaceholderText(
      /Search Art, Artist, Work.../i
    );

    // Мокаем ошибку загрузки
    jest
      .spyOn(global, 'fetch')
      .mockRejectedValueOnce(new Error('Network Error'));

    fireEvent.change(inputElement, { target: { value: 'Van Gogh' } });

    // Проверяем, что ошибка отобразилась
    await waitFor(() => {
      expect(
        screen.getByText('Error when uploading an image')
      ).toBeInTheDocument();
    });
  });
});
