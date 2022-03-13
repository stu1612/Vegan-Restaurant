// npm
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <AiFillTwitterCircle color="white" size={34} className="icon" />
      <FaFacebook color="white" size={32} className="icon" />
    </div>
  );
}
