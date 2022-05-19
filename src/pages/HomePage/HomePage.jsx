import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';
import Footer from '../../components/Footer/Footer';
import { getSingleDocument } from '../../services/event.services';
import './HomePage.styles.scss';

function HomePage() {
  const { loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  const handleGetEvents = async () => {
    await getSingleDocument();
  };

  return (
    <>
      <Header />
      <div className="homepage">
        <button onClick={handleGetEvents}>Leer eventos</button>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
