import React from "react";
import styled from "styled-components";

const Popup = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 100%
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Inner = styled.div`
  position: fixed;
  max-width: 600px;
  left: 10%;
  right: 10%;
  top: 15%;
  bottom: 15%;
  margin: auto;
  border-radius: 20px;
  background: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  input {
      width: 80%;
      height: 1.5rem;
      margin-bottom: 15px;
    }
    label {
        text-align: left;
    }
  }
`;

const PopupPropertyInfoForm = props => {
  return (
    <Popup className="popup">
      <Inner className="popup-inner">
        <h3>Property Info</h3>
        <p className="property-info-form-description">
          In the form below, please enter as much information as you can about
          your property. We use this data to determine the optimal price for
          your rental, and the more information we have, the better estimate we
          can make for you.
        </p>
        <Form>
          <label>Host since</label>
          <input type="text"></input>
          <label>Amenities</label>
          <input type="text"></input>
          <label>Number of Bedrooms</label>
          <input type="text"></input>
          <label>Number of Bathrooms</label>
          <input type="text"></input>
          <label>Room Type</label>
          <input type="text"></input>
          <label>Maximum Nights</label>
          <input type="text"></input>
          <label>Minimum Nights</label>
          <input type="text"></input>
          <label>Cost Per Extra Person</label>
          <input type="text"></input>
          <label>Accommodates</label>
          <input type="text"></input>
          <label>Neighbourhood</label>
          <input type="text"></input>
          <label>Number of Beds in Home</label>
          <input type="text"></input>
          <label>Property Type</label>
          <input type="text"></input>
          <label>Cancellation Policy</label>
          <input type="text"></input>
          <label>Number of Guests Included</label>
          <input type="text"></input>
          <button>Submit</button>
        </Form>
      </Inner>
    </Popup>
  );
};

export default PopupPropertyInfoForm;
