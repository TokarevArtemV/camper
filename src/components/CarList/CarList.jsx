import { useSelector } from 'react-redux';
import { CarItem } from '../';
import s from './CarList.module.css';
import { selectAllCars } from '../../redux/selector';

const CarList = () => {
  const cars = useSelector(selectAllCars);

  return (
    <ul className={s.carList}>
      {cars.length > 0 &&
        cars.map((car, index) => <CarItem key={index} carDatails={car} />)}
    </ul>
  );
};

export default CarList;
