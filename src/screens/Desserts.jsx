// components
import MenuItems from "../components/MenuItems";
import Hero from "../components/Hero";
// data
import data from "../data/db.json";

export default function Dishes() {
  const menuItems = data
    .filter((item) => item.cat === "dessert")
    .map((item) => <MenuItems item={item} key={item.id} />);

  return (
    <div>
      <Hero className="desserts" />
      <div className="container-780">
        <p>
          I've been vegan for over a year now, about 15 months. I changed to the
          vegan diet, and I feel fabulous; it's great. I wish I'd done it
          earlier - 'Karen Carney'
        </p>
        <div>{menuItems}</div>
      </div>
    </div>
  );
}
