// npm
import { useParams } from "react-router-dom";
// components
import ProductNutrients from "../components/ProductNutrients";
import ProductItem from "../components/ProductItem";
import ProductIngredients from "../components/ProductIngredients";

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
          <ProductItem item={item} />
          <ProductIngredients item={item} />
          <ProductNutrients item={item} />
        </div>
      ));

  return <div className="screen">{itemRecipe}</div>;
}
