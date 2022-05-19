import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import EventCard from '../../components/EventCard/EventCard';
import PlusButton from '../../components/PlusButton/PlusButton';
import Footer from '../../components/Footer/Footer';
import { CREATEEVENT_ROUTE } from '../../routes/routes';
import './EventsPage.styles.scss';

function EventsPage() {
  return (
    <>
      <Header />
      <div className="eventspage">
        <EventCard />
        <Link to={CREATEEVENT_ROUTE}>
          <PlusButton />
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default EventsPage;
