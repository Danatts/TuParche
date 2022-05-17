import Header from '../../components/Header/Header';
import EventForm from '../../components/EventForm/EventForm';
import useAuth from '../../hooks/useAuth';
import Footer from '../../components/Footer/Footer';
import { getSingleDocument } from '../../services/event.services';
import './HomePage.styles.scss';

function HomePage() {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  console.log(user);

  const handleGetEvents = async () => {
    await getSingleDocument();
  };

  return (
    <>
      <div className="homepage">
        <Header />
        <EventForm />
        <button onClick={handleGetEvents}>Leer eventos</button>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
