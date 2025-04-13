import React, { useEffect, useState } from 'react';
import TourCard from './TourCard.jsx';

// Gallery component: Displays a list of tours fetched from an API.
const Gallery = ({ tours, setTours, onRemove }) => {
    // State to indicate whether the data is still being loaded.
    const [loading, setLoading] = useState(true);
    // State to capture any errors that occur during the fetch process.
    const [error, setError] = useState(null);

    // Async function to retrieve tour data from the API.
    const fetchTours = async () => {
        try {
            // Fetch the data from the provided URL.
            const res = await fetch('https://www.course-api.com/react-tours-project');
            // Convert the fetched data into JSON format.
            const data = await res.json();
            // Update the tours state with the fetched data.
            setTours(data);
            // Indicate that loading is complete.
            setLoading(false);
        } catch (error) {
            // If an error occurs, set the error state.
            setError(true);
            // Stop the loading process.
            setLoading(false);
        }
    };

    // useEffect hook to fetch the tour data only once when the component mounts.
    useEffect(() => {
        fetchTours();
    }, []);

    // If an error was encountered, show an error message.
    if (error) {
        return <h2>Uh Oh, something went wrong</h2>;
    }
    // While the data is being fetched, display a loading message.
    if (loading) {
        return <h2>Loading...</h2>;
    }
    // If the tours array is empty, inform the user and provide a button to refresh the data.
    if (tours.length === 0) {
        return (
            <div className='length-zero'>
                <h2>No Tours remain</h2>
                <div className='refresh-button'>
                    {/* Clicking this button will re-run the fetchTours function */}
                    <button onClick={fetchTours}>Refresh tours</button>
                </div>
            </div>
        );
    }

    // Once data is loaded and available, map over the tours array to render each TourCard.
    return (
        <section className='tour-list'>
            {tours.map((tour) => (
                <TourCard
                    key={tour.id} // Unique identifier for each tour
                    {...tour} // Pass all tour properties as individual props
                    onRemove={onRemove} // Provide the callback to remove a tour
                />
            ))}
        </section>
    );
};

export default Gallery;
