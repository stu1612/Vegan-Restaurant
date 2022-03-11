import CategoryGridItem from "../components/CategoryGridItem";
import Hero from "../components/Hero";
import OpeningHours from "../components/OpeningHours";

export default function Index() {
  return (
    <div>
      <Hero />
      <OpeningHours mobile={true} />
      <div className="container-960">
        <CategoryGridItem />
      </div>
    </div>
  );
}
