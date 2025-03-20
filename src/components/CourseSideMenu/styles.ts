import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MenuDetailsPropsI, MenuLinkI } from '../../utils/types/components';

export const Container = styled.div`
  position: sticky;
  flex-direction: column;
  display: flex;
  gap: 8px;
  width: 100%;
  /* padding: 32px 8px 8px; */
  top: 20px;
`;

export const MenuTitle = styled.h3`
  color: ${props => props.theme.colors.white};
  display: block;
  background-color: ${props => props.theme.colors.backgroundDark};
  top: -10px;
  width: 100%;
  text-align: center;
  padding: 16px 8px;
  border-radius: 10px;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
`;

export const Module = styled.details<MenuDetailsPropsI>`
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;

  ${({ $open, theme }) =>
    $open
      ? css`
      /* background-color: red; */
    box-shadow: ${theme.shadow.default};
  `
      : ''}
`;

export const ModuleName = styled.summary<MenuDetailsPropsI>`
  cursor: pointer;
  text-align: center;
  padding: 8px 0;

  ${({ $open }) =>
    $open
      ? css`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.backgroundDark};
    border-radius: 10px 10px 0 0;
  `
      : ''}
`;

export const ModuleClasses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
`;

export const ClassLink = styled(Link)<MenuLinkI>`
  display: block;
  border-radius: 5px;
  padding: 2px 8px;

  ${({ $selected, theme }) =>
    $selected
      ? css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary1}
  `
      : ''}
`;
