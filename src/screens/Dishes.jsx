// components
import Hero from "../components/Hero";
import MenuItems from "../components/MenuItems";

export default function Dishes({ data }) {
  const { dishes } = data;

  const menuItems =
    dishes && dishes.map((item) => <MenuItems item={item} key={item.id} />);
  return (
    <div>
      <Hero className="dishes" />
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
