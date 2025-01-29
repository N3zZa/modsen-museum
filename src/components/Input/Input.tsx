import { useState } from 'react';
import { InputStyled, InputBlock, SearchImg, InputInner } from './styled';
import searchImg from '../../assets/search.svg';

type Props = {
  placeholder: string;
};

const Input = ({ ...props }: Props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputBlock>
      <InputInner>
        <InputStyled
          type="text"
          {...props}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SearchImg src={searchImg} alt="search" />
      </InputInner>
    </InputBlock>
  );
};

export default Input;
