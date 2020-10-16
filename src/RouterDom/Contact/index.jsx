import React from "react";
import Contact1 from './contact1'
import Contact2 from './contact2'

const Contact = () => {
  return (
    <React.Fragment>
      <h3 className="text-center">Contact</h3>
      <div className="row">
        <div className="col-6 text-center">
          <Contact1/>
        </div>
        <div className="col-6 text-center">
        <Contact2/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;