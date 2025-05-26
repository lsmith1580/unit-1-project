const EventCard = ({event}) => {

    return (
        <div className="event-card">
            <div className="event-image">
                <img src={event.image} alt={event.title}/>
            </div>
            <div className="event-info">
                <h2>{event.title}</h2>
                <p>{event.date}</p>
            </div>
        </div>
    );
};

export default EventCard;