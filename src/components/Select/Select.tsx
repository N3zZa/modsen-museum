import React, { useContext, useState } from 'react';
import { SelectArea, SelectBlock, SelectItem, SelectOptions } from './styled';
import arrow from '../../assets/arrowBot.svg';
import { SortArtsContext } from '../../context/SortArtsContext';
import { OptionModel } from '../../constants/models/OptionModel';
import { options } from '../../constants/options';

export const Select: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);
  const context = useContext(SortArtsContext);

  if (!context) {
    throw new Error('SortArtsContext используется вне SortArtsProvider');
  }

  const { selectedOption, setSelectedOption } = context;

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
          {options.map((option) => (
            <SelectItem
              onClick={() => {
                setSelectedOption(option);
                setShowOptions(false);
              }}
              key={option.value}>
              <span>{option.label}</span>
            </SelectItem>
          ))}
        </SelectOptions>
      )}
    </SelectBlock>
  );
};
