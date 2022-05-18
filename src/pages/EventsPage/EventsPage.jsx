import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import PlusButton from '../../components/PlusButton/PlusButton';
import Footer from '../../components/Footer/Footer';
import { CREATEEVENT_ROUTE } from '../../routes/routes';
import './EventsPage.styles.scss';

function EventsPage() {
  return (
    <>
      <div className="eventspage">
        <Header />
        <Link to={CREATEEVENT_ROUTE}>
          <PlusButton />
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default EventsPage;
