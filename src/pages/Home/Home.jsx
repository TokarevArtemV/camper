import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCars } from '../../redux/carsSlice';
import s from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCars());
  }, []);
  return <div></div>;
};

export default Home;
