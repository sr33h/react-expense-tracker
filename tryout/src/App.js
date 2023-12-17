import Column from "./Column";
import 'bulma/css/bulma.css';

function App() {

   const columnStyles = {
    display:'flex',
    
    justifyContent:'center',
    alignItems:'flex-start',
    marginTop: '10px',
    flexWrap:'wrap'
    
    
    
    
   }

    
      return <>

<section className="hero is-primary">
  <div className="hero-body">
    <p className="title">
      Expense Tracker
    </p>
    <p className="subtitle">
      Track your spendings 
    </p>
  </div>
</section>
      
      <div className="expense-table" style={columnStyles}>
      <Column categoryName="Grocery"/>
      <Column categoryName="Travel"/>
      <Column categoryName="Other"/>

      </div>

      <footer class="footer">
  <div className="content has-text-centered">
    <p>[ Press <strong>Re-Calculate</strong> after you've finished entering/modifying all spendings.]   </p>
  </div>
</footer>
      
    
       
      </>
    }

    export default App;