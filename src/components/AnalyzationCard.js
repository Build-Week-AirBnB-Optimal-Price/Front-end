import React from "react";
import styled from "styled-components";

const CardAnalysis = styled.div`
    width: 20%;
    height: 80%;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around:
    flex-wrap: wrap;
`

const Content = styled.h2`
    font-size: 1.1rem;
    padding: 2%;
    width: 98%;
    height: 60%;
`

const Title = styled.h1`
    font-size: 1.3rem;
`
const AnalyzationCard = props => {
    return (
        <CardAnalysis>
            <Title>Property Description Results</Title>
            <Content>Compound Value:{props.results.compound}</Content>
            <Content>Negative Value:{props.results.neg}</Content>
            <Content>Neutral Value:{props.results.neu}</Content>
            <Content>Positive Value:{props.results.pos}</Content>
        </CardAnalysis>
    );
};

export default AnalyzationCard;