import React, { useState } from 'react';
import Gallery from './components/Gallery.jsx'; // Importing the Gallery component
import './styles/styles.css'; // Importing the CSS styles

function App() {
    // UseState hook to manage the state of tours
    // Initializing tours with an empty array
    const [tours, setTours] = useState([]);

    // Function to remove a tour from the list
    // It filters out the tour with the specified id
    const removeTour = (id) => {
        setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    };

    return (
        <main>
            {/* Main heading of the application */}
            <h1>Tour Gallery</h1>

            {/* Gallery component to display the tours */}
            <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
        </main>
    );
}

export default App; // Exporting the App component as default