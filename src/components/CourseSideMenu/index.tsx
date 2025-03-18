import React, { useEffect } from 'react';

import {
  ClassLink,
  Container,
  MenuTitle,
  Module,
  ModuleClasses,
  ModuleName,
} from './styles';
import { useCourse } from '../../context/course';
import { useNavigate } from 'react-router-dom';

const CourseSideMenu: React.FC = () => {
  const { courseModules: modules } = useCourse();

  return (
    <Container>
      <MenuTitle></MenuTitle>
      {modules!.map(m => (
        <Module key={m.name}>
          <ModuleName>{m.name}</ModuleName>
          <ModuleClasses>
            {m.classes.map(c => (
              <ClassLink key={c.number} to={`/article/${c.slug}`}>
                {c.title}
              </ClassLink>
            ))}
          </ModuleClasses>
        </Module>
      ))}
    </Container>
  );
};

export default CourseSideMenu;
