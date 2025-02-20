import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Header from '../components/Header';
import Register from '../pages/Register';
import CoursesHome from '../pages/CoursesHome';
import CoursePage from '../pages/CoursePage';

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
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
