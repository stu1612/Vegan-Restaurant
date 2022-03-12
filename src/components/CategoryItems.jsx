// npm
import { Link } from "react-router-dom";
// images
import dish from "../assets/images/app_images/dish_sm.jpg";
import dessert from "../assets/images/app_images/dessert_sm.jpg";
import drink from "../assets/images/app_images/drink_sm.jpg";

export default function CategoryItems({ info }) {
  return (
    <div className="grid">
      <div className="one">
        <img src={dish} alt="Stonebaked vegan pizza" className="category-img" />
      </div>
      <div className="two">
        <div className="content bg-orange">
          <h2>Dishes</h2>
          <p>{info[0]}</p>
          <Link to="./dishes">
            <button>View more</button>
          </Link>
        </div>
      </div>
      <div className="four">
        <img
          src={dessert}
          alt="Chocolate blueberry vegan muffins"
          className="category-img"
        />
      </div>
      <div className="three">
        <div className="content bg-orange">
          <h2>Desserts</h2>
          <p>{info[1]}</p>
          <Link to="./desserts">
            <button>View more</button>
          </Link>
        </div>
      </div>
      <div className="five">
        <img
          src={drink}
          alt="Strawberry and citrus smoothie"
          className="category-img"
        />
      </div>
      <div className="six">
        <div className="content bg-orange">
          <h2>Drinks</h2>
          <p>{info[2]}</p>
          <Link to="./drinks">
            <button>View more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
