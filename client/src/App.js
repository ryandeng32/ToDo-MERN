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
      <h1>{today}</h1>
      <ul>
        {all.map((single) => (
          <li key={single}>{single}</li>
        ))}
      </ul>
      <form onSubmit={submit}>
        <div>
          Enter Item: <input value={item} onChange={handleItem} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </Fragment>
  );
};

export default App;
