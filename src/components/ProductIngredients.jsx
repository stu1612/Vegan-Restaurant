export default function ProductIngredients({ item }) {
  const ingredients = item.ingredients;

  const ingredientsList = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (
    <div className="base ingredients">
      <h3>Ingredients</h3>
      {ingredientsList}
    </div>
  );
}
