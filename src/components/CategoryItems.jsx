// images
import dish from "../assets/images/app_images/dish_sm.jpg";
import dessert from "../assets/images/app_images/dessert_sm.jpg";
import drink from "../assets/images/app_images/drink_sm.jpg";
import CategoryItem from "./CategoryItem";

export default function CategoryItems({ content }) {
  return (
    <div className="category-grid">
      <CategoryItem
        cn1="cat1"
        cn2="cat2"
        img={dish}
        alt="Vegan spinach ricotta pizza"
        title="Dishes"
        text={content[0]}
        route="./dishes"
      />
      <CategoryItem
        cn1="cat4"
        cn2="cat3"
        img={dessert}
        alt="Vegan chocolate blueberry nouse cake"
        title="Desserts"
        text={content[1]}
        route="./desserts"
      />
      <CategoryItem
        cn1="cat5"
        cn2="cat6"
        img={drink}
        alt="Strawberry citrus smoothie"
        title="Drinks"
        text={content[2]}
        route="./drinks"
      />
    </div>
  );
}
