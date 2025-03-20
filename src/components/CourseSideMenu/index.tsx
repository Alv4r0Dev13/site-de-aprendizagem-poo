import React, { useEffect, useState } from 'react';

import {
  ClassLink,
  Container,
  MenuContent,
  MenuTitle,
  Module,
  ModuleClasses,
  ModuleName,
} from './styles';
import { useCourse } from '../../context/course';
import { CourseSideMenuI } from '../../utils/types/components';

const CourseSideMenu: React.FC<CourseSideMenuI> = ({ article }) => {
  const { courseData } = useCourse();
  const [open, setOpen] = useState<number[]>([]);

  function toggleDetails(index: number) {
    // console.log(open);
    if (open.includes(index)) setOpen(open.filter(i => i !== index));
    else setOpen([...open, index]);
  }

  return (
    <Container>
      <MenuTitle>Neste curso</MenuTitle>
      <MenuContent>
        {courseData!.modules.map((m, i) => (
          <Module
            open={m.name === article.module}
            $open={open.includes(i)}
            onToggle={() => toggleDetails(i)}
            key={m.name}
          >
            <ModuleName $open={open.includes(i)}>{m.name}</ModuleName>
            <ModuleClasses>
              {m.classes.map(c => (
                <ClassLink
                  key={c.number}
                  to={`/article/${c.slug}`}
                  $selected={c.id === article.id}
                >
                  {c.title}
                </ClassLink>
              ))}
            </ModuleClasses>
          </Module>
        ))}
      </MenuContent>
    </Container>
  );
};

export default CourseSideMenu;
