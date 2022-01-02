export default function CategoriesView({ categories, target }) {
  if (!categories || categories.length === 0) {
    return (
      <div />
    );
  }

  return (
    <ol>
      {categories.map(({ id, name }) => (
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
