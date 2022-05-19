import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Button from '../Button/Button';
import Alert from '../Alert/Alert';
import { PROFILE_ROUTE } from '../../routes/routes';
import './UserNameForm.styles.scss';

function UserNameForm() {
  const { user, setDisplayName } = useAuth();

  const navigate = useNavigate();

  const [notice, setNotice] = useState(null);

  const [name, setName] = useState();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDisplayName(user, name);
      setNotice('Tu información han sido guardada');
      navigate(PROFILE_ROUTE);
    } catch (err) {
      setNotice('Algo salió mal :(');
      throw new Error(err.message);
    }
  };

  return (
    <div className="usernameform">
      <div className="usernameform__card">
        <form className="usernameform__form" onSubmit={handleSubmit}>
          <h1 className="usernameform__title">Crea un nombre de usuario</h1>
          <label className="usernameform__label" htmlFor="username">
            <input
              name="username"
              id="username"
              type="text"
              placeholder="Nombre de usuario"
              className="usernameform__input"
              onChange={handleChange}
            />
          </label>
          <Button text="Confirmar" type="submit" />
        </form>
        { notice ? (<Alert message={notice} />) : null }
      </div>
    </div>
  );
}

export default UserNameForm;
