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
    boxShadow:"0 2px 5px rgba(0,0,0,0.5)",
    marginLeft:'10px',
    borderRadius: '4px',
    marginTop:'10px'
    
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
          className="input is-small"
        type="number"
        placeholder="Enter Allocated Amount"
        style={{marginTop:'10px'}}
        value={allocatedAmount}
        onChange={(e)=>setAllocatedAmount(e.target.value)}></input>

        

          <input
           className="input is-small"
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
            fontWeight: "bold",
            marginTop:'10px' }}>Total spent:  
            <span style={{
              color:allocatedAmount-sum <0 ? 'red':
              allocatedAmount-sum === 0 ? '#343434' : '#44ef55',
              marginLeft:'10px'  
            }}>{sum}</span></h3>
            
            
        <h3 
        style={
            { fontSize: 15, 
            fontWeight: "bold"}}>Balance: 
            <span style={{
              color:allocatedAmount-sum <0 ? 'red':
              allocatedAmount-sum === 0 ? '#343434' :  '#44ef55',
              marginLeft:'10px'  
            }}>{allocatedAmount-sum}</span></h3>

<button 
            className="button is-primary is-rounded"
            style={{width:'70%',height:'25px',margin:'10px auto'}}
            onClick={() => {
                setSum(spendings.reduce( (t,s) => t+ +s.value,0)); 
            }}>Re-Calculate</button>
        
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

  function handleChangeOfSpending(e){
        
    setSpendingValue(e.target.value);
    onEdit({...amount,value:e.target.value})

}

    function handleEnterOnSpending(e){
        if(e.keyCode === 13){
          onEdit({...amount,value:e.target.value})
        }           
        
    }

       const [spendingValue, setSpendingValue] = useState(amount.value);
       let spendingContent = (
            <input
               value={spendingValue}
               onChange={(e) => {handleChangeOfSpending(e)}}
               onKeyDown={(e) => {handleEnterOnSpending(e)}}
               
            
               ></input>
        )
   

    return (
        <>
        {spendingContent}
        <button 
        style={{
          backgroundColor:'#ee9999',
          cursor:'pointer'
        }}
        
        onClick={() => onDelete(amount.id)}>
         <strong>X</strong>
        </button>
        
        </>
    )
}

export default Column;
