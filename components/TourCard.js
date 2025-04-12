import { useState } from 'react';

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h3>{name}</h3>
        <p className="price">${price}</p>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="remove-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;