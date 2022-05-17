import Header from '../../components/Header/Header';
import EventForm from '../../components/EventForm/EventForm';
import useAuth from '../../hooks/useAuth';
import Footer from '../../components/Footer/Footer';
import { getSingleDocument } from '../../services/event.services';
import './HomePage.styles.scss';
import MapView from '../../components/MapView/MapView';

function HomePage() {
  const { loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  const handleGetEvents = async () => {
    await getSingleDocument();
  };

  return (
    <>
      <div className="homepage">
        <Header />
        <EventForm />
        <button onClick={handleGetEvents}>Leer eventos</button>
        <MapView />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
