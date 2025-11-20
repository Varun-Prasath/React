import { useState } from "react";
import './form.css'

function Form(){
    let [name, setName] = useState("");
    let [pass, setPass] = useState("");
    let [mail, setMail] = useState("");
    let [age, setAge] = useState(0);

    function handlePass(event){
        setPass(event.target.value)
    }

    function handleName(event){
        setName(event.target.value);
    }

    return(
        <>
            <form onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="Name">Name </label>
                <input type="text" value={name} onChange={handleName} />
                <p>{name}</p><br />
                <label htmlFor="mail">Email </label>
                <input type="email" value={mail} onChange={(e)=> setMail(e.target.value)}/>
                <p>Characters: {mail.length}</p><br />
                <label htmlFor="Age">Age </label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/><br /><br />
                <label htmlFor="pass">Password </label>
                <input type="password" value={pass} onChange={handlePass}/>
                <p>{pass.length <= 3 ? "Password should be more than 3 chars" : ""}</p>
                <button disabled={mail.length == 0}>Submit</button>
            </form>
            <div className="card">
                <h3>Preview</h3>
                <p><b>Name:</b> {name || "—"}</p>
                <p><b>Email:</b> {mail || "—"}</p>
                <p><b>Age:</b> {age || "—"}</p>
            </div>
        </>
    );
}

export default Form;