// components
import BookingForm from "../components/BookingForm";
import GoogleMap from "../components/GoogleMap";
// images
import image from "../assets/images/app_images/owner_md.jpg";

export default function Contact() {
  return (
    <div>
      <div className="image-wrapper">
        <img src={image} alt="Business owner of Rooter Restuarnt" />
      </div>
      <div className="container-780 text-center">
        <div className="product-content">
          <h3 className="h3">Opening Times</h3>
          <p>Mon to Friday 11:00 - 21:00</p>
          <p>Saturday 12:00 - 22:00</p>
          <p>Sunday CLOSED</p>
        </div>
      </div>
      {/* Good, making these 2 individual components */}
      <BookingForm />
      <GoogleMap />
    </div>
  );
}
