import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  padding: 20px;

  h1 {
    text-align: center;
    margin: 10px 0 30px;
  }

  h2, h3, h4, h5, h6 {
    margin: 30px 0 5px;
  }

  p:not(.alt-text) {
    word-spacing: 2px;
    margin-bottom: 20px;
  }

  .alt-text {
    display: block;
    font-size: 15px;
    font-style: italic;
    text-align: center;
    margin-top: 10px;
  }

  img {
    display: block;
    max-width: 60%;
    margin: 0 auto;
  }

  pre {
    color: ${props => props.theme.colors.textLight};
    background-color: ${props => props.theme.colors.backgroundMain};
    border-radius: 10px;
    box-shadow: inset 0 0 2px #00000080;
    padding: 10px;

    div {
      background-color: ${props => props.theme.colors.backgroundMain} !important;
    }
  }

  code:not(pre code) {
    color: ${props => props.theme.colors.textLight};
    font-size: 16px;
    background-color: ${props => props.theme.colors.backgroundMain};
    border-radius: 6px;
    box-shadow: inset 0 0 2px #00000080;
    padding: 2px 4px;
  }

  ul, ol {
    margin-left: 25px;
  }

  ul:not(ul ul), ol:not(ol ol) {
    margin-bottom: 20px;
  }
`;

export const Loading = styled(LoadingOutlined)`
  display: block;
  font-size: 25px;
  width: fit-content;
  margin: 0 auto;
`;
