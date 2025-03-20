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
  Required,
  ShowPasswordButton,
} from './styles';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';

const ComponentInput: React.FC<ComponentInputI> = ({
  label,
  required,
  error,
  errorMessage,
  name,
  type,
  onChange,
  maxLength,
  placeholder,
  showCharCount,
  value,
  ...props
}) => {
  const [newValue, setNewValue] = useState(value);
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
      {label && (
        <Label htmlFor={props.id} $inputHasText={!!newValue}>
          {label}{' '}
          {required ? <Required title={'Campo obrigatório'}>*</Required> : null}
        </Label>
      )}
      <InputContainer className={error ? 'error' : ''}>
        <Input
          type={inputType}
          value={newValue}
          onChange={e => {
            onChange?.(e);
            setNewValue(e.currentTarget.value);
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
