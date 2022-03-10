// npm
import { Link } from "react-router-dom";

export default function MenuItem({ item }) {
  const { title, body, slug, thumbnailImage } = item;
  return (
    <div>
      <Link to={`/product/${slug}`}>
        <h2>{title}</h2>
        <p>{body}</p>
        <div style={{ height: "200px", width: "200px" }}>
          <img
            src={require(`../assets/images/recipes/${thumbnailImage}`)}
            alt={title}
            style={{ objectFit: "cover" }}
            height={"100%"}
            width={"100%"}
          />
        </div>
      </Link>
    </div>
  );
}
