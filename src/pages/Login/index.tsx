import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../services/axios';
import { getStorage, setStorage } from '../../services/storage';
import {
  AccountMessage,
  InputContainer,
  Container,
  MessageLink,
  Title,
  Content,
  TitleContainer,
} from './styles';
import ComponentInput from '../../components/ComponentInput';
import { useUser } from '../../context/user';
import ComponentButton from '../../components/ComponentButton';

const Login: React.FC = () => {
  const { user, setUser } = useUser();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');

  const { state } = useLocation();
  const navigate = useNavigate();

  function handleErrors() {
    setLoginError('');
    setPasswordError('');
    setFormError('');

    let isError = false;
    if (!login) {
      setLoginError('Preencha este campo!');
      isError = true;
    }
    if (!password) {
      setPasswordError('Preencha este campo!');
      isError = true;
    }

    return isError;
  }

  async function handleLogin() {
    if (handleErrors()) return;
    await axios
      .post('/users/login', { login, password })
      .then(
        // OK
        resp => {
          setUser(resp.data);
          setStorage('user', resp.data);
          if (state) navigate(state.prev, { state });
          else navigate('/');
        },

        // NOT FOUND or SERVER ERROR
        reason => {
          console.log(reason);
        },
      )
      .catch(err => {
        console.log(err);
        setLoginError('Ocorreu um erro no servidor');
      });
  }

  useEffect(() => {
    if (user || getStorage('user')) {
      navigate(-1);
      return;
    }
  }, [navigate, user]);

  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>Entrar na conta</Title>
        </TitleContainer>
        <InputContainer>
          <ComponentInput
            label="E-mail ou nome de usuário"
            type="text"
            name="login"
            id="login"
            placeholder="seu_email@email.com"
            error={!!formError || !!loginError}
            errorMessage={formError || loginError}
            value={login}
            onChange={e => setLogin(e.target.value)}
            autoFocus
          />
        </InputContainer>
        <InputContainer>
          <ComponentInput
            label="Senha"
            type="password"
            name="password"
            id="password"
            placeholder="minha_Senha123"
            error={!!formError || !!passwordError}
            errorMessage={passwordError}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </InputContainer>
        <ComponentButton type="button" onClick={handleLogin}>
          Entrar
        </ComponentButton>
        <AccountMessage>
          Ainda não tem uma conta?{' '}
          <MessageLink to="/register" state={state}>
            Clique aqui
          </MessageLink>{' '}
          para criar!
        </AccountMessage>
      </Content>
    </Container>
  );
};

export default Login;
