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

<<<<<<< HEAD:src/components/PropertyPage.js
const PropertyPage = props => {
=======
const LandingPage = props => {
  if (!props.loggedIn) {
    props.logout();
  }

>>>>>>> david-francis:src/components/LandingPage.js
  const [showPopup, setShowPopup] = useState(false);
  const properties = props.properties;

  const toggleShowPopup = e => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    // get and set user-id
    axiosWithAuth()
      .get(`/user/${props.id}`)
      .then(res => {
        console.log(res);
        // call setUser(res.data) which is an action/reducer
        props.setUser(res.data);
      })
      .catch(err => console.log(err));

    //get and set properties
    axiosWithAuth()
      .get(`/user/${props.id}/properties`)
      .then(res => {
        //need to add call to update state with property info
        console.log(".get res ==> ", res);
        props.updateProperties(res.data.user_properties);
      })
      .catch(err => console.log(err));
  }, []);

  return (
<<<<<<< HEAD:src/components/PropertyPage.js
    <div className="wrapper-landing">
      <h2>Your Properties</h2>
      <p>Property info will go here</p>
=======
    <div className="wrapper">
      <h2>
        Welcome back, {props.first_name}! Your Properties are listed below.
      </h2>
>>>>>>> david-francis:src/components/LandingPage.js
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

<<<<<<< HEAD:src/components/PropertyPage.js
export default PropertyPage;
// src\assets\plus_sign.png
=======
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { setUser, updateProperties, logout })(
  LandingPage
);
>>>>>>> david-francis:src/components/LandingPage.js
