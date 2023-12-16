import { useState } from "react";

function Column({ categoryName }) {
  //destructure the props object received by a component to the respective variable

  const columnStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
          
          <input 
          style={
            { textAlign:'center',
              backgroundColor:'#1288ee',
              color:'#fff',
              fontWeight:'bolder',
              width:'163px'
         }}
          value={categoryName}></input>
          <input
        type="number"
        placeholder="Enter Amount allocated"
        style={{marginTop:'10px'}}></input>
          <input
            style={{ display: "inline",marginTop:'10px'}}
            placeholder="Enter each spendings"
            value={expenseAmount}
            type="number"
            onKeyDown={(e) => handleEnter(e)}
            onChange={(e) => handleChange(e)}
          ></input>
        

        <h3 style={{ fontSize: 15, fontWeight: "bold" }}>Actual Amount : {sum}</h3>
        
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
