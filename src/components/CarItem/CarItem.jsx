import { Button, CarFeaturesList, Icons } from '../';
import s from './CarItem.module.css';

const CarItem = ({ carDatails } = {}) => {
  const { gallery, name, price, rating, reviews, location, description } =
    carDatails;
  return (
    <li className={s.cardContainer}>
      <div className={s.carImage}>
        <img
          src={
            gallery[0] ||
            'https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*'
          }
          alt="car_image"
        />
      </div>
      <div className={s.carDescription}>
        <div className={s.titleContainer}>
          <h3>{`${name}`}</h3>
          <span>&#8364;{`${price}.00`}</span>
          <button className={s.buttonFavorite}>
            <Icons id={'icon-heart'} fill="none" />
          </button>
        </div>
        <div className={s.reviewsContainer}>
          <span>
            <Icons
              id={'icon-star'}
              stroke={`var(--primary-orange)`}
              fill={`var(--primary-orange)`}
            />
            {rating}
            {reviews.length === 1
              ? `(${reviews.length} review)`
              : `(${reviews.length} reviews)`}
          </span>
          <span>
            <Icons id={'icon-map-pin'} fill="none" />
            {location}
          </span>
        </div>
        <span className={s.textDescription}>{description}</span>
        <CarFeaturesList carDatails={carDatails} />
        <Button className={`${s.button} showMore`}>Show more</Button>
      </div>
    </li>
  );
};

export default CarItem;
