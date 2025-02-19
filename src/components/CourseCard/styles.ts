import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 150px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    border: 3px solid ${props => props.theme.colors.primary1};
    box-shadow: none;

    h2 {
      color: ${props => props.theme.colors.primary1};
    }
  }
`;

export const NoThumb = styled.div`
  background-color: ${props => props.theme.colors.placeholder};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;

  & > span {
    display: block;
    color: ${props => props.theme.colors.white};
    font-size: 50px;
  }
`;

export const Thumbnail = styled.img`
  width: 200px;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const CourseHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2``;

export const Classes = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 13px;
`;

export const Description = styled.p`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
`;
