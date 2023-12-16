import { useState } from "react";

function Column({ categoryName }) {
  //destructure the props object received by a component to the respective variable

  const columnStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "baseline",
    padding: "10px",
  };

  const [sum, setSum] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState("");
  const [spendings, setSpendings] = useState([]);
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value >= 0) {
        setSum(sum + +e.target.value);
        setExpenseAmount("");
        setSpendings([...spendings, e.target.value]);
      }
    }
  };

  const handleChange = (e) => {
    setExpenseAmount(e.target.value);
  };

  return (
    <>
      <div style={columnStyles}>
        <div style={{ display: "flex" }}>
          <h4 style={{ display: "inline" }}>{categoryName}:</h4>
          <input
            style={{ display: "inline", marginLeft: "10px" }}
            placeholder="Enter the spent amount"
            value={expenseAmount}
            type="number"
            onKeyDown={(e) => handleEnter(e)}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <h3 style={{ fontSize: 25, fontWeight: "bold" }}>Total : {sum}</h3>
        <ul>
          {spendings.map((amt, index) => (
            <li key={index}>
              <input value={amt}></input>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Column;
