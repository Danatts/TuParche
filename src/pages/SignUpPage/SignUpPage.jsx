import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Alert from '../../components/Alert/Alert';
import Button from '../../components/Button/Button';
import { LOGIN_ROUTE } from '../../routes/routes';
import useAuth from '../../hooks/useAuth';
import './SignUpPage.styles.scss';

function SignUpPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      navigate(LOGIN_ROUTE);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="signuppage">
      <form onSubmit={handleSubmit} className="signuppage__form">
        <label className="signuppage__label" htmlFor="email">
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            className="signuppage__input"
          />
        </label>
        <label className="signuppage__label" htmlFor="email">
          <input
            name="password"
            id="password"
            type="password"
            onChange={handleChange}
            placeholder="Contraseña"
            className="signuppage__input"
          />
        </label>
        { error ? (<Alert message={error} />) : (null) }
        <Button type="submit" text="Regístrate" />
      </form>
      <div className="signuppage__linkgroup">
        <Link className="signuppage__link" to={LOGIN_ROUTE}>
          <p className="signuppage__linktext">¿Ya tienes una cuenta?</p>
        </Link>
      </div>
    </section>
  );
}

export default SignUpPage;
