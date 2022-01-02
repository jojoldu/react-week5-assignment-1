export default function CategoriesView({ categories, target }) {
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
