import { useState } from 'react';
import { Button, CarFeaturesList, Icons, Modal, CarModal, Reviews } from '../';
import s from './CarItem.module.css';

const CarItem = ({ carDatails } = {}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  const { _id, gallery, name, price, rating, reviews, location, description } =
    carDatails;
  return (
    <>
      <li className={s.card_container}>
        <div className={s.car_image}>
          <img
            src={
              gallery[0] ||
              'https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*'
            }
            alt="car_image"
          />
        </div>
        <div className={s.car_description}>
          <div className={s.title_container}>
            <h3>{`${name}`}</h3>
            <span>&#8364;{`${price}.00`}</span>
            <button className={s.button_favorite}>
              <Icons id={'icon-heart'} fill="none" size="24" />
            </button>
          </div>
          <Reviews rating={rating} reviews={reviews} location={location} />
          <span className={s.text_description}>{description}</span>
          <CarFeaturesList carDatails={carDatails} limits={5} />
          <Button onClick={handleCloseModal} className={'showMore'}>
            Show more
          </Button>
        </div>
      </li>

      {isOpenModal && (
        <Modal onClose={handleCloseModal} className="modal">
          <CarModal id={_id} onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default CarItem;
