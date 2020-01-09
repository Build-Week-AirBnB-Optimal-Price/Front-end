import React, { useState, useEffect } from "react";
import axios from "axios";

const AnalyzationForm = (props) => {

    const [analysis, setAnalysis] = useState({body:""});

    const handleChanges = event => {

        setAnalysis({...analysis, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        axios
        .post("http://description-analyzer.herokuapp.com/",
            analysis
        )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            alert(error);
        })
        setAnalysis("");
        // axios.post('/user', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
      }
    return(
        <form onSubmit={submitForm}>
            <label htmlFor="analyzation">Analyzation Tool</label>
            <textarea 
            id="analyzation" 
            name="body" 
            placeholder="Add description here" 
            onChange={handleChanges} 
            value={analysis.body}
            />
            <button type="submit">Analyze</button>
        </form>
    )
}
export default AnalyzationForm;