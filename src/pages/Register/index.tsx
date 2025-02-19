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
  SelectUserType,
} from './styles';
import ComponentInput from '../../components/ComponentInput';
import { useUser } from '../../context/user';
import ComponentButton from '../../components/ComponentButton';
import { UserType } from '../../utils/types/enum';

const Register: React.FC = () => {
  const { user, setUser } = useUser();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [userType, setUserType] = useState<UserType>(UserType.STUDENT);

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassError, setConfirmPassError] = useState('');
  const [formError, setFormError] = useState('');

  const { state } = useLocation();
  const navigate = useNavigate();

  function handleErrors() {
    clearErrors();
    let isError = false;
    if (!username) {
      setUsernameError('Preencha este campo!');
      isError = true;
    }
    if (!email) {
      setEmailError('Preencha este campo!');
      isError = true;
    }
    if (!password) {
      setPasswordError('Preencha este campo!');
      isError = true;
    }
    if (confirmPass !== password) {
      setConfirmPassError('As senhas não coincidem!');
    }

    return isError;
  }

  function clearErrors() {
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPassError('');
    setFormError('');
  }

  async function handleSignin() {
    if (handleErrors()) return;
    await axios
      .post('/users', { username, email, password, type: userType })
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
          console.log(reason.response.data.message);
          setFormError(reason.response.data.message);
        },
      )
      .catch(err => {
        console.log(err);
        setUsernameError('Ocorreu um erro no servidor');
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
          <Title>Criar conta</Title>
        </TitleContainer>
        <InputContainer>
          <ComponentInput
            label="Nome de usuário"
            type="text"
            name="name"
            id="name"
            placeholder="Seu Nome"
            error={!!formError || !!usernameError}
            errorMessage={usernameError}
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            autoFocus
          />
        </InputContainer>
        <InputContainer>
          <ComponentInput
            label="E-mail"
            type="text"
            name="login"
            id="login"
            placeholder="seu_email@email.com"
            error={!!formError || !!emailError}
            errorMessage={formError || emailError}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <ComponentInput
            label="Senha"
            type="password"
            name="password"
            id="password"
            placeholder="minha_Senha123"
            error={!!formError || !!passwordError || !!confirmPassError}
            errorMessage={passwordError}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <ComponentInput
            label="Confirmar senha"
            type="password"
            name="password-repeat"
            id="password-repeat"
            placeholder="minha_Senha123"
            error={!!formError || !!confirmPassError}
            errorMessage={confirmPassError}
            value={confirmPass}
            onChange={e => setConfirmPass(e.target.value)}
            required
          />
        </InputContainer>
        <SelectUserType>
          <ComponentButton
            centered={false}
            outlined={userType !== UserType.STUDENT}
            onClick={() => setUserType(UserType.STUDENT)}
          >
            Sou estudante
          </ComponentButton>
          <ComponentButton
            centered={false}
            outlined={userType !== UserType.TEACHER}
            onClick={() => setUserType(UserType.TEACHER)}
          >
            Sou professor(a)
          </ComponentButton>
        </SelectUserType>
        <ComponentButton type="button" onClick={handleSignin}>
          Criar conta
        </ComponentButton>
        <AccountMessage>
          Já tem uma conta?{' '}
          <MessageLink to="/login" state={state}>
            Clique aqui
          </MessageLink>{' '}
          para entrar!
        </AccountMessage>
      </Content>
    </Container>
  );
};

export default Register;
