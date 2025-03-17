import styled, { css } from 'styled-components';
import { TabPropsI } from '../../utils/types/components';

export const Container = styled.div`
  margin: 80px 20%;
`;

export const Content = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadow.default};
  overflow: hidden;
  width: 100%;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 300px;
`;

export const NoThumb = styled.div`
  background-color: ${props => props.theme.colors.placeholder};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;

  & > span {
    display: block;
    color: ${props => props.theme.colors.white};
    font-size: 50px;
  }
`;

export const CourseTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.backgroundDark};
  border-radius: 10px;
  width: 80%;
  margin: 0 auto;
  padding: 8px 16px;
  top: -45px;
`;

export const CourseName = styled.h1`
  text-align: center;
`;

export const TitleDetails = styled.div`
  display: flex;
  gap: 24px;
`;

export const TabNavigator = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
`;

export const TabButton = styled.div<TabPropsI>`
  cursor: pointer;
  display: flex;
  gap: 4px;
  border-radius: 5px;
  padding: 4px 8px;

  ${({ $selected: sel, theme }) => css`
    ${sel ? css`background-color: ${theme.colors.primary1};` : ''}

    p {
      ${sel ? css`color: ${theme.colors.white};` : ''}
    }

    span {
      color: ${theme.colors.white};
      font-size: ${theme.sizes.mini};
      background-color: ${theme.colors[sel ? 'primary2' : 'primary1']};
      border-radius: 2px;
      padding: 3px 4px 0 4px;
    }

    &:hover {
      ${sel ? css`color: ${theme.colors.white};` : ''};
      background-color: ${theme.colors[sel ? 'primary2' : 'placeholder']};

      span {
        background-color: ${theme.colors[sel ? 'primary3' : 'primary2']};
      }
    }
  `}
`;

export const TabContent = styled.div`
  margin: 0 40px 40px;
`;
