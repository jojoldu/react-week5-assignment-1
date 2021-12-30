export default function RegionsView({ regions }) {
  return (
    <ol>
      {regions.map(({ id, name }) => (
        <li key={id} value={name}>
          {name}
        </li>
      ))}
    </ol>
  );
}
