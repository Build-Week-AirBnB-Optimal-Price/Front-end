import React from "react";
import { useState, useEffect } from "react";
import PopupPropertyInfoForm from "./PopupPropertyInfoForm";
import { connect } from "react-redux";
import { axiosWithAuth } from "./AxiosWithAuth";
import { setUser, updateProperties, logout } from "../actions";
import styled from "styled-components";

import PropertyCard from "./PropertyCard.js";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 800px;
  margin: auto auto;
`;

const LandingPage = props => {
  if (!props.loggedIn) {
    props.logout();
  }

  const [showPopup, setShowPopup] = useState(false);
  const properties = props.properties;

  const toggleShowPopup = e => {
    setShowPopup(!showPopup);
  };

  useEffect(async () => {
    // get and set user-id
    await axiosWithAuth()
      .get(`/user/${props.id}`)
      .then(res => {
        console.log(res);
        // call setUser(res.data) which is an action/reducer
        props.setUser(res.data);
      })
      .catch(err => console.log(err));

    props.updateProperties(props.id);

    //get and set properties
    // axiosWithAuth()
    //   .get(`/user/${props.id}/properties`)
    //   .then(res => {
    //     //need to add call to update state with property info
    //     console.log(".get res ==> ", res);
    //     props.updateProperties(res.data.user_properties);
    //   })
    //   .catch(err => console.log(err));
  }, []);

  return (
    <div className="wrapper">
      <h2>
        Welcome back, {props.first_name}! Your Properties are listed below.
      </h2>
      <div className="add-property" onClick={toggleShowPopup}>
        <img
          className="favicon"
          src="https://image.flaticon.com/icons/png/512/1089/1089317.png"
          height="50"
          width="50"
          alt=""
        />
        <p>Add a property</p>
      </div>
      <Container>
        {props.properties.map(property => {
          return (
            <PropertyCard
              name={property.name}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              propertyid={property.id}
              userid={props.id}
              optimal_price={props.optimal_price}
              property={property}
            />
          );
        })}
      </Container>
      {showPopup ? <PopupPropertyInfoForm /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { setUser, updateProperties, logout })(
  LandingPage
);
