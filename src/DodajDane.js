import axios from "axios";
import React, { useState } from "react";

const DodajDane = () =>{
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [index, setIndex] = useState("");

    async function wyslij(event) {
        event.preventDefault();
          try {
            const add = await axios.post(
              `https://uwm-gr2.azurewebsites.net/api/Student`,
              {
                name,
                surname,
                index,
              }
            );
          } catch (error) {
            console.log(error);
          }
    }

    return(
        <div style={{display:"flex",marginLeft:"10px",justifyContent:"right"}}>
            <form onSubmit={(event) => wyslij(event)}>
                <label>Imie: </label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} required ></input><br/>
                <label>Nazwisko: </label>
                <input type="text" value={surname} onChange={(event) => setSurname(event.target.value)} required ></input><br/>
                <label>Indeks: </label>
                <input type="text" value={index} onChange={(event) => setIndex(event.target.value)} required ></input><br/>
                <input type="Submit" value="Wyślij"/>
            </form>
        </div>
    )
}

export default DodajDane;