import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Header from '../components/Header';
import Register from '../pages/Register';
import CoursesHome from '../pages/CoursesHome';
import ArticlePage from '../pages/ArticlePage';
import CoursePage from '../pages/CoursePage';
import ManageCourse from '../pages/ManageCourse';
import PrivateRoute from './private';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/courses"
        element={
          <>
            <Header page={'courses'} />
            <CoursesHome />
          </>
        }
      />
      <Route
        path={'/course/:id'}
        element={
          <>
            <Header />
            <CoursePage />
          </>
        }
      />
      <Route
        path="/course/manage"
        element={
          <PrivateRoute>
            <Header />
            <ManageCourse />
          </PrivateRoute>
        }
      />
      <Route
        path="/article/:slug"
        element={
          <>
            <Header />
            <ArticlePage />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
