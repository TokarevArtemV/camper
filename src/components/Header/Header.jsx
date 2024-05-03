import { NavLink } from 'react-router-dom';
import { Button } from '../';
import { useTheme } from '../../hooks/use-theme';
import s from './Header.module.css';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme('light');
  };
  const handleDarkThemeClick = () => {
    setTheme('dark');
  };

  return (
    <header className={s.header}>
      <div className={`container`}>
        <nav className={s.header__navi}>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/cars'}>Catalog</NavLink>
          <NavLink to={'/favorites'}>Favorites</NavLink>
          {/* <Button onClick={handleLightThemeClick}>Ligth</Button>
          <Button onClick={handleDarkThemeClick}>Dark</Button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
