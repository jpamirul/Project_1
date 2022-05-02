import React, { useState } from "react";

const BudgetInput = () => {
  const [inflow, setInflow] = useState("");
  const [outflow, setOutflow] = useState("");
  const [balanceflow, setBalanceFlow] = useState("");

  const submitBudget = async () => {
    const url = `http://127.0.0.1:8000/api/budget-input/`;
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        inFlow: inflow,
        outFlow: outflow,
        balanceFlow: balanceflow,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const handleSubmitBudget = (e) => {
    e.preventDefault();
    submitBudget();
  };

  const handleBalanceFlow = () => {
    const balance = inflow - outflow;
    setBalanceFlow(balance);
  };

  const handleInflow = (e) => {
    setInflow(e.target.value);
  };

  const handleOutFlow = (e) => {
    setOutflow(e.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmitBudget}>
        <label>
          Inflow:
          <input
            value={inflow}
            type="text"
            className="inflow"
            onChange={handleInflow}
          />
        </label>
        <label>
          Outflow:
          <input
            value={outflow}
            type="text"
            className="outflow"
            name="outflow"
            onChange={handleOutFlow}
          />
        </label>
        <label>{balanceflow}</label>
        <button className="budgetBtn" type="submit" onClick={handleBalanceFlow}>
          submit
        </button>
      </form>
    </>
  );
};

export default BudgetInput;
