import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import EventCard from '../../components/EventCard/EventCard';
import PlusButton from '../../components/PlusButton/PlusButton';
import Footer from '../../components/Footer/Footer';
import { getAllEvents } from '../../services/event.services';
import { CREATEEVENT_ROUTE } from '../../routes/routes';
import './EventsPage.styles.scss';

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchAllEvents = async () => {
      setEvents(await getAllEvents());
    };
    fetchAllEvents();
  });

  return (
    <>
      <Header />
      <div className="eventspage">
        <section className="eventspage__list">
          { events.map((doc) => (<EventCard key={doc.title} doc={doc} />)) }
        </section>
        <Link to={CREATEEVENT_ROUTE}>
          <PlusButton />
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default EventsPage;
