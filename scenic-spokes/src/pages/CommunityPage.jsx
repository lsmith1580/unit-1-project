import { useState } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";
import { useEffect } from "react";

const defaultEvents = [
    { 
        title: "85th Sturgis Motorcycle Rally", 
        date: "August 1st - 10th, 2025",
        image: "/maxim-simonov-RUcDh47KhLk-unsplash.jpg",
        description: ""
    },
    {
        title: "Bike Night",
        date: "June 17th",
        image: "/dipankar-gogoi-ZxYIby8WSNI-unsplash.jpg",
        description: ""
    },
    {
        title: "Bike Show",
        date: "July 10th",
        image: "/ojo-toluwashe-_PcRWlbEqAE-unsplash.jpg",
        description: ""
    }
];

const CommunityPage = () => {

    const [userEvents, setUserEvents] = useState([]);

    useEffect(() => {
        const storedEvents = localStorage.getItem("userEvents");
        if (storedEvents) {
            setUserEvents(JSON.parse(storedEvents));
        } 
    }, []);

    useEffect (() => {
        localStorage.setItem("userEvents", JSON.stringify(userEvents));
    }, [userEvents]);

    const addEvent = (newEvent) => {
        setUserEvents(prevEvents => [...prevEvents, newEvent]);
    };

    const combinedEvents = [...defaultEvents, ...userEvents];

    return (
        <div className="community-page">
            <h1>Community Events</h1>
            <div className="event-grid">
                {combinedEvents.map((event, index) => (
                    <EventCard event={event} key={index}/>
                ))}
            </div>
            <EventForm addEvent={addEvent}/>
        </div>
    );
};

export default CommunityPage;