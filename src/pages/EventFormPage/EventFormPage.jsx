import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert/Alert';
import Button from '../../components/Button/Button';
import { EVENTS_ROUTE } from '../../routes/routes';
import { createEvent } from '../../services/event.services';
import './EventFormPage.styles.scss';

function EventFormPage() {
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    title: '',
  });

  const [notice, setNotice] = useState(null);

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent(event);
      setNotice('¡Tu plan ha sido creado!');
      setTimeout(() => {
        navigate(EVENTS_ROUTE);
      }, 1800);
    } catch (err) {
      setNotice('Algo salió mal :(');
      throw new Error(err.message);
    }
  };

  const handleBack = () => {
    navigate(EVENTS_ROUTE);
  };

  return (
    <div className="eventform">
      <Button text="&#8592; Volver" type="button" handleEffect={handleBack} />
      <form className="eventform__content" onSubmit={handleSubmit}>
        <label className="eventform__label" htmlFor="title">
          <input
            className="eventform__input"
            type="text"
            name="title"
            id="title"
            placeholder="Título del evento"
            onChange={handleChange}
          />
        </label>
        <div className="eventform__nextto">
          <label className="eventform__label" htmlFor="date">
            <input
              className="eventform__input"
              type="datetime-local"
              name="date"
              id="date"
              placeholder="Fecha"
              onChange={handleChange}
            />
          </label>
          <label className="eventform__label" htmlFor="numPeople">
            <input
              className="eventform__input"
              type="number"
              name="numPeople"
              id="numPeople"
              placeholder="Personas"
              onChange={handleChange}
            />
          </label>
        </div>
        <label className="eventform__label" htmlFor="desc">
          <textarea
            rows={5}
            className="eventform__textarea"
            name="desc"
            id="desc"
            placeholder="Descripción"
            onChange={handleChange}
          />
        </label>
        <label className="eventform__label" htmlFor="tags">
          <textarea
            rows={2}
            className="eventform__textarea"
            name="tags"
            id="tags"
            placeholder="Etiquetas (separadas por comas)"
            onChange={handleChange}
          />
        </label>
        <Button type="submit" text="Crear plan" />
      </form>
      {notice ? <Alert message={notice} /> : null}
    </div>
  );
}

export default EventFormPage;
