export let Login=()=>
{
    return(

        <div className="rs-container">
          
            <form>
                <h2>Log in</h2>
                <h4>New user? <span>Create an account</span></h4>
                <label className="label-01">Email</label>

                <input placeholder="Enter email" size="70"/>
                <label>Password</label>
                <input  placeholder="Enter password"/>
                <button type="submit">Submit</button>

            </form>
              

           
        </div>
    )
}