import React from "react";

const OperatorButton = props => {
  return (
    <button className="operator-button">
      {props.char}
    </button>
  );
};

export default OperatorButton