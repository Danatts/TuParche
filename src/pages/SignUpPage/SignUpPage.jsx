import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignUpPage.styles.scss';

function SignUpPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    last: '',
    username: '',
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
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="signuppage">
      <h1>Registro</h1>
      { error ? (<p>{error}</p>) : (null) }
      <form onSubmit={handleSubmit} className="signuppage__form">
        <label htmlFor="name">
          Nombre:
          <input name="name" id="name" type="text" placeholder=" Nombre" onChange={handleChange} />
        </label>
        <label htmlFor="last">
          Apellido:
          <input name="last" id="last" type="text" placeholder=" Apellido" onChange={handleChange} />
        </label>
        <label htmlFor="user">
          Nombre de usuario:
          <input name="user" id="user" type="text" placeholder=" Usuario" onChange={handleChange} />
        </label>
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
    </section>
  );
}

export default SignUpPage;
