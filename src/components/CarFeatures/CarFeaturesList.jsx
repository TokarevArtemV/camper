import CarFeaturesItem from './CarFeaturesItem';
import s from './CarFeaturesList.module.css';

const CarFeaturesList = ({ carDatails }) => {
  const carFeatures = {
    adults: carDatails.adults,
    transmission: carDatails.transmission,
    engine: carDatails.engine,
    kitchen: carDatails.details.kitchen,
    beds: carDatails.details.beds,
    airConditioner: carDatails.details.airConditioner,
  };

  return (
    <ul className={s.featureContainer}>
      {Object.keys(carFeatures).length > 0 &&
        Object.keys(carFeatures).map((carFeature, index) => {
          return (
            <CarFeaturesItem
              key={index}
              feature={carFeature}
              value={carFeatures[carFeature]}
            />
          );
        })}
    </ul>
  );
};

export default CarFeaturesList;
