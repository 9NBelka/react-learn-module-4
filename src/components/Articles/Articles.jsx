function Articles({items}) {
  return (
        <ul>
          {items.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
              <h3>{item.author}</h3>
            </li>
          ))}
        </ul>
  );
}

export default Articles