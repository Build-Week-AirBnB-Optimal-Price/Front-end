import React from "react";
import { useState, useEffect } from "react";
import PopupPropertyInfoForm from "./PopupPropertyInfoForm";
import {connect } from 'react-redux';
import { axiosWithAuth } from "./AxiosWithAuth";
import {setUser} from '../actions'


  const LandingPage = (props) => {
  console.log("PROPS FROM LANDING PAGE", props)
  const [showPopup, setShowPopup] = useState(false);

  const toggleShowPopup = e => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/user/${props.id}`)
      .then(res => {
        console.log(res)
        // call setUser(res.data) which is an action/reducer
        props.setUser(res.data)
      })
      .catch(err => console.log(err))
  },[]);

  return (
    <div className="wrapper">
      <h2>Welcome back, {props.first_name }! Your Properties are listed below.</h2>
      <p>Property info will go here</p>
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
      {showPopup ? <PopupPropertyInfoForm /> : null}
    </div>
  );
};


const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {setUser})(LandingPage);
