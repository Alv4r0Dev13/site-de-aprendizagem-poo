import { CtxCourseData } from '../context/course';
import { getStorage } from '../services/storage';
import { fetchData } from './functions';
import {
  AbsCourseArticle,
  Course,
  CourseArticle,
  CourseModule,
} from './types/entities';

export async function getCourseData(
  courseId: string,
  courseObj?: Course,
): Promise<CtxCourseData | null> {
  const stored = getStorage<CtxCourseData>(
    `${process.env.REACT_APP_STORAGE_COURSE}`,
  );
  if (stored) return stored;
  const fetchCourse = courseObj
    ? new Promise<Course>(resolve => resolve(courseObj))
    : fetchData<Course>(`/course/${courseId}`);
  const fetchClasses = fetchData<CourseArticle[]>(
    `/article/course/${courseId}`,
  );
  const [course, classes] = await Promise.all([fetchCourse, fetchClasses]);
  if (!course || !classes) return null;

  const modules = course.modules.map<CourseModule>(m => {
    const cls = classes.filter(c => c.module === m);
    return {
      name: m,
      classes: summarizeClasses(cls),
    };
  });

  return {
    id: courseId,
    name: course.name,
    modules,
    classes: summarizeClasses(classes),
  };
}

function summarizeClasses(classes: CourseArticle[]): AbsCourseArticle[] {
  return classes.map(c => ({
    id: c.id,
    title: c.title,
    slug: c.slug,
    number: c.number,
    createdAt: c.createdAt,
  }));
}
