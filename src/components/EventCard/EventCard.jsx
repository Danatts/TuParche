import PropTypes from 'prop-types';
import './EventCard.styles.scss';
import person from '../../assets/icons/person.png';

function EventCard({ doc }) {
  return (
    <div className="eventcard">
      <div className="eventcard__content">
        <h1 className="eventcard__title">{doc.title}</h1>
        <p className="eventcard__text">{doc.city}</p>
        <p className="eventcard__text">{doc.date}</p>
      </div>
      <div className="eventcard__footer">
        <p>{doc.creator}</p>
        <div className="eventcard__attendees">
          <img src={person} alt="person_icon" className="eventcard__icon" />
          <p>{`0/${doc.numPeople}`}</p>
        </div>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  doc: PropTypes.instanceOf(Object),
};

EventCard.defaultProps = {
  doc: {},
};

export default EventCard;
