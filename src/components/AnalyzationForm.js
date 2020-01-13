import React, { useState } from "react";
import styled from "styled-components";
import AnalyzationCard from "./AnalyzationCard";
import { Container, Row } from "reactstrap";
import axios from "axios";
const AnalysisForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 80%;
`
const Label = styled.label`
    font-size: 1.5rem;
`
const Description = styled.p`
    width: 20%;
    font-size: 1rem;
    padding: 1%;
`
const TextArea = styled.textarea`
    min-width: 40%;
    max-width: 80%;
    min-height: 200px;
    max-height: 350px;
    border-radius: 3px;
`
const Button = styled.button`
    margin-top: 2%;
    border-radius: 3px;
`
const AnalyzationForm = (props) => {
    const [analysis, setAnalysis] = useState({ body: "" });
    const [scores, setScores] = useState(null);
    const handleChanges = event => {
        setAnalysis({ ...analysis, [event.target.name]: event.target.value });
    };
    const submitForm = event => {
        event.preventDefault();
        axios
            .post("http://description-analyzer.herokuapp.com/",
                analysis
            )
            .then(response => {
                console.log(response);
                console.log(response.data.results.compound);
                setScores(response.data.results);
            })
            .catch(error => {
                alert(error);
            }, []);
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
    return (
       <div>
            <AnalysisForm onSubmit={submitForm}>
                <Label htmlFor="analyzation">Property Description Analysis Tool</Label>
                <Description>Submit your description about your property here and we'll send you feedback about how users view your description.</Description>
                <TextArea
                    id="analyzation"
                    name="body"
                    placeholder="Add description here"
                    onChange={handleChanges}
                    value={analysis.body}
                />
                <Button type="submit">Analyze</Button>
            </AnalysisForm>
            <Container>
                <Row>
                    {scores?<AnalyzationCard results={scores}/>:""}
                </Row>
            </Container>
        </div>
    )
}
export default AnalyzationForm;