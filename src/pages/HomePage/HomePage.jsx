import useAuth from '../../hooks/useAuth';
import './HomePage.styles.scss';

function HomePage() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>HOME</h1>
      <p>{`Welcome ${user.email}`}</p>
      <button type="button" onClick={handleLogout}>Logout</button>
    </>
  );
}

export default HomePage;
