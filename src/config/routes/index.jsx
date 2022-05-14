import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import HomePage from '../../pages/HomePage/HomePage';
import { SIGNUP_ROUTE, LOGIN_ROUTE, HOME_ROUTE } from './routes';

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<HomePage />} />
        <Route path={SIGNUP_ROUTE} element={<SignUpPage />} />
        <Route path={LOGIN_ROUTE} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
