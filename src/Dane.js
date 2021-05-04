import axios from "axios";
import React, { useEffect, useState } from "react";

const Dane = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        async function getData(){
            const response = await axios.get(`https://uwm-gr2.azurewebsites.net/api/Student`);
            setStudents(response.data);
        }
        getData();
      }, []);
    return (
        <div style={{marginLeft:'10px',}}>
            {
                students.map((student) => (
                      <div>
                        {student.index}<br />
                        {student.name}<br />
                        {student.surname}<br /><br />
                      </div>)
                )
            }
        </div>
    )
}

export default Dane;