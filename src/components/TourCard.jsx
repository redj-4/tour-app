import React, { useState } from "react";

const TourCard = ({ id, name, info, price, image, onRemove }) => {  // Props destructuring
    const [readMore, setReadMore] = useState(false); // UseState hook to manage the readMore state
    // readMore state determines whether to show full info or a truncated version
    return (
        <article className='tour-card'>
            {/* Tour header with name and price */}
            <div className="tour-header">
                <h3>{name}</h3>
                <h5>${price}</h5>
            </div>
            {/* Tour image */}
            <img src={image} alt={name} />
            {/* Conditional rendering of the info text */}
            <p>{readMore ? info : `${info.slice(0, 70)}...`}</p>
            <div className="button-container">
                {/* Button to toggle information */}
                <button className="read-more" onClick={() => setReadMore(!readMore)}>
                    {readMore ? "Show Less" : "Read More"}
                </button>
                {/* Button to remove the tour by its id */}
                <button className="button-remove" onClick={() => onRemove(id)}>Remove Tour</button>
            </div>
        </article>
    );
};

export default TourCard;