import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useAuth from '../../hooks/useAuth';
import './HomePage.styles.scss';

function HomePage() {
  const { loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <div className="homepage">
        <h1>Welcome</h1>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
