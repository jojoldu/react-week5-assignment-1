import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantRegions from './RestaurantRegions';

import { checkRegion } from './actions';

export default function RestaurantRegionsContainer() {
  const dispatch = useDispatch();

  const handleClickRegion = () => {
    dispatch(checkRegion());
  };

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <RestaurantRegions
      regions={regions}
      onClickRegion={handleClickRegion}
    />
  );
}
