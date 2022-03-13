export default function ProductNutrients({ item }) {
  const nutrient = item.nutrients;
  return (
    <div>
      <div className="base nutrients">
        <h3 className="h3">Nutrition Facts</h3>

        <p>Servings per customer</p>
        <div className="line" />
        <p>Amount per serving</p>
        <div className="row">
          <p>Calories</p>
          <p>Calories from Fat</p>
        </div>
        <div className="line" />
        <h4>% Daily Value</h4>
        <div className="row">
          <p>Total Fat</p>
          <p>{nutrient[0]}</p>
        </div>
        <div className="row">
          <p>Saturated Fat</p>
          <p>{nutrient[1]}</p>
        </div>
        <div className="row">
          <p>Cholestral</p>
          <p>{nutrient[2]}</p>
        </div>
        <div className="row">
          <p>Sodium</p>
          <p>{nutrient[3]}</p>
        </div>
        <div className="row">
          <p>Total Carbohydrate</p>
          <p>{nutrient[4]}</p>
        </div>
        <div className="row">
          <p>Dietary Fiber</p>
          <p>{nutrient[5]}</p>
        </div>
        <p>Sugars 8g</p>
        <p>Protein</p>
      </div>
    </div>
  );
}
