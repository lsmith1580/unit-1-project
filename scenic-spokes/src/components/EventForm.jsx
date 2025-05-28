import { useState } from "react";
import "./EventForm.css"

const EventForm = ({ addEvent }) => {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        image: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title || !formData.date || !formData.image) {
            alert("Please fill out all required fields.");
            return;
        }

        addEvent(formData);

        setFormData({
            title: "",
            date: "",
            image: "",
            description: ""
        });
    };

    return (
        <div className="event-form-container">
            <h2>Create a New Event</h2>
            <form onSubmit={handleSubmit} className="event-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Event Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Event Description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <button type="submit">Add Event</button>
            </form>
        </div>
    );

};

export default EventForm;