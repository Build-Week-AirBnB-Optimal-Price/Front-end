import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { deleteProperty, updateProperties } from "../actions";
import { axiosWithAuth } from "./AxiosWithAuth.js";
import axios from "axios";

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

const test = {
  host_since: "12/10/2001",
  zipcode: "10010",
  room_type: "Entirehome/apt",
  maximum_nights: 10,
  minimum_nights: 3,
  extra_people: 2,
  accommodates: 6,
  neighbourhood: "Mitte",
  beds: 5,
  property_type: "Apartment",
  cancellation_policy: "strict_14_with_grace_period",
  guests_included: 4,
  bedrooms: 3,
  bathrooms: 2
};

const PropertyCard = props => {
  const propToSend = {
    host_since: props.property.host_since,
    zipcode: props.property.zipcode,
    room_type: props.property.room_type,
    maximum_nights: props.property.maximum_nights,
    minimum_nights: props.property.minimum_nights,
    extra_people: props.property.extra_people,
    accommodates: props.property.accommodates,
    neighbourhood: props.property.neighbourhood,
    beds: props.property.beds,
    property_type: props.property.property_type,
    cancellation_policy: props.property.cancellation_policy,
    guests_included: props.property.guests_included,
    bedrooms: props.property.bedrooms,
    bathrooms: props.property.bathrooms
  };

  const deleteProperty = async e => {
    await props.deleteProperty(props.userid, props.propertyid);
    updateProperties(props.properties);
    console.log(props.properties);
  };

  const getOptimalPrice = e => {
    let id, name, newProps;
    ({ id, name, ...newProps } = props.property);
    console.log("NEWPROPS: ", { newProps });
    axios
      .post(
        `https://optimal-airbnb-pricing-api.herokuapp.com/optimalprice`,
        propToSend
      )
      .then(res => console.log("RES => ", res.data.results))
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
