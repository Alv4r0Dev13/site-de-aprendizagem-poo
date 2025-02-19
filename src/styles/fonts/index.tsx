import { createGlobalStyle } from 'styled-components';

import Aleo from './files/Aleo/Aleo-VariableFont_wght.ttf';
import AleoSemiBold from './files/Aleo/static/Aleo-SemiBold.ttf';
import AleoItalic from './files/Aleo/Aleo-Italic-VariableFont_wght.ttf';
import AleoSemiBoldItalic from './files/Aleo/static/Aleo-SemiBoldItalic.ttf';
import Rubik from './files/Rubik/Rubik-VariableFont_wght.ttf';
import RubikRegular from './files/Rubik/static/Rubik-Regular.ttf';
import RubikSemiBold from './files/Rubik/static/Rubik-SemiBold.ttf';
import RubikItalic from './files/Rubik/Rubik-Italic-VariableFont_wght.ttf';
import RubikRegularItalic from './files/Rubik/static/Rubik-Italic.ttf';
import RubikSemiBoldItalic from './files/Rubik/static/Rubik-SemiBoldItalic.ttf';
import FiraCode from './files/Fira_Code/FiraCode-VariableFont_wght.ttf';
import FiraCodeRegular from './files/Fira_Code/static/FiraCode-Regular.ttf';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Aleo';
    src: local('Aleo'), url(${Aleo}) format('truetype-variations'), url(${AleoSemiBold}) format('truetype');
    font-weight: 100 900;
  }
  @font-face {
    font-family: 'Aleo';
    src: local('Aleo'), url(${AleoItalic}) format('truetype-variations'), url(${AleoSemiBoldItalic}) format('truetype');
    font-weight: 100 900;
    font-style: italic;
  }
  @font-face {
    font-family: 'Rubik';
    src: local('Rubik'), url(${Rubik}) format('truetype-variations'), url(${RubikRegular}) format('truetype');
    font-weight: 300 900;
  }
  @font-face {
    font-family: 'Rubik';
    src: url(${RubikSemiBold}) format('truetype');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Rubik';
    src: local('Rubik'), url(${RubikItalic}) format('truetype-variations'), url(${RubikRegularItalic}) format('truetype');
    font-weight: 300 900;
    font-style: italic;
  }
  @font-face {
    font-family: 'Rubik';
    src: url(${RubikSemiBoldItalic}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Fira Code';
    src: local('Fira Code'), local('Fira-Code'), url(${FiraCode}) format('truetype-variations'), url(${FiraCodeRegular}) format('truetype');
    font-weight: 300 900;
  }
`;

export default GlobalFonts;
