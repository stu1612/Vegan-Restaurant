// components
import MenuItem from "../components/MenuItem";

export default function Dishes({ data }) {
  const { dishes } = data;

  const menuItems =
    dishes && dishes.map((item) => <MenuItem item={item} key={item.id} />);
  return (
    <div className="screen">
      Dishes
      {menuItems}
    </div>
  );
}
