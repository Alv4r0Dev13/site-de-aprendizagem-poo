import styled from 'styled-components';
import ComponentInput from '../../components/ComponentInput';
import ComponentTextArea from '../../components/ComponentTextArea';
import ComponentButton from '../../components/ComponentButton';

export const Container = styled.div`
  display: flex;
  gap: 32px;
  margin: 80px 20%;
`;

export const Content = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadow.default};
  padding: 56px 16px 24px;
  width: 100%;
`;

export const Title = styled.h1`
  position: absolute;
  text-align: center;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.backgroundDark};
  border-radius: 10px;
  padding: 16px;
  width: 80%;
  /* margin: 0 10%; */
  top: -32px;
  left: 10%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  padding: 16px 24px;
  width: 100%;
`;

export const NameInput = styled(ComponentInput)`
  width: 580px;
`;

export const DescriptionInput = styled(ComponentTextArea)`
  width: 600px;
`;

export const SendButton = styled(ComponentButton)`
  margin-top: 16px;
`;
