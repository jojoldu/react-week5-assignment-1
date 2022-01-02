/**
 *
 * @param regions {array}
 * @param target {number}
 * @returns {JSX.Element}
 * @constructor
 */
export default function RegionsView({ regions, target }) {
  if (!regions || regions.length === 0) {
    return (
      <div />
    );
  }

  return (
    <ol>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button">
            {name}
            {target === id && '(V)'}
          </button>
        </li>
      ))}
    </ol>
  );
}
