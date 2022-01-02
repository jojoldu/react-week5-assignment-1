import RegionsContainer from './components/regions/RegionsContainer';
import CategoriesContainer from './components/categories/CategoriesContainer';
import RestaurantsContainer from './components/restaurants/RestaurantsContainer';

export default function App() {
  return (
    <div>
      <h1>레스토랑 목록</h1>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
