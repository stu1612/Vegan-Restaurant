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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
          optio? Delectus modi blanditiis labore laboriosam maxime voluptatem
          repellendus omnis harum fugiat culpa ipsa necessitatibus vitae
          possimus, molestiae sit maiores quia!
        </p>
        <div>{menuItems}</div>
      </div>
    </div>
  );
}
