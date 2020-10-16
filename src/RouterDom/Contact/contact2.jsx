import React from "react";
import WithHOC from "../HOC/withHOC";

const Contact2 = (props) => {
  console.log(props);
  const { count, name, setCount } = props;
  return (
    <React.Fragment>
      <h1 className="text-primary">{count}</h1>

      <button className="btn btn-outline-primary" onClick={setCount}>Klik saya</button>

      <h2>{name}</h2>
    </React.Fragment>
  );
};

export default WithHOC(Contact2, 100);
