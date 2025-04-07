import PropTypes from 'prop-types';
import './DestinationCard.css';

const DestinationCard = ({ destination }) => {
  const { name, location, image, description, price } = destination;

  return (
    <div className="destination-card">
      <img src={image} alt={name} className="destination-image" />
      <div className="destination-info">
        <h2 className="destination-name">{name}</h2>
        <h3 className="destination-location">{location}</h3>
        <p className="destination-description">{description}</p>
        <div className="destination-price">{price}</div>
      </div>
    </div>
  );
};

DestinationCard.propTypes = {
  destination: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default DestinationCard; 