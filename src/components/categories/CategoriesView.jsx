export default function CategoriesView({ categories }) {
  return (
    <ol>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button type="button">
            {name}
          </button>
        </li>
      ))}
    </ol>
  );
}
