import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiGetCars } from '../../redux/operations';
import { Filter } from '../../components';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetCars());
  }, [dispatch]);

  return (
    <main className="container">
      <Filter />
    </main>
  );
};

export default Home;
