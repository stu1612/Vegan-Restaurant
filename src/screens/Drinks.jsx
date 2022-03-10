import { Link } from "react-router-dom";

export default function Drinks({ data }) {
  const { drinks } = data;

  const menuItems =
    drinks &&
    drinks.map((item) => (
      <div key={item.id}>
        <Link to={`/product/${item.slug}`}>
          <h2>{item.title}</h2>
          <img src="" alt="coming soon.." />
        </Link>
      </div>
    ));
  return (
    <div className="screen">
      Drinks
      {menuItems}
    </div>
  );
}
