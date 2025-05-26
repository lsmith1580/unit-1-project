import EventCard from "../components/EventCard";


const events = [
    {
        id: 1, 
        title: "85th Sturgis Motorcycle Rally", 
        date: "August 1st - 10th, 2025",
        image: "/maxim-simonov-RUcDh47KhLk-unsplash.jpg"
    },
    {
        id: 2,
        title: "Bike Night",
        date: "June 17th",
        image: "/dipankar-gogoi-ZxYIby8WSNI-unsplash.jpg"
    },
    {
        id: 3,
        title: "Bike Show",
        date: "July 10th",
        image: ""
    }
];


const CommunityPage = () => {
    
    const handleAddEvent = () => {

    }

    return (
        <div className="community-page">
            <h2>Community Events</h2>
            <div className="event-grid">
                {events.map(event => 
                    <EventCard event={event} key={event.id}/>
                )}
            </div>
            <form onSubmit={handleAddEvent} className="event-form">
                <input type="text" placeholder="Add an event" className="event-input"/>
            </form>
        </div>
    );
};

export default CommunityPage;