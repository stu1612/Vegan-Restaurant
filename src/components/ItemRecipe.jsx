export default function ItemRecipe({ item }) {
  console.log(item);
  const { title, body, thumbnailImage } = item;

  return (
    <div>
      <img
        src={require(`../assets/images/recipes/${thumbnailImage}`)}
        alt={title}
        height={400}
        width={400}
      />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
