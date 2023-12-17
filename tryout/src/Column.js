import { useState } from "react";


let nextId = 0;

function Column({ categoryName }) {
  //destructure the props object received by a component to the respective variable

  const columnStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "10px",
    
  };

  const [sum, setSum] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState("");
  const [spendings, setSpendings] = useState([]);
  const [allocatedAmount,setAllocatedAmount] = useState('');

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value >= 0) {
        setSum(sum + +e.target.value);
        setExpenseAmount("");
        setSpendings([...spendings, 
            {
                id: nextId++,
                value: e.target.value 
            }]);
      }
    }
  };

  const handleChange = (e) => {
    setExpenseAmount(e.target.value);
  };

  function handleSpendingChange(spending){
    setSpendings(
        spendings.map((s) => {
            if(spending.id === s.id){
                return spending;
            }else{
                return s;
            }
        })
    );
    setSum(spendings.reduce( (t,s) => t+ +s.value,0));
  }

  function handleSpendingDelete(spendingId){
    setSpendings(spendings.filter(s => s.id !== spendingId));
    setSum(spendings.reduce( (t,s) => t+ +s.value,0));
    console.log(sum);
  }
  return (
    <>
      <div className="column-container" style={columnStyles}>
          
          <input 
             style={
              { textAlign:'center',
                borderTop:'0px',
                borderLeft:0,
                borderRight:0,
                fontWeight:'bolder',
                width:'163px'
                             } 
                         }
               value={categoryName}></input>

          <input
        type="number"
        placeholder="Enter Allocated Amount"
        style={{marginTop:'10px'}}
        value={allocatedAmount}
        onChange={(e)=>setAllocatedAmount(e.target.value)}></input>

        

          <input
            style={{ display: "inline",marginTop:'10px'}}
            placeholder="Enter each spendings"
            value={expenseAmount}
            type="number"
            onKeyDown={(e) => handleEnter(e)}
            onChange={(e) => handleChange(e)}
          ></input>
        

        <h3 
        style={
            { fontSize: 15, 
            fontWeight: "bold" }}>Total spent:  
            <span style={{
              color:allocatedAmount-sum <0 ? 'red': '#44ef55',
              marginLeft:'10px'  
            }}>{sum}</span></h3>
            
            <button 
            onClick={() => {
                setSum(spendings.reduce( (t,s) => t+ +s.value,0)); 
            }}>Re-Calculate</button>
        <h3 
        style={
            { fontSize: 15, 
            fontWeight: "bold",
            color:allocatedAmount-sum <0 ? 'red': '#44ef55'
             }}>Balance: {allocatedAmount-sum}</h3>
        
        <ul>
          {spendings.map((amt) => (
            <li key={amt.id}>
              <Spending amount={amt} onEdit = {handleSpendingChange} onDelete = {handleSpendingDelete}/>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}



function Spending({amount,onEdit,onDelete}){


    function handleEnterOnSpending(e){
        if(e.keyCode === 13){
           
            onEdit({...amount,value:e.target.value})
        }
    }

       const [spendingValue, setSpendingValue] = useState(amount.value);
       let spendingContent = (
            <input
               value={spendingValue}
               onChange={(e) => {setSpendingValue(e.target.value)}}
               onKeyDown={(e) => {handleEnterOnSpending(e)}}
               ></input>
        )
   

    return (
        <>
        {spendingContent}
        <button onClick={() => onDelete(amount.id)}>
         X
        </button>
        
        </>
    )
}

export default Column;
