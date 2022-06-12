import { Routes, Route, Navigate } from 'react-router-dom';

import Login from 'pages/login';
import PersonalInfo from 'pages/personal-info';

const privateRoutes = [
  {
    path: '/',
    Component: PersonalInfo,
  },
  {
    path: '/login',
    Component: Login,
  },
];

const publicRoutes = [
  {
    path: '/login',
    Component: Login,
  },
];

const CustomRoutes = () => {
  const user = true;

  return (
    <Routes>
      {user
        ? privateRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)
        : publicRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}

      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default CustomRoutes;
