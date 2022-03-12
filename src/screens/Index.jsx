// components
import CategoryItems from "../components/CategoryItems";
import Hero from "../components/Hero";
import OpeningHours from "../components/OpeningHours";

export default function Index() {
  const info = [
    "Rooted specializes in delicious food featuring fresh ingredients and masterful preparation by the our culinary team. Whether you are ordering a meal or grabbing a drink and pizza at the bar, our lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.",
    "Our chefs push the envelope when it comes to Vegan desserts - we take the traditional menus and with our innovative techniques provide a uique offerings of delicous sweet treats",
    "We are a tight-knit, fun-loving, devoted team of healthy and delicious smoothies. We blend, we tell stories, we deliver a taste expereince never known and treat every smoothie with pure vegan goodness. Enjoy!",
  ];
  return (
    <div>
      <Hero className="home" />
      <OpeningHours mobile={true} />
      <div className="container-960">
        <CategoryItems info={info} />
      </div>
    </div>
  );
}
