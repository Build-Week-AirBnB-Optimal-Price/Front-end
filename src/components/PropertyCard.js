import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { deleteProperty, updateProperties } from "../actions";
import { axiosWithAuth } from "./AxiosWithAuth.js";

const Card = styled.div`
  margin: 15px;
  padding: 5px;
  width: 25%;
  border: 1px solid lightgrey;
  box-shadow: -2px 2px 2px teal;
  border-radius: 8px;
  p {
    text-align: left;
  }
  :hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
    background-color: rgb(245, 236, 255);
  }
`;

const PlusMinus = styled.div`
  display: flex;
  p:hover {
    color: blue;
    cursor: pointer;
  }
`;

const PropertyCard = props => {
  console.log(props);

  const deleteProperty = async e => {
    await props.deleteProperty(props.userid, props.propertyid);
    updateProperties(props.properties);
    console.log(props.properties);
  };

  const getOptimalPrice = e => {
    axiosWithAuth()
      .post(`/optimalprice`, props.property)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <Card>
      <h3>{props.name}</h3>
      <p>Beds: {props.bedrooms}</p>
      <p>Baths: {props.bathrooms}</p>
      <PlusMinus>
        <p onClick={deleteProperty}>(-) Delete Property</p>
      </PlusMinus>
      <div onClick={getOptimalPrice}>
        Optimal Price is ${props.property.optimal_price}. (Click to update)
      </div>
    </Card>
  );
};

const mapStateToProps = state => {
  return { properties: state.properties };
};

export default connect(mapStateToProps, { deleteProperty, updateProperties })(
  PropertyCard
);
