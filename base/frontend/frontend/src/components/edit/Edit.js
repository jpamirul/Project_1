import React, { useState } from "react";

const Edit = (props) => {
  const [inflow, setInflow] = useState("");
  const [outflow, setOutflow] = useState("");

  const id = props.id;
  const updateBudget = async (id) => {
    try {
      const url = `http://127.0.0.1:8000/api/budget-update/${id}/`;
      const response = await fetch(url, {
        method: "PATCH",
        mode: "cors",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          inFlow: inflow,
          outFlow: outflow,
          balanceFlow: inflow - outflow,
        }),
      });
      if (response.status == 200) {
        props.getBudget();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInflow = (e) => {
    setInflow(e.target.value);
  };

  const handleOutFlow = (e) => {
    setOutflow(e.target.value);
  };

  const handleUpdateBudget = (e) => {
    e.preventDefault();
    updateBudget(id);
    setInflow("");
    setOutflow("");
    props.setAppear(false);
  };

  return (
    <div>
      <form onSubmit={handleUpdateBudget}>
        Inflow:
        <input onChange={handleInflow} value={inflow}></input>
        Outflow:
        <input onChange={handleOutFlow} value={outflow}></input>
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default Edit;
