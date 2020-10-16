import React from "react";
import {withRouter} from "react-router-dom";
const GoBack = (props) => {
  
  const RedirectHandle = () => {
    props.history.push("/");
  };
  const goBackHandle = () => {
      props.history.goBack();
  };
  return (
    <React.Fragment>
      <div>
        <button className="btn btn-info mr-2" onClick={RedirectHandle}>Back To Home</button>
        <button className="btn btn-danger ml-2" onClick={goBackHandle}>Back</button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(GoBack);
