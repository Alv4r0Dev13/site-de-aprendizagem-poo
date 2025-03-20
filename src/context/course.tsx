import { createContext, useContext, useState } from 'react';
import { AbsCourseArticle, CourseModule } from '../utils/types/entities';
import { ContainerI } from '../utils/types/components';
import { getStorage } from '../services/storage';

export type CtxCourseData = {
  id: string;
  name: string;
  modules: CourseModule[];
  classes: AbsCourseArticle[];
};

type CourseContextType = {
  courseData: CtxCourseData | null;
  setCourseData: (data: CtxCourseData) => void;
  clearCourseCtx: () => void;
};

const CourseContext = createContext<CourseContextType | null>(null);

const CourseProvider: React.FC<ContainerI> = ({ children }) => {
  const [data, setData] = useState<CtxCourseData | null>(null);

  function setCourseData(data: CtxCourseData): void {
    setData(data);
  }

  function clearCourseCtx(): void {
    if (!data) return;
    setData(null);
  }

  return (
    <CourseContext.Provider
      value={{ courseData: data, setCourseData, clearCourseCtx }}
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
