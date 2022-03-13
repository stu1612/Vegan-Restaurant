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
      <h2 className="h2-heading">DRINKS</h2>
      <div className="container-780">
        <div className="p-container-mobile">
          <p>
            I thought a vegan diet would be too difficult, being on the road so
            much, but it's been far easier than I thought - 'Michelle Forbes'
          </p>
        </div>
        <div>{menuItems}</div>
      </div>
    </div>
  );
}
