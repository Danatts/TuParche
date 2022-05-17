import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {
  EVENTS_ROUTE,
  EXPLORE_ROUTE,
  HOME_ROUTE,
  PROFILE_ROUTE,
} from '../../routes/routes';

import './Siderbar.styles.scss';

function Sidebar({ toggle }) {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="sidebar">
      <div className="sidebar__card">
        <span
          className="sidebar__close"
          tabIndex={0}
          role="button"
          onKeyDown={toggle}
          onClick={toggle}
        >
          &#10006;
        </span>
        <div className="sidebar__content">
          <div className="sidebar__linkgroup">
            <NavLink to={HOME_ROUTE} className="sidebar__link">Inicio</NavLink>
            <NavLink to={EXPLORE_ROUTE} className="sidebar__link">Explorar</NavLink>
            <NavLink to={EVENTS_ROUTE} className="sidebar__link">Mis Parches</NavLink>
            <NavLink to={PROFILE_ROUTE} className="sidebar__link">Perfil</NavLink>
          </div>
          <a href="#!" onClick={handleLogout} className="sidebar__link">Cerrar sesión</a>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  toggle: PropTypes.func,
};

Sidebar.defaultProps = {
  toggle: null,
};

export default Sidebar;
