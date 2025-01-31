import { useState } from 'react';
import { InputStyled, InputBlock, SearchImg, InputInner } from './styled';
import searchImg from '../../assets/search.svg';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { SearchFormValues } from '../Search/Search';

type InputSearchProps = {
  placeholder: string;
  register: UseFormRegister<SearchFormValues>;
  handleSubmit: UseFormHandleSubmit<SearchFormValues>;
  onSubmit: (data: SearchFormValues) => void;
};

const Input = ({
  handleSubmit,
  onSubmit,
  register,
  placeholder,
}: InputSearchProps) => {
  return (
    <InputBlock>
      <InputInner>
        <InputStyled
          type="text"
          placeholder={placeholder}
          {...register('query')}
        />
        <SearchImg
          onClick={handleSubmit(onSubmit)}
          src={searchImg}
          alt="search"
        />
      </InputInner>
    </InputBlock>
  );
};

export default Input;
