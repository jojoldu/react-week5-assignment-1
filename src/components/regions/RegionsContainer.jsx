import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RegionsView from './RegionsView';
import { fetchRegions } from '../../reducer/action/actions';

export default function RegionsContainer() {
  const regions = useSelector((state) => state.regions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRegions());
  }, []);

  return (
    <RegionsView
      regions={regions}
    />
  );
}
