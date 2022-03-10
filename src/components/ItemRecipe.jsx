export default function ItemRecipe({ item }) {
  const { title, body } = item;
  return (
    <div>
      <img src="" alt="coming soon" width={50} height={50} />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
