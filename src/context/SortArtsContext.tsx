import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { Artwork } from '../constants/models/artModel';
import { OptionModel } from '../constants/models/OptionModel';
import { options } from '../constants/options';

interface SortArtsContextType {
  sortedArts: Artwork[];
  setSortedArts: (art: Artwork[]) => void;
  selectedOption: OptionModel;
  setSelectedOption: (option: OptionModel) => void;
}

const extractYear = (text: string): number | null => {
  // year(example: 2000)
  const yearMatch = text.match(/\b\d{4}\b/);
  if (!!yearMatch) return parseInt(yearMatch[0], 10);

  // century(example: 17th century)
  const centuryMatch = text.match(/(\d{1,2})\w*\s/);
  if (centuryMatch) {
    const century = parseInt(centuryMatch[1], 10);
    return (century - 1) * 100 + 50; // example: from 17th to 1650(average)
  }

  return null; // if nothing
};

export const SortArtsContext = createContext<SortArtsContextType | undefined>(
  undefined
);

export const SortArtsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sortedArts, setSortedArts] = useState<Artwork[]>([]);
  const [selectedOption, setSelectedOption] = useState<OptionModel>(options[0]);

  const changeArts = (arts: Artwork[]) => {
    switch (selectedOption.value) {
      case 'date':
        setSortedArts(
          [...arts].sort((a, b) => {
            const yearA = extractYear(a.date_display) ?? 0;
            const yearB = extractYear(b.date_display) ?? 0;
            return yearA - yearB;
          })
        );
        break;
      case 'title':
        setSortedArts([...arts].sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case 'artist':
        setSortedArts(
          [...arts].sort((a, b) => a.artist.localeCompare(b.artist))
        );
        break;
      default:
        setSortedArts([...arts]);
        break;
    }
  };

  useEffect(() => {
    changeArts(sortedArts);
  }, [selectedOption.value]);

  return (
    <SortArtsContext.Provider
      value={{ sortedArts, setSortedArts, setSelectedOption, selectedOption }}>
      {children}
    </SortArtsContext.Provider>
  );
};
