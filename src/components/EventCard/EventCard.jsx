import './EventCard.styles.scss';
import person from '../../assets/icons/person.png';

function EventCard() {
  return (
    <div className="eventcard">
      <div className="eventcard__content">
        <h1 className="eventcard__title">Título</h1>
        <p className="eventcard__text">Ciudad</p>
        <p className="eventcard__text">Fecha</p>
      </div>
      <div className="eventcard__footer">
        <p>Creador</p>
        <div className="eventcard__attendees">
          <img src={person} alt="person_icon" className="eventcard__icon" />
          <p>3/8</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
