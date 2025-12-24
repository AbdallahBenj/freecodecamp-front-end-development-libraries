import "./Currency-converter.css";

import { useState, useMemo } from "react";

const CurrencyConverter = () => {
  const currency = ["USD", "EUR", "GBP", "JPY"];

  const currencyEx = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
  };

  const [convertCurr, setConvertCurr] = useState({
    amount: 1,
    startCurr: "USD",
    targetCurr: "USD",
  });

  const { startCurr, targetCurr, amount } = convertCurr;

  const baseCurrency = useMemo(() => {
    return currencyEx[startCurr] * amount;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startCurr, amount]);

  const total = baseCurrency / currencyEx[targetCurr];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConvertCurr((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card">
      <h1 className="title">Currency Converter</h1>
      <form className="currency-form" onSubmit={handleForm}>
        <label>
          amount: <br />
          <input
            min="0"
            type="number"
            name="amount"
            value={amount}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Start Currency: <br />
          <select name="startCurr" value={startCurr} onChange={handleChange}>
            {currency.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </label>

        <br />
        <label>
          Target Currency: <br />
          <select name="targetCurr" value={targetCurr} onChange={handleChange}>
            {currency.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </label>
      </form>
      <p className="result">
        Total:{" "}
        <span style={{ color: "green" }}>
          {total.toFixed(2)} {targetCurr}
        </span>
      </p>
    </div>
  );
};

export default CurrencyConverter;
