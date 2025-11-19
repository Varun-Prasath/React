import { useState } from "react";

function Form(){
    let [pass, setPass] = useState("");

    function handlePass(event){
        setPass(event.target.value)
    }

    return(
        <>
            <form>
                <label htmlFor="Name">Name </label>
                <input type="text" /><br /><br />
                <label htmlFor="mail">Email </label>
                <input type="email" /><br /><br />
                <label htmlFor="pass">Password </label>
                <input type="password" value={pass} onChange={handlePass}/>
                <p>{pass.length < 3 ? "Password should be more than 3 chars" : ""}</p>
                <button>Submit</button>
            </form>
        </>
    );
}

export default Form;