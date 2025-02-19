import styled from 'styled-components';
import { InputLabelPropsI } from '../../utils/types/components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  &:focus-within label {
    cursor: default;
    top: 0;
  }
`;

export const Label = styled.label<InputLabelPropsI>`
  position: relative;
  margin-left: 10px;
  width: fit-content;
  top: ${({ $inputHasText }) => ($inputHasText ? 0 : 23)}px;
  transition: top 50ms ease-in;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -moz-user-drag: none;
`;

export const Required = styled.span`
  color: ${props => props.theme.colors.danger};
  font-size: ${props => props.theme.sizes.small};
`;

export const InputContainer = styled.label`
  cursor: text;
  display: flex;
  border-bottom: 2px solid ${props => props.theme.colors.placeholder};
  padding: 5px 10px;

  &:focus-within {
    border-color: ${props => props.theme.colors.primary1};
  }

  &.error {
    border-color: ${props => props.theme.colors.danger}
  }
`;

export const Input = styled.input`
  flex: 1;
  background: none;
  border: none;
  font-size: 15px;

  &::placeholder {
    color: transparent;
  }

  &:focus::placeholder {
    color: ${props => props.theme.colors.placeholder};
  }
`;

export const ShowPasswordButton = styled.div`
  cursor: pointer;
  display: flex;
  color: black;
  font-size: 18px;
  align-items: center;
  background: none;
  border: none;
`;

export const InputInfo = styled.div`
  font-size: 13px;
  padding: 2px 12px 0;
`;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.danger};
`;

export const CharCount = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-left: auto;
`;
