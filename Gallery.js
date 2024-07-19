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
      {tours.map((tour) => (
        <div key={tour.id}>
          <h2>{tour.name}</h2>
          <button onClick={() => setTours(tours.filter(t => t.id !== tour.id))}>Not Interested</button>
          <p>{tour.info}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
