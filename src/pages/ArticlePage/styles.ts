import styled from 'styled-components';
import ButtonLink from '../../components/ButtonLink';

export const Container = styled.div`
  display: flex;
  gap: 32px;
  margin: 60px;
`;

export const LoadingContainer = styled.div`
  margin: auto;
`;

export const SideContent = styled.div`
  width: 200px;
`;

export const Content = styled.div`
  flex: 1;
  position: relative;
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadow.default};
  padding-top: 48px;
  width: 100%;
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

export const ArticleActions = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  padding: 0 16px;
`;

export const NextButton = styled(ButtonLink)`
  margin-left: auto;
`;
