// npm
import { useParams, useNavigate } from "react-router-dom";
// components
import ProductItem from "../components/ProductItem";
// data
import data from "../data/db.json";

export default function Product() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const itemRecipe =
    data &&
    data
      .filter((item) => item.slug === slug)
      .map((item) => (
        <div key={item.id} className="product">
          <ProductItem item={item} />
          <div className="product-btn">
            <button onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>
      ));

  return <div className="screen">{itemRecipe}</div>;
}
