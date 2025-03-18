import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  width: 300px;
  top: 20px;
`;

export const MenuTitle = styled.h3`
  position: absolute;
  display: block;
  top: -10px;
`;

export const Module = styled.details``;

export const ModuleName = styled.summary``;

export const ModuleClasses = styled.div``;

export const ClassLink = styled(Link)`
  display: block;
`;
