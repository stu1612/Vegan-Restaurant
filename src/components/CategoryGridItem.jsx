import dish from "../assets/images/dish.jpg";
import dessert from "../assets/images/app_images/dessert_category_sm.jpg";
import drink from "../assets/images/app_images/drink_category_sm.jpg";

export default function CategoryGridItem() {
  return (
    <div className="grid">
      <div className="one">
        <img src={dish} alt="Stonebaked vegan pizza" className="category-img" />
      </div>
      <div className="two">
        <div className="content">
          <h2>Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            temporibus sint fugiat ullam recusandae incidunt deserunt debitis.
            Provident, ex incidunt?
          </p>
          <button>View more</button>
        </div>
      </div>
      <div className="three">
        <div className="content">
          <h2>Desserts</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            temporibus sint fugiat ullam recusandae incidunt deserunt debitis.
            Provident, ex incidunt?
          </p>
          <button>View more</button>
        </div>
      </div>
      <div className="four">
        <img
          src={dessert}
          alt="Chocolate blueberry vegan muffins"
          className="category-img"
        />
      </div>
      <div className="five">
        <img
          src={drink}
          alt="Strawberry and citrus smoothie"
          className="category-img"
        />
      </div>
      <div className="six">
        <div className="content">
          <h2>Drinks</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            temporibus sint fugiat ullam recusandae incidunt deserunt debitis.
            Provident, ex incidunt?
          </p>
          <button>View more</button>
        </div>
      </div>
    </div>
  );
}
