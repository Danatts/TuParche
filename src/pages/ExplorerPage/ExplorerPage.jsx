import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import EventCard from '../../components/EventCard/EventCard';
import Footer from '../../components/Footer/Footer';
import { getAllEvents } from '../../services/event.services';
import './ExplorerPage.styles.scss';

function ExplorerPage() {
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
      <div className="explorerpage">
        <section className="explorerpage__list">
          { events.map((doc) => (<EventCard key={doc.title} doc={doc} />)) }
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ExplorerPage;
