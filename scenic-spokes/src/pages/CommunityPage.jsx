import { useState } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";
import { useEffect } from "react";
import "./CommunityPage.css"
import { useRef } from "react";

const defaultEvents = [
    { 
        id: 1,
        title: "85th Sturgis Rally", 
        date: "2025-08-01",
        image: "/maxim-simonov-RUcDh47KhLk-unsplash.jpg",
        description: ""
    },
    {
        id: 2,
        title: "Bike Night",
        date: "2025-06-17",
        image: "/dipankar-gogoi-ZxYIby8WSNI-unsplash.jpg",
        description: ""
    },
    {
        id: 3,
        title: "Bike Show",
        date: "2025-07-09",
        image: "/ojo-toluwashe-_PcRWlbEqAE-unsplash.jpg",
        description: ""
    }
];

const CommunityPage = () => {

    const [userEvents, setUserEvents] = useState([]);

    const isInitialMount = useRef(true);

    useEffect(() => {
        const storedEvents = localStorage.getItem("userEvents");
        if (storedEvents) {
            setUserEvents(JSON.parse(storedEvents));
        } 
    }, []);

    useEffect (() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        localStorage.setItem("userEvents", JSON.stringify(userEvents));
    }, [userEvents]);

    const combinedEvents = [...defaultEvents, ...userEvents];

    const addEvent = (newEvent) => {
        const highestId = combinedEvents.reduce((max, event) => Math.max(max, event.id), 0);
        const newEvents = { ...newEvent, id: highestId + 1};
        setUserEvents(prevEvents => [...prevEvents, newEvents]);
    };

    return (
        <div className="community-page">
            <h1>Community Events</h1>
            <div className="event-grid">
                {combinedEvents.map((event) => (
                    <EventCard event={event} key={event.id}/>
                ))}
            </div>
            <EventForm addEvent={addEvent}/>
        </div>
    );
};

export default CommunityPage;