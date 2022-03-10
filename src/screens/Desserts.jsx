import { Link } from "react-router-dom";

export default function Dishes({ data }) {
  const { desserts } = data;

  const menuItems =
    desserts &&
    desserts.map((item) => (
      <div key={item.id}>
        <Link to={`/product/${item.slug}`}>
          <h2>{item.title}</h2>
          <img src="" alt="coming soon.." />
        </Link>
      </div>
    ));
  return (
    <div className="screen">
      Desserts
      {menuItems}
    </div>
  );
}
