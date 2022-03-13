// npm
import { Link } from "react-router-dom";

export default function CategoryItem(props) {
  const { cn1, cn2, img, alt, title, text, route } = props;
  return (
    <>
      <div className={cn1}>
        <img src={img} alt={alt} className="category-img" />
      </div>
      <div className={cn2}>
        <div className="content bg-orange">
          <h2 className="h2">{title}</h2>
          <p>{text}</p>
          <div className="content-btn">
            <Link to={route}>
              <button className="button">View more</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
