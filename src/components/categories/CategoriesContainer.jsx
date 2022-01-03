import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CategoriesView from './CategoriesView';
import { fetchCategories } from '../../reducer/action/actions';

export default function CategoriesContainer() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <CategoriesView
      categories={categories}
    />
  );
}
