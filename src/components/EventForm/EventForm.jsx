import { useState } from 'react';
import { createEvent } from '../../services/event.services';

function EventForm() {
  const [event, setEvent] = useState({
    title: '',
  });

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
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Título del evento"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="date">
        <input
          type="datetime-local"
          name="date"
          id="date"
          placeholder="Fecha"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="numPeople">
        <input
          type="number"
          name="numPeople"
          id="numPeople"
          placeholder="Número de integrantes"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="desc">
        <textarea
          name="desc"
          id="desc"
          placeholder="Descripción"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="tags">
        <input
          type="text"
          name="tags"
          id="tags"
          placeholder="Etiquetas"
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Crear evento" />
    </form>
  );
}

export default EventForm;
