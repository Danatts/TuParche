import Header from '../../components/Header/Header';
import EventForm from '../../components/EventForm/EventForm';
import useAuth from '../../hooks/useAuth';
import './HomePage.styles.scss';

function HomePage() {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <h1>HOME</h1>
      <p>{`Welcome ${user.email}`}</p>
      <EventForm />
    </>
  );
}

export default HomePage;
