import { createContext, useContext, useState } from 'react';
import { CourseModule } from '../utils/types/entities';
import { ContainerI } from '../utils/types/components';

type CourseContextType = {
  courseModules: CourseModule[] | null;
  setCourseModules: (modules: CourseModule[]) => void;
  clearCourseCtx: () => void;
};

const CourseContext = createContext<CourseContextType | null>(null);

const CourseProvider: React.FC<ContainerI> = ({ children }) => {
  const [modules, setModules] = useState<CourseModule[] | null>(null);

  function setCourseModules(data: CourseModule[]): void {
    setModules(data);
  }

  function clearCourseCtx(): void {
    if (!modules) return;
    setModules(null);
  }

  return (
    <CourseContext.Provider
      value={{ courseModules: modules, setCourseModules, clearCourseCtx }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) throw new Error('Course provider is not set');
  return context;
};

export default CourseProvider;
