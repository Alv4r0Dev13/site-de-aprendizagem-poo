import { useState } from 'react';
import { ComponentInputI } from '../../utils/types/components';
import {
  CharCount,
  Container,
  ErrorMessage,
  Input,
  InputContainer,
  InputInfo,
  Label,
  ShowPasswordButton,
} from './styles';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';

const ComponentInput: React.FC<ComponentInputI> = ({
  label,
  error,
  errorMessage,
  name,
  type,
  onChange,
  maxLength,
  placeholder,
  showCharCount,
  ...props
}) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [inputType, setInputType] = useState(type);
  const [charCount, setCharCount] = useState(0);

  function toggleShowPassword() {
    if (inputType === 'password') setInputType('text');
    else setInputType('password');
    setPasswordShow(!passwordShow);
  }

  return (
    <Container>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <InputContainer className={error ? 'error' : ''}>
        <Input
          type={inputType}
          onChange={e => {
            onChange?.(e);
            if (maxLength) setCharCount(e.currentTarget.value.length);
          }}
          maxLength={maxLength}
          placeholder={
            inputType === 'password'
              ? placeholder?.replace(/\w/g, '•')
              : placeholder
          }
          {...props}
        />
        {type === 'password' && (
          <ShowPasswordButton onClick={toggleShowPassword}>
            {passwordShow ? <EyeInvisibleFilled /> : <EyeFilled />}
          </ShowPasswordButton>
        )}
      </InputContainer>
      <InputInfo>
        {error
          ? errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>
          : null}
        {showCharCount
          ? maxLength && (
              <CharCount>
                {charCount}/{maxLength}
              </CharCount>
            )
          : null}
      </InputInfo>
    </Container>
  );
};

export default ComponentInput;
