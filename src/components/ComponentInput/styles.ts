import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-left: 12px;
`;

export const InputContainer = styled.label`
  display: flex;
  border: 2px solid black;
  border-radius: 10px;
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
`;

export const ShowPasswordButton = styled.div`
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
