import React from "react";
import { useState } from "react";
import PopupPropertyInfoForm from "./PopupPropertyInfoForm";

const PropertyPage = props => {
  const [showPopup, setShowPopup] = useState(false);

  const toggleShowPopup = e => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="wrapper-landing">
      <h2>Your Properties</h2>
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

export default PropertyPage;
// src\assets\plus_sign.png
