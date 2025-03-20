import styled from 'styled-components';

export const Container = styled.div``;

export const Text = styled.textarea`
  flex: 1;
  font-size: 15px;
  color: ${props => props.theme.colors.textMain};
  background-color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.placeholder};
  border-radius: 10px;
  padding: 5px 10px;
  resize: none;
  width: 100%;
  height: 105px;

  &::placeholder {
    color: ${props => props.theme.colors.placeholder};
  }

  &:focus-within {
    border-color: ${props => props.theme.colors.primary1};
  }
`;

export const Label = styled.label``;

export const CharCount = styled.p`
  color: ${props => props.theme.colors.textLight};
  text-align: right;
  font-size: 13px;
  padding: 0 10px;
`;
