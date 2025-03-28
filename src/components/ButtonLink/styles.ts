import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ButtonLinkPropsI } from '../../utils/types/components';

export const BtnLink = styled(Link)<ButtonLinkPropsI>`
  cursor: pointer;
  display: block;
  /* font-weight: bold; */
  font-size: ${props => props.theme.sizes.mediumSmall};
  text-transform: uppercase;
  border: none;
  border-radius: 10px;
  width: fit-content;
  padding: 10px 20px;

  ${({ theme, $color, $outlined, $centered }) => {
    const color = theme.colors[$color === 'default' ? 'primary1' : $color];
    return css`
      border: 2px solid ${color};
      ${() => ($centered ? css`margin: 0 auto;` : '')}
      ${() =>
        $outlined
          ? css`
            color: ${color};
            background: none;
          `
          : css`
            color: ${theme.colors.textButton};
            background-color: ${color};
          `}
    `;
  }}

  &:hover {
    text-decoration: none;

    ${({ theme, $color }) => {
      let color;
      switch ($color) {
        case 'default':
          color = theme.colors.primary2;
          break;
        case 'success':
          color = theme.colors.successLight;
          break;
        case 'alert':
          color = theme.colors.alertLight;
          break;
        case 'danger':
          color = theme.colors.dangerLight;
          break;
      }
      return css`
        color: ${theme.colors.textButton};
        border-color: ${color};
        background-color: ${color};
      `;
    }}
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme.colors.textLight}
  }
`;
