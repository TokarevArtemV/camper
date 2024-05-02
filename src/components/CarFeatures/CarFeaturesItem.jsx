import { Icons } from '../';
import s from './CarFeaturesItem.module.css';

const CarFeaturesItem = ({ feature, value }) => {
  if (value < 1 || !feature) return;

  switch (feature) {
    case 'adults':
      return (
        <li className={s.featureItem}>
          <Icons id={'icon-adults'} />
          {`${value} adults`}
        </li>
      );
    case 'transmission':
      return (
        <li className={s.featureItem}>
          <Icons id={'icon-transmission'} />
          {`${value}`}
        </li>
      );
    case 'engine':
      return (
        <li className={s.featureItem}>
          <Icons id={'icon-engine'} />
          {`${value}`}
        </li>
      );
    case 'kitchen':
      return (
        <li className={s.featureItem}>
          <Icons id={'icon-kitchen'} />
          {`${value > 1 ? value : ''} kitchen`}
        </li>
      );
    case 'beds':
      return (
        <li className={s.featureItem}>
          <Icons id={'icon-beds'} fill="none" />
          {value > 1 ? `${value} beds` : `${value} bed`}
        </li>
      );
    case 'airConditioner':
      return (
        <li className={s.featureItem}>
          <Icons id={'icon-airConditioner'} />
          {value > 1 ? `${value} AC` : 'AC'}
        </li>
      );

    default:
      break;
  }
  return;
};

export default CarFeaturesItem;
