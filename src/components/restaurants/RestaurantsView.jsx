export default function RestaurantsView({ restaurants }) {
  if (!restaurants || restaurants.length === 0) {
    return (
      <div />
    );
  }

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
