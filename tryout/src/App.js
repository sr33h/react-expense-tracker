import Column from "./Column";

function App() {

   const columnStyles = {
    display:'flex',
    border:'1px solid #000',
    justifyContent:'center',
    alignItems:'center'
    
   }
    
      return <>
      <div className="expense-table" style={columnStyles}>
      <Column />
      <Column />
      <Column />
      <button
      style={{
        marginLeft:'10px',
        height:'auto',
        width:'75px'
      }}>Add New Category</button>
      </div>
      
    
       
      </>
    }

    export default App;