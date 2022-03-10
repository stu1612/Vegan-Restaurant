// npm
import { useParams } from "react-router-dom";
// components
import ItemNutrients from "../components/ItemNutrients";
import ItemRecipe from "../components/ItemRecipe";

export default function Product({ data }) {
  const { dishes, desserts, drinks } = data;
  const allMenuItems = [...dishes, ...desserts, ...drinks];

  const { slug } = useParams();

  const itemRecipe =
    allMenuItems &&
    allMenuItems
      .filter((item) => item.slug === slug)
      .map((item) => (
        <div key={item.id}>
          <ItemRecipe item={item} />
          <ItemNutrients item={item} />
        </div>
      ));

  return (
    <div className="screen">
      Product
      {itemRecipe}
    </div>
  );
}
