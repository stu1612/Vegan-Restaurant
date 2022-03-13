// components
import ProductIngredients from "./ProductIngredients";
import ProductNutrients from "./ProductNutrients";

export default function ProductItem({ item }) {
  const { title, body, thumbnailImage } = item;

  return (
    <div>
      <div className="image-wrapper">
        <img
          src={require(`../assets/images/recipes/${thumbnailImage}`)}
          alt={title}
        />
      </div>
      <div className="container-780 text-center">
        <div className="product-content">
          <h2 className="h2">{title}</h2>
          <p>{body}</p>
        </div>
      </div>
      <ProductIngredients item={item} />
      <ProductNutrients item={item} />
    </div>
  );
}
