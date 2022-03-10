export default function ItemNutrients({ item }) {
  const nutrient = item.nutrients;
  return (
    <div>
      <h4>Servings per customer</h4>
      <br />
      <p>Amount per serving</p>
      <div>
        <p>Calories</p>
        <p>Calories from Fat</p>
      </div>
      <br />
      <h4>% Daily Value</h4>
      <div>
        <p>Total Fat</p>
        <p>{nutrient[0]}</p>
      </div>
      <div>
        <p>Saturated Fat</p>
        <p>{nutrient[1]}</p>
      </div>
      <div>
        <p>Cholestral</p>
        <p>{nutrient[2]}</p>
      </div>
      <div>
        <p>Sodium</p>
        <p>{nutrient[3]}</p>
      </div>
      <div>
        <p>Total Carbohydrate</p>
        <p>{nutrient[4]}</p>
      </div>
      <div>
        <p>Dietary Fiber</p>
        <p>{nutrient[5]}</p>
      </div>
    </div>
  );
}
