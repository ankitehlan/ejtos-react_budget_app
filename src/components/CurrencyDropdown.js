import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "../Components.css";
import { TiChevronRight } from "react-icons/ti";
import CurrencyOption from "./CurrencyOption";

const CurrencyDropdown = () => {
  const { currencies, dispatch } = useContext(AppContext);
  const [isActive, setIsActive] = useState(false);
  const [dropdownText, setDropdownText] = useState("");
  const setSelectedCurrency = (symbol, label) => {
    setDropdownText(label);
    setIsActive(false);
    dispatch({
      type: "CHG_CURRENCY",
      payload: symbol,
    });
  };

  return (
    <div>
      <div className="dropdown" onClick={() => setIsActive(!isActive)}>
        <div className="selected">
          Currency({dropdownText})<TiChevronRight className="arrow" />
        </div>
      </div>
      {isActive && (
        <div className="options">
          {currencies.map((currency) => (
            <CurrencyOption
              className="options"
              func1={setSelectedCurrency}
              symbol={currency.symbol}
              value={currency.value}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
