// components
import MenuItem from "../components/MenuItem";

export default function Drinks({ data }) {
  const { drinks } = data;

  const menuItems =
    drinks && drinks.map((item) => <MenuItem item={item} key={item.id} />);

  return (
    <div className="screen">
      Drinks
      {menuItems}
    </div>
  );
}
