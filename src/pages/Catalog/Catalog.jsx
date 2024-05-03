import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiGetCars } from '../../redux/operations';
import { CarList, Filter } from '../../components';
import s from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetCars());
  }, [dispatch]);

  return (
    <section className={`${s.page_Catalog_container} container`}>
      <Filter />
      <CarList />
    </section>
  );
};

export default Catalog;
