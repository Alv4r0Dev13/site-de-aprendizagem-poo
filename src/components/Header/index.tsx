import React, { useEffect, useState } from 'react';

import {
  Avatar,
  AvatarMock,
  Container,
  LinksContainer,
  Logo,
  PageLink,
  SearchBar,
  SearchIcon,
  SearchInput,
  User,
  UserActions,
  UserData,
  UserName,
  UserDataType,
} from './styles';
import { HeaderI } from '../../utils/types/components';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { useUser } from '../../context/user';
import { Link, useNavigate } from 'react-router-dom';
import { UserType } from '../../utils/types/enum';
import { getStorage } from '../../services/storage';

const Header: React.FC<HeaderI> = ({ page }) => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');

  useEffect(() => {
    if (!user) {
      const storedUser = getStorage(
        process.env.REACT_APP_STORAGE_USER || 'user',
      );
      if (storedUser) setUser(storedUser);
    }
  }, [user, setUser]);

  useEffect(() => {
    if (!user) return;
    switch (user.type) {
      case UserType.STUDENT:
        setUserType('Estudante');
        break;
      case UserType.TEACHER:
        setUserType('Professor');
        break;
      case UserType.ADMIN:
        setUserType('Administrador');
        break;
    }
  }, [user]);

  return (
    <Container>
      <Logo onClick={() => navigate('/')}>Quebracódigos</Logo>
      <LinksContainer>
        <PageLink to={'courses'} $selected={page === 'courses'}>
          Cursos
        </PageLink>
        <PageLink to={''} $selected={page === 'blog'}>
          Blog
        </PageLink>
        <PageLink to={''} $selected={page === 'qna'}>
          Fórum
        </PageLink>
      </LinksContainer>
      <SearchBar>
        <SearchInput placeholder="Pesquisar" />
        <SearchIcon>
          <SearchOutlined />
        </SearchIcon>
      </SearchBar>
      {user ? (
        <User>
          <UserData>
            <UserName>{user.username.split(' ')[0]}</UserName>
            <UserDataType>{userType}</UserDataType>
          </UserData>
          {user.profileUrl ? (
            <Avatar src={user.profileUrl} />
          ) : (
            <AvatarMock>
              <UserOutlined />
            </AvatarMock>
          )}
        </User>
      ) : (
        <UserActions>
          <Link to="/login">Entrar</Link>
          <Link to="register">Criar conta</Link>
        </UserActions>
      )}
    </Container>
  );
};

export default Header;
