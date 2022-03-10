import { Link } from "react-router-dom";

export default function Dishes({ data }) {
  const { dishes } = data;

  const menuItems =
    dishes &&
    dishes.map((item) => (
      <div key={item.id}>
        <Link to={`/product/${item.slug}`}>
          <h2>{item.title}</h2>
          <img src="" alt="coming soon.." />
        </Link>
      </div>
    ));
  return (
    <div className="screen">
      Dishes
      {menuItems}
    </div>
  );
}
