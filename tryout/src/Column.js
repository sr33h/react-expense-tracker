function Column(){

    const columnStyles = {
        display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center'
}

    return (
        <div style={columnStyles}>            
            <h4>Expense Category</h4>
            <input type="number"></input>
            <ul>

            </ul>
        </div>
        
    )
}

export default Column;