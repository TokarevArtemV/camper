import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components';
import { Catalog, Favorites, Home } from './pages';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/cars" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<SharedLayout />} />
    </Routes>
  );
}

export default App;
