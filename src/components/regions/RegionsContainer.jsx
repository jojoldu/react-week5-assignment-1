import { useSelector } from 'react-redux';
import RegionsView from './RegionsView';

export default function RegionsContainer() {
  const regions = useSelector((state) => state.regions);

  return (
    <RegionsView
      regions={regions}
    />
  );
}
