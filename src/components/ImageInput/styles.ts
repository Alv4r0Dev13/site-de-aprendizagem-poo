import styled from 'styled-components';
import ComponentButton from '../ComponentButton';

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

export const NoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  background-color: ${props => props.theme.colors.placeholder};
  border-radius: 10px;
  width: 100%;
  height: 100%;

  & span {
    display: block;
    color: ${props => props.theme.colors.textLight};
  }
`;

export const ImageButton = styled.label`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary1};
  border-radius: 5px;
  bottom: 8px;
  right: 8px;

  & span {
    display: block;
    font-size: 20px;
    color: ${props => props.theme.colors.textButton};
    padding: 4px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.primary2};
  }
`;

export const DeleteButton = styled(ComponentButton)`
  position: absolute;
  font-size: 19px;
  border-radius: 5px;
  padding: 2px 2px 0;
  bottom: 8px;
  left: 8px;
`;

export const Input = styled.input`
  display: none;
`;
