// components
import MenuItem from "../components/MenuItem";

export default function Dishes({ data }) {
  const { desserts } = data;

  const menuItems =
    desserts && desserts.map((item) => <MenuItem item={item} key={item.id} />);
  return (
    <div className="screen">
      Desserts
      {menuItems}
    </div>
  );
}
