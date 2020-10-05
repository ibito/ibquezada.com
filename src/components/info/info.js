import React from "react";
import moment from "moment";

function Info(props) {
  const ageMoment = moment();
  const age = ageMoment.diff("1981-09-10", "years");
  return (
    <div className="info-container">
      <div className="name">
        {props.name}
        <span className="blinking-cursor"></span>
      </div>
      <div>AGE: {age}</div>
      <div>EMAIL: ib@ibquezada.com</div>
      <div>Something</div>
    </div>
  );
}

export default Info;
