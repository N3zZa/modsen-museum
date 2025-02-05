import searchImg from 'assets/search.svg';
import { SearchFormValues } from 'components/Search/Search';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

import { InputBlock, InputInner, InputStyled, SearchImg } from './styled';

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
