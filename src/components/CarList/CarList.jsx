import { useSelector } from 'react-redux';
import { Button, CarItem } from '../';
import { selectAllCars } from '../../redux/selector';
import s from './CarList.module.css';

const CarList = () => {
  const cars = useSelector(selectAllCars);

  const handleLoadMore = () => {};

  return (
    <ul className={`${s.carList}`}>
      {cars.length > 0 &&
        cars.map((car, index) => <CarItem key={index} carDatails={car} />)}
      <Button onClick={handleLoadMore} className={'loadMore'}>
        Load more
      </Button>
    </ul>
  );
};

export default CarList;
