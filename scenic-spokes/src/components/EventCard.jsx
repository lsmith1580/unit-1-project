const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="event-info">
        <h2>{event.title}</h2>
        <p>{formatDate(event.date)}</p>
      </div>
    </div>
  );
};

export default EventCard;
