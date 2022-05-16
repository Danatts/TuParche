import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert/Alert';
import Button from '../../components/Button/Button';
import useAuth from '../../hooks/useAuth';
import google from '../../assets/icons/logo_google.png';
import './LoginPage.styles.scss';

function LoginPage() {
  const { login, loginGoogle, resetPassword } = useAuth();
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
      await login(user.email, user.password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginGoogle();
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError('Por favor, digite su correo');
    try {
      await resetPassword(user.email);
      return setError('Se ha enviado un correo con un link para reestablecer tu contraseña');
    } catch (err) {
      return setError(err.message);
    }
  };

  return (
    <section className="loginpage">
      <form className="loginpage__form" onSubmit={handleSubmit} id="loginform">
        <label className="loginpage__label" htmlFor="email">
          <input
            className="loginpage__input"
            name="email"
            id="email"
            type="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
          />
        </label>
        <label className="loginpage__label" htmlFor="email">
          <input
            className="loginpage__input"
            name="password"
            id="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
          />
        </label>
        { error ? (<Alert message={error} />) : (null) }
        <Button type="submit" text="Inicar sesión" />
      </form>
      <div className="loginpage__linkgroup">
        <a href="#!" onClick={handleResetPassword} className="loginpage__linktext loginpage__link">
          ¿Olvidaste tu contraseña?
        </a>
        <Link className="loginpage__link" to="/signup">
          <p className="loginpage__linktext">Regístrate</p>
        </Link>
      </div>
      <p className="loginpage__separator"> o </p>
      <Button
        type="button"
        handleEffect={handleGoogle}
        text="Iniciar sesión"
        icon={google}
        design="google"
      />
    </section>
  );
}

export default LoginPage;
