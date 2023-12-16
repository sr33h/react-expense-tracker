import Column from "./Column";
import 'bulma/css/bulma.css';

function App() {

   const columnStyles = {
    display:'flex',
    border:'1px solid #000',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginTop: '10px',
    borderRadius:'4px',
    
    
   }

    
      return <>
      
      <div className="expense-table" style={columnStyles}>
      <Column categoryName="Grocery"/>
      <Column categoryName="Travel"/>
      <Column categoryName="Other"/>

      </div>
      
    
       
      </>
    }

    export default App;