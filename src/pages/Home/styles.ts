import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 10%;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  padding: 20px;
`;

export const MainCoursesSection = styled(Section)`
  background-color: ${props => props.theme.colors.backgroundDark};
  border-radius: 10px;
  & > h1, & > p {
    color: ${props => props.theme.colors.white};
  }
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
