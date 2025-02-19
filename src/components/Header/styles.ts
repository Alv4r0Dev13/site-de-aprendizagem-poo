import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PageLinkI } from '../../utils/types/components';

export const Container = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${props => props.theme.colors.primary1};
  height: 80px;
  padding: 0 100px;
`;

export const Logo = styled.div`
  cursor: pointer;
  font-size: 25px;
`;

export const LinksContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  max-width: 30%;
`;

export const PageLink = styled(Link)<PageLinkI>`
  color: ${({ $selected, theme }) => ($selected ? theme.colors.primary1 : 'inherit')};
  font-size: 16px;
`;

export const SearchBar = styled.div`
  display: flex;
  border-bottom: 2px solid ${props => props.theme.colors.placeholder};
  /* border-radius: 20px; */
  align-items: center;
  gap: 10px;
  width: 30%;
  min-width: 300px;
  padding: 2px 10px;

  &:focus-within {
    border-color: ${props => props.theme.colors.primary1};
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: none;
`;

export const SearchIcon = styled.div`
  font-size: 20px;
  color: ${props => props.theme.colors.placeholder};
`;

export const User = styled.div`
  display: flex;
  gap: 10px;
  font-size: 16px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export const AvatarMock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: ${props => props.theme.colors.textButton};
  background-color: ${props => props.theme.colors.primary1};
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
`;

export const UserName = styled.p``;

export const UserDataType = styled.p`
  font-size: 13px;
  color: ${props => props.theme.colors.textLight};
`;

export const UserActions = styled.div`
  display: flex;
  gap: 20px;
  font-size: 16px;
`;
