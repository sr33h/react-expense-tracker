import Column from "./Column";
import 'bulma/css/bulma.css';

function App() {

   const columnStyles = {
    display:'flex',
    border:'1px solid #000',
    justifyContent:'center',
    alignItems:'center',
    marginTop: '10px',
    marginLeft:'10px',
    marginRight:'10px',
    borderRadius:'4px'
    
   }

    
      return <>
      
      <div className="expense-table" style={columnStyles}>
      <Column categoryName="Grocery"/>
      <Column categoryName="Travel"/>

      </div>
      
    
       
      </>
    }

    export default App;