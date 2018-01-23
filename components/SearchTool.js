import Link from 'next/link';

const SearchTool = () => (
  <section>
    <div className="container">
      <div className="row">
        <form className="form-horizontal">
          <div className="col-sm-3">
            <label>Keywords</label>
            <input type="text" placeholder="Cities, Keywords etc." name="where" />
          </div>
          <div className="col-sm-3">
            <label>Check In</label>
            <input type="text" name="date-check-in" className="datepicker datepicker--fluid" placeholder="Check in date" />
          </div>
          <div className="col-sm-3">
            <label>Check Out</label>
            <input type="text" name="date-check-out" className="datepicker datepicker--fluid" placeholder="Check out date" />
          </div>
          <div className="col-sm-1">
            <label>Guests</label>
            <div className="input-select input-select--borderless">
              <select name="guests">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="6+">6+</option>
              </select>
            </div>
          </div>
          <div className="col-sm-2">
            <button type="submit" className="btn btn--primary">Search</button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default SearchTool;