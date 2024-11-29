import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: 'column';
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
    border-color: blue;
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

export const CharCount = styled.p`
  color: grey;
  text-align: right;
  font-size: 13px;
  padding: 0 10px;
`;
