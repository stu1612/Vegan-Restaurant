// npm
import { useNavigate } from "react-router-dom";
// components
import CategoryItems from "../components/CategoryItems";
import Hero from "../components/Hero";
import OpeningHours from "../components/OpeningHours";

export default function Index() {
  const navigate = useNavigate();

  // This can be either inside the JSX or in a separate JSON
  const content = [
    "Rooted specializes in delicious food featuring fresh ingredients and masterful preparation by the our culinary team. Whether you are ordering a meal or grabbing a drink and pizza at the bar, our lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.",
    "Our chefs push the envelope when it comes to Vegan desserts - we take the traditional menus and with our innovative techniques provide a uique offerings of delicous sweet treats",
    "We are a tight-knit, fun-loving, devoted team of healthy and delicious smoothies. We blend, we tell stories, we deliver a taste expereince never known and treat every smoothie with pure vegan goodness. Enjoy!",
  ];

  return (
    <div>
      <Hero className="home" />
      <div className="title-container-mobile">
        <h1 className="h1-mobile">Rooted</h1>
        <h2 className="h2-mobile">100% plant based</h2>
        <button className="button w-90" onClick={() => navigate("./contact")}>
          Book a table
        </button>
      </div>
      <h1 className="h1-heading">ROOTED</h1>
      <h2 className="sub-heading">100% plant based</h2>
      <OpeningHours mobile={true} />
      <div className="container-1200">
        <CategoryItems content={content} />
      </div>
    </div>
  );
}
