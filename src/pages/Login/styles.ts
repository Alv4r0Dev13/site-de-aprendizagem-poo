import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.backgroundMain};
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  gap: 20px;
  width: 40%;
  height: fit-content;
  padding: 64px 40px 40px;
  margin: auto auto;
  box-shadow: 0 4px 4px rgba(0,0,0,0.3);
`;

export const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: -30px;
  left: 0;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.backgroundDark};
  width: fit-content;
  border-radius: 5px;
  padding: 8px 40px;
`;

export const InputContainer = styled.div``;

export const AccountMessage = styled.p`
  font-size: 13px;
  text-align: center;
`;

export const MessageLink = styled(Link)`
  color: ${props => props.theme.colors.primary1};
  display: inline;
`;
