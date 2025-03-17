import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 16px;
`;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-style: italic;
  text-align: center;
`;

export const Module = styled.details`
  background-color: ${props => props.theme.colors.backgroundMain};
  border-radius: 10px;
`;

export const ModuleTitle = styled.summary`
  cursor: pointer;
  display:flex;
  align-items: center;
  gap: 24px;
  color: ${props => props.theme.colors.textButton};
  background-color: ${props => props.theme.colors.backgroundDark};
  border-radius: 10px;
  padding: 8px 16px;
`;

export const ModuleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px;
  margin: 8px 0;
`;

export const ClassCard = styled.div`
  cursor: pointer;
  background: none;
  display: flex;
  width: 100%;
  gap: 4px;
  /* overflow: hidden; */

  & > div {
    box-shadow: 0 4px 4px #0000003f;
  }

  &:hover .class-number {
    background-color: ${props => props.theme.colors.primary1};
    box-shadow: none;
  }

  &:hover .class-content {
    border-color: ${props => props.theme.colors.primary1};
    box-shadow: none;
  }
`;

export const ClassNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.placeholder};
  border-radius: 10px 0 0 10px;
  width: 80px;

  & p {
    color: ${props => props.theme.colors.textButton};
    font-weight: ${props => props.theme.weights.semiBold};
  }
`;

export const ClassContent = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  background-color: ${props => props.theme.colors.white};
  border-left: 2px solid ${props => props.theme.colors.placeholder};
  border-radius: 0 10px 10px 0;
  /* padding: 16px 8px 16px 16px; */
  padding: 16px;
  `;

export const ClassInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 8px 0; */
`;

export const ClassName = styled.p``;

export const ClassDate = styled.p`
  font-size: ${props => props.theme.sizes.small};
  color: ${props => props.theme.colors.textLight};
`;

export const ClassActions = styled.div``;
