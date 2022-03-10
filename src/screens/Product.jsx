import { useParams } from "react-router-dom";

export default function Product({ data }) {
  const { dishes, desserts, drinks } = data;
  const allMenuItems = [...dishes, ...desserts, ...drinks];

  const { slug } = useParams();

  const recipe =
    allMenuItems &&
    allMenuItems
      .filter((item) => item.slug === slug)
      .map((item) => (
        <div key={item.id}>
          <img src="" alt="coming soon" width={50} height={50} />
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <br />
        </div>
      ));

  return (
    <div className="screen">
      Product
      {recipe}
    </div>
  );
}
