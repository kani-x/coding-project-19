import { useState, useEffect } from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, setTours, onRemove }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    try {
      const response = await fetch('https://course-api.com/react-tours-project');
      if (!response.ok) throw new Error('Failed to fetch tours');
      const data = await response.json();
      setTours(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <h2>Loading tours...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (tours.length === 0) return <h2>No tours left! Refresh to reload.</h2>;

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Gallery;