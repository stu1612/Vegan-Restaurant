// components
import CategoryItems from "../components/CategoryItems";
import Hero from "../components/Hero";
import OpeningHours from "../components/OpeningHours";

export default function Index() {
  const info = ["Hello 1", "Hello 2", "Hello 3"];
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
