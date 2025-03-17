import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3`
  margin-left: 16px;
  margin-bottom: 8px;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const AuthorAvatar = styled.img`
  border-radius: 10px;
  width: 50px;
  height: 50px;
`;

export const NoAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.placeholder};
  border-radius: 10px;
  width: 50px;
  height: 50px;

  span {
    font-size: 25px;
  }
`;

export const AuthorData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AuthorType = styled.p`
  font-size: ${props => props.theme.sizes.small};
  color: ${props => props.theme.colors.textLight};
`;
