import { useState } from 'react';
import Gallery from './components/Gallery';
import './App.css'; // Reuse the existing CSS file (or replace with styles.css later)

function App() {
  const [tours, setTours] = useState([]);

  // Function to remove a tour by ID
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <div className="app">
      <h1>Tour Comparison App</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </div>
  );
}

export default App;