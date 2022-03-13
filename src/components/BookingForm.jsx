export default function BookingForm() {
  const date = new Date();
  return (
    <div>
      <form>
        <h3 className="text-center h3">Book a table</h3>
        <div className="col input">
          <label>First Name</label>
          <input type="text" placeholder="Ex: Rooted" />
        </div>
        <div className="col input">
          <label>Second Name</label>
          <input type="text" placeholder="Ex: Restuarant" />
        </div>
        <div className="col input">
          <label>Email</label>
          <input
            type="email"
            id="email"
            pattern=".+@globex\.com"
            size="30"
            placeholder="Ex: rooted@vegan.se"
          />
        </div>
        <div className="col input">
          <label>Date of booking</label>
          <input
            type="date"
            id="date"
            value={date}
            min={date}
            max="2022-12-31"
            readOnly
          />
        </div>
        <div className="col input">
          <label>Time of Booking</label>
          <input type="time" id="time" min="11:00" max="22:00" required />
        </div>
        <div className="form-btn">
          <input type="button" className="button" value="Submit" />
        </div>
      </form>
    </div>
  );
}
