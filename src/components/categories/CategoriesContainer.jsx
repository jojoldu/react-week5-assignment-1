import { useSelector } from 'react-redux';
import CategoriesView from './CategoriesView';

export default function CategoriesContainer() {
  const categories = useSelector((state) => state.categories);

  return (
    <CategoriesView
      categories={categories}
    />
  );
}
