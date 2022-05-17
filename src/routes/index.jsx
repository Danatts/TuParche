import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import ExplorerPage from '../pages/ExplorerPage/ExplorerPage';
import EventsPage from '../pages/EventsPage/EventsPage';
import EventFormPage from '../pages/EventFormPage/EventFormPage';
import {
  SIGNUP_ROUTE,
  LOGIN_ROUTE,
  HOME_ROUTE,
  PROFILE_ROUTE,
  EXPLORE_ROUTE,
  EVENTS_ROUTE,
  CREATEEVENT_ROUTE,
} from './routes';

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SIGNUP_ROUTE} element={<SignUpPage />} />
        <Route path={LOGIN_ROUTE} element={<LoginPage />} />
        <Route
          path={HOME_ROUTE}
          element={(
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          )}
        />
        <Route
          path={EXPLORE_ROUTE}
          element={(
            <ProtectedRoute>
              <ExplorerPage />
            </ProtectedRoute>
          )}
        />
        <Route
          path={EVENTS_ROUTE}
          element={(
            <ProtectedRoute>
              <EventsPage />
            </ProtectedRoute>
          )}
        />
        <Route
          path={PROFILE_ROUTE}
          element={(
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          )}
        />
        <Route
          path={CREATEEVENT_ROUTE}
          element={(
            <ProtectedRoute>
              <EventFormPage />
            </ProtectedRoute>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
