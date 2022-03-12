// npm
import { Link } from "react-router-dom";

export default function MenuItems({ item }) {
  const { title, body, slug, thumbnailImage } = item;
  return (
    <Link to={`/product/${slug}`} className="menu-items">
      <img
        src={require(`../assets/images/recipes/${thumbnailImage}`)}
        alt={title}
        className="menu-img menu1"
      />
      <div className="menu2 menu-content">
        <h2>{title}</h2>
        <p>{body}</p>
        <p>More ..</p>
      </div>
    </Link>
  );
}
