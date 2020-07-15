import React, { useState, Fragment } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  let options = { weekday: "long", day: "numeric", month: "long" };
  let today = new Date().toLocaleDateString("en-US", options);
  const [item, setItem] = useState("");
  const [all, setAll] = useState([]);

  const handleItem = (e) => setItem(e.target.value);
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/", { item })
      .then((res) => setAll(all.concat(res.data)));
    setItem("");
  };
  return (
    <Fragment>
      <div className="box" id="heading">
        <h1>{today}</h1>
      </div>

      <div className="box">
        {all.map((single) => (
          <div className="item">
            <input type="checkbox" />
            <p>{single}</p>
          </div>
        ))}
        <form className="item" onSubmit={submit}>
          <div>
            <input
              type="text"
              value={item}
              onChange={handleItem}
              placeholder="New Item"
              autoComplete="off"
            />
            <button type="submit" name="button">
              +
            </button>
          </div>
        </form>
      </div>

      <footer>Ryan Deng</footer>
    </Fragment>
  );
};

export default App;
