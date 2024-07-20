// src/Gallery.js
import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {tours.map((tour) => {
        const [showMore, setShowMore] = useState(false);
        return (
          <div key={tour.id}>
            <h2>{tour.name}</h2>
            <button onClick={() => setTours(tours.filter(t => t.id !== tour.id))}>Not Interested</button>
            <p>{showMore ? tour.info : `${tour.info.substring(0, 100)}...`}</p>
            <button onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Read More"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;

// src/Gallery.js
import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  //... (same code as before)
};

export default Gallery;
