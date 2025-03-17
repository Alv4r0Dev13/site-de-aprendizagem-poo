import React, { useEffect, useState } from 'react';

import {
  ClassCard,
  ClassContent,
  ClassDate,
  ClassInfo,
  ClassName,
  ClassNumber,
  Container,
  ErrorMessage,
  Module,
  ModuleContent,
  ModuleTitle,
} from './styles';
import { ClassesTabI } from '../../utils/types/components';
import {
  CaretDownOutlined,
  CaretRightOutlined,
  Loading3QuartersOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const CourseClassesTab: React.FC<ClassesTabI> = ({
  modules,
  isLoading,
  isError,
}) => {
  const defaultOpen = 0;
  const [open, setOpen] = useState<number[]>([]);
  const navigate = useNavigate();

  function toggleDetails(index: number) {
    if (open.includes(index)) setOpen(open.filter(i => i !== index));
    else setOpen([...open, index]);
  }

  return (
    <Container>
      {isLoading ? (
        <Loading3QuartersOutlined spin />
      ) : isError ? (
        <ErrorMessage>Algo deu errado...</ErrorMessage>
      ) : modules.length ? (
        modules.map((m, i) => (
          <Module
            key={m.name}
            open={defaultOpen === i}
            onToggle={() => toggleDetails(i)}
          >
            <ModuleTitle>
              {open.includes(i) ? (
                <CaretDownOutlined />
              ) : (
                <CaretRightOutlined />
              )}
              <h3>Módulo 1:</h3>
              <p>{m.name}</p>
            </ModuleTitle>
            <ModuleContent>
              {m.classes.map(c => (
                <ClassCard
                  key={c.number}
                  onClick={() => navigate(`/article/${c.slug}`)}
                >
                  <ClassNumber className="class-number">
                    <p>{c.number}</p>
                  </ClassNumber>
                  <ClassContent className="class-content">
                    <ClassInfo>
                      <ClassName>{c.title}</ClassName>
                      <ClassDate>
                        {new Date(c.createdAt).toLocaleDateString()}
                      </ClassDate>
                    </ClassInfo>
                  </ClassContent>
                </ClassCard>
              ))}
            </ModuleContent>
          </Module>
        ))
      ) : (
        <ErrorMessage>Nenhuma aula enviada ainda.</ErrorMessage>
      )}
    </Container>
  );
};

export default CourseClassesTab;
