import Header from '../../components/Header/Header';
import EventForm from '../../components/EventForm/EventForm';
import useAuth from '../../hooks/useAuth';
import Footer from '../../components/Footer/Footer';
import './HomePage.styles.scss';

function HomePage() {
  const { loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="homepage">
        <Header />
        <EventForm />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
