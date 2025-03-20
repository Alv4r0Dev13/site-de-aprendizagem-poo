import styled, { css } from 'styled-components';
import { TextAreaPropsI } from '../../utils/types/components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  width: fit-content;
  height: 105px;
`;

export const Text = styled.textarea<TextAreaPropsI>`
  flex: 1;
  font-size: 15px;
  color: ${props => props.theme.colors.textMain};
  background-color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.placeholder};
  border-radius: ${props => (props.$hasLabel ? '0' : '10px')} 10px 10px 10px;
  padding: 5px 10px;
  resize: none;
  width: 500px;

  &::placeholder {
    color: ${props => props.theme.colors.placeholder};
  }

  &:focus-within {
    border-color: ${props => props.theme.colors.primary1};
  }
`;

export const Label = styled.label`
  color: ${props => props.theme.colors.textButton};
  background-color: ${props => props.theme.colors.placeholder};
  border-radius: 5px 5px 0 0;
  padding: 2px 8px;

  &:has(+ textarea:focus-within) {
    background-color: ${props => props.theme.colors.primary1};
  }
`;

export const CharCount = styled.p`
  color: ${props => props.theme.colors.textLight};
  text-align: right;
  font-size: 13px;
  padding: 0 10px;
`;
