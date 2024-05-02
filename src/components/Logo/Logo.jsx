import { Link } from 'react-router-dom';
import logo from '../../assets/static/images/logo.png';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={s.container}>
      <img className={s.icon} src={logo} alt="Logo of camper" />
      <p className={s.title}>Camper</p>
    </Link>
  );
};

export default Logo;
