// good
export default function ProductIngredients({ item }) {
  const ingredients = item.ingredients;

  const ingredientsList = ingredients.map((ingredient, index) => (
    <li key={index} className="ingredient-li">
      {ingredient}
    </li>
  ));

  return (
    <div className="base ingredients">
      <h3 className="h3">Ingredients</h3>
      {ingredientsList}
    </div>
  );
}
