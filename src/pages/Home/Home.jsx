import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiGetCars } from '../../redux/operations';
import { CarList } from '../../components';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetCars());
  }, [dispatch]);

  return (
    <div>
      <CarList />
    </div>
  );
};

export default Home;
