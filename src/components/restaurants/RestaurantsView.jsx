export default function RestaurantsView({ restaurants }) {
  return (
    <ol>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ol>
  );
}
