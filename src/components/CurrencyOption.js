import React from "react";

const CurrencyOption = (props) => {
  return (
    <div
      className="option"
      onClick={() => {
        props.func1(props.symbol, props.value);
      }}
    >
      {props.value}
    </div>
  );
};

export default CurrencyOption;
