import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useAuth from '../../hooks/useAuth';
import './HomePage.styles.scss';
import UserNameForm from '../../components/UserNameForm/UserNameForm';

function HomePage() {
  const { loading, user } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      {user.displayName === null ? (<UserNameForm />) : null}
      <Header />
      <div className="homepage">
        <h1>Welcome</h1>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
