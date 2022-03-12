// components
import Hero from "../components/Hero";
import MenuItems from "../components/MenuItems";
// data
import data from "../data/db.json";

export default function Drinks() {
  const menuItems = data
    .filter((item) => item.cat === "drink")
    .map((item) => <MenuItems item={item} key={item.id} />);

  return (
    <div>
      <Hero className="drinks" />
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
