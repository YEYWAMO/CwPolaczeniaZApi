import axios from "axios";
import React, { useState } from "react";

const DodajDane = () =>{
    const [imie, setImie] = useState("");
    const [nazwisko, setNazwisko] = useState("");
    const [indeks, setIndeks] = useState("");

    async function wyslij(event) {
        event.preventDefault();
          try {
            const add = await axios.post(
              `https://uwm-gr2.azurewebsites.net/api/Student`,
              {
                imie,
                nazwisko,
                indeks,
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
                <input type="text" value={imie} onChange={(event) => setImie(event.target.value)}  ></input><br/>
                <label>Nazwisko: </label>
                <input type="text" value={nazwisko} onChange={(event) => setNazwisko(event.target.value)}  ></input><br/>
                <label>Indeks: </label>
                <input type="text" value={indeks} onChange={(event) => setIndeks(event.target.value)}  ></input><br/>
                <input type="Submit" value="Wyślij"/>
            </form>
        </div>
    )
}

export default DodajDane;