import React, { useContext, useState } from 'react';
import { OptionModel } from 'types/OptionModel';

import arrow from '../../assets/arrowBot.svg';
import { options } from '../../constants/options';
import { SortArtsContext } from '../../context/SortArtsContext';
import { SelectArea, SelectBlock, SelectItem, SelectOptions } from './styled';

export const Select: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);
  const context = useContext(SortArtsContext);

  if (!context) {
    throw new Error('SortArtsContext используется вне SortArtsProvider');
  }

  const { selectedOption, setSelectedOption } = context;

  const handleClickOption = (option: OptionModel) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <SelectBlock>
      <SelectArea onClick={() => setShowOptions(!showOptions)}>
        <p>
          Sort by:
          <span> {selectedOption.label}</span>
        </p>
        <img
          style={{ transform: `${showOptions ? 'rotate(180deg)' : ''}` }}
          width={25}
          src={arrow}
          alt="\/"
        />
      </SelectArea>
      {showOptions && (
        <SelectOptions>
          {options.map((option: OptionModel) => (
            <SelectItem
              onClick={() => handleClickOption(option)}
              key={option.value}>
              <span>{option.label}</span>
            </SelectItem>
          ))}
        </SelectOptions>
      )}
    </SelectBlock>
  );
};
