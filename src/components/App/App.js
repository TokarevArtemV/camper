import { Route, Routes } from 'react-router-dom';
import { Catalog, Favorites, Home } from '../../pages';
import { SharedLayout } from '../';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
