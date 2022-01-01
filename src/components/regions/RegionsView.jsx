export default function RegionsView({ regions, target }) {
  return (
    <ol>
      {regions.map(({ id, name }) => (
        <li key={id} value={name}>
          <button type="button">
            {name}
            {target === id ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ol>
  );
}
