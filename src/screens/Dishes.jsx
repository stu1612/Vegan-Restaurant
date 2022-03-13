// components
import Hero from "../components/Hero";
import MenuItems from "../components/MenuItems";
// data
import data from "../data/db.json";

export default function Dishes() {
  const menuItems = data
    .filter((item) => item.cat === "dish")
    .map((item) => <MenuItems item={item} key={item.id} />);

  return (
    <div>
      <Hero className="dishes" />
      <h2 className="h2-heading">DISHES</h2>
      <div className="container-780">
        <div className="p-container-mobile">
          <p>
            Almost as soon as I went vegan, people started telling me that my
            skin looked great, and that I appeared younger, slimmer, and
            healthier. I'm convinced that of all the changes I've made to my
            lifestyle, it's the adoption of a vegan diet that has been best for
            me - physically, mentally, and certainly spiritually - 'Steve-O'
          </p>
        </div>
        <div>{menuItems}</div>
      </div>
    </div>
  );
}
