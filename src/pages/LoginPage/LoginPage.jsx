import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function LoginPage() {
  const { login, loginGoogle } = useAuth();
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

  return (
    <section>
      <h1>Inicia sesión</h1>
      { error ? (<p>{error}</p>) : (null) }
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input name="email" id="email" type="email" placeholder=" tuemail@mail.com" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Contraseña:
          <input name="password" id="password" type="password" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button type="button" onClick={handleGoogle}>Login with Google</button>
    </section>
  );
}

export default LoginPage;
