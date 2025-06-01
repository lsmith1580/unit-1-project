import { useState } from "react";
import Button from "./Button";
import ConfirmModal from "./ConfirmModal";

const EventCard = ({ event, onDelete, isUserEvent }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    onDelete(event.id);
    setShowConfirm(false);
  };

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
        <p>{event.description}</p>
        {isUserEvent && (
          <div className="button-group">
            <Button variant="danger" onClick={() => setShowConfirm(true)}>
              Delete
            </Button>
          </div>
        )}
      </div>

      {showConfirm && (
        <ConfirmModal
          message="Are you sure you want to delete this event?"
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
};

export default EventCard;
