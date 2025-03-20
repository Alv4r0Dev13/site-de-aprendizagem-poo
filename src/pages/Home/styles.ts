import styled from 'styled-components';
import ComponentButton from '../../components/ComponentButton';
import ButtonLink from '../../components/ButtonLink';

export const Container = styled.div`
  padding: 80px 10%;
`;

export const Loading = styled.div`
  span {
    display: block;
    color: ${props => props.theme.colors.primary1};
    font-size: 50px;
    margin: 16px auto 0;
  }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;

  &:not(:first-of-type) {
    margin-top: 40px;
  }

  h1 {
    margin-left: 16px;
  }
`;

export const SectionButton = styled(ComponentButton)`
  width: fit-content;
  margin: 16px 0 0 32px;
`;

export const MainCoursesSection = styled(Section)`
  position: relative;
  background-color: ${props => props.theme.colors.backgroundDark};
  border-radius: 10px;
  padding: 16px;

  & > h1, & > p {
    color: ${props => props.theme.colors.white};
  }
`;

export const CreateCourseButton = styled(ButtonLink)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Courses = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* justify-content: space-around; */
  gap: 20px;
`;

export const NoCourses = styled.div`
  color: ${props => props.theme.colors.placeholder};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 16px 0;

  span {
    font-size: 50px;
  }
`;

export const CourseCard = styled.div`
  position: relative;
  border: 2px solid ${props => props.theme.colors.primary1};
  border-radius: 5px;
  width: 32%;
  min-width: 300px;
  max-width: 500px;
  height: 200px;
  padding: 20px;

  &:hover {
    transform: scale(105%);
  }

  p {
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    height: 100px;
    margin-top: 10px;
  }
`;

export const MainCourseCard = styled(CourseCard)`
  border: none;
  background-color: ${props => props.theme.colors.backgroundMain};
`;
