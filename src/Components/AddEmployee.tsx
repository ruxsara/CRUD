type Props={
    
    onBackBtnClick: ()=> void
}


export const AddEmployee=(props:Props)=>{
    const {onBackBtnClick}=props;
    return (
        <>
        <form > 
            <div>
            <label htmlFor=""> First Name:</label>
            <input type="text" />
            </div>

            <div>
            <label htmlFor=""> Last Name:</label>
            <input type="text" />
            </div>

            <div>
            <label htmlFor="">Email:</label>
            <input type="text" />
            </div>

            <div>
            <input type="button" value='Back' onClick={onBackBtnClick} />
            <input type="submit" value="Add Employee" />
            </div>
        </form>
        </>
    )
}