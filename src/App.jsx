import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setRestaurants, setCategories } from './actions';
import RestaurantsCreatorContainer from './RestaurantsCreatorContainer';
import RestaurantsContainer from './RestaurantsContainer';
import CategoriesContainer from './CategoriesContainer';

function loadRestaurants({ dispatch }) {
  // todo load restaurants
  // api server -> fetch data
  const restaurants = [];
  dispatch(setRestaurants(restaurants));
}

function loadCategories({ dispatch }) {
  // todo load restaurants
  // api server -> fetch data
  const categories = [];
  dispatch(setCategories(categories));
}
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadCategories({ dispatch });
    loadRestaurants({ dispatch });
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <CategoriesContainer />
      <RestaurantsContainer />
      <RestaurantsCreatorContainer />
    </div>
  );
}
