import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import HeatMap from "../charts/HeatMap";
import PieChart from "../charts/PieChart";

const BudgetInput = () => {
  const [inflow, setInflow] = useState("");
  const [outflow, setOutflow] = useState("");
  const [balanceflow, setBalanceFlow] = useState("");

  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");

  const [pieInflow, setPieInflow] = useState("");
  const [pieOutflow, setPieOutflow] = useState("");

  console.log(data);
  console.log(pieInflow);

  const onDateChange = (nextDate) => {
    setDate(nextDate);
    console.log(date);
    let months = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };
    let newArr = nextDate.toString().split(" ");
    let newDate = `${newArr[3]}-${months[newArr[1]]}-${newArr[2]}`;

    setFormattedDate(newDate);
  };

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
        date: formattedDate,
      }),
    });
    const data = await response.json();
  };

  const getBudget = async () => {
    const url = `http://127.0.0.1:8000/api/budget-details/`;
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
    });
    const retrieveData = await response.json();
    setData(retrieveData);
    // setPieInflow(retrieveData[0].inFlow);
    // setPieOutflow(retrieveData[0].outFlow);
  };

  const getPieBudget = async () => {
    const url = `http://127.0.0.1:8000/api/budget-pie/${date}`;
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
    });
    const retrieveData = await response.json();
    setData(retrieveData);
    setPieInflow(retrieveData[0].inFlow);
    setPieOutflow(retrieveData[0].outFlow);
  };

  const deleteBudget = async (id) => {
    try {
      const url = `http://127.0.0.1:8000/api/budget-delete/${id}/`;
      const response = await fetch(url, {
        method: "DELETE",
        mode: "cors",
      });
      if (response.status == 200) {
        getBudget();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateBudget = async (date) => {
    try {
      const url = `http://127.0.0.1:8000/api/budget-update/${date}/`;
      const response = await fetch(url, {
        method: "PATCH",
        mode: "cors",
      });
      if (response.status == 200) {
        getBudget();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitBudget = (e) => {
    e.preventDefault();
    submitBudget();
    window.location.reload();
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

  const handleDeleteBudget = (id) => {
    deleteBudget(id);
  };

  const handleUpdateBudget = (date) => {
    console.log(date);
    const formattedDate = date.toISOString();
    console.log(formattedDate);
    updateBudget(date);
  };

  useEffect(() => {
    getBudget();
  }, []);

  const tableDisplay = data.map((item) => {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.inFlow}</td>
        <td>{item.outFlow}</td>
        <td>{item.balanceFlow}</td>
        <td>{item.date}</td>
        <td>
          <button
            onClick={() => {
              handleDeleteBudget(item.id);
              handleUpdateBudget(item.date);
            }}
          >
            delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>inFlow</th>
            <th>outFlow</th>
            <th>balanceFlow</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{tableDisplay}</tbody>
      </table>
      <Calendar onChange={onDateChange} value={date} />

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
        <label>Balance: {balanceflow}</label>
        <button className="budgetBtn" type="submit" onClick={handleBalanceFlow}>
          submit
        </button>
        <button
          className="updateBtn"
          type="submit"
          onClick={handleUpdateBudget}
        >
          update
        </button>
      </form>
      <HeatMap />
      <PieChart pieInflow={pieInflow} pieOutflow={pieOutflow} />
    </>
  );
};

export default BudgetInput;
