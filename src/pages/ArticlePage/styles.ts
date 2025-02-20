import styled from 'styled-components';

export const Container = styled.div`
  margin: 60px 20%;
`;

export const Content = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadow.default};
  padding-top: 48px;
`;

export const ArticleName = styled.h1`
  position: absolute;
  text-align: center;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.backgroundDark};
  border-radius: 10px;
  padding: 16px;
  width: 80%;
  /* margin: 0 10%; */
  top: -24px;
  left: 10%;
`;
