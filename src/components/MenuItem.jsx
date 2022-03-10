// npm
import { Link } from "react-router-dom";

export default function MenuItem({ item }) {
  const { title, body, slug } = item;
  return (
    <div>
      <Link to={`/product/${slug}`}>
        <h2>{title}</h2>
        <p>{body}</p>
        <img src="" alt="coming soon.." />
      </Link>
    </div>
  );
}
