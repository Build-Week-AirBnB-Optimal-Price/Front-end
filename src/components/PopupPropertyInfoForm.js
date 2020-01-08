import React from "react";
import styled from "styled-components";

const Popup = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;
const Inner = styled.div`
  position: relative;
  max-width: 600px;
  max-height: 600px;
  overflow: auto;
  box-shadow: -2px 13px 33px -1px rgba(0,0,0,0.75);
  border-radius: 3px;
  margin: 0 auto;
  top: 15%;
  bottom: 15%;
  background: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
      width: 80%;
      height: 100%;
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
        <Form onSubmit={submitForm}>
          <label htmlFor="date">Host since</label>
          <input id="date" type="text" name="date" onChange={handleChanges}></input>
          <label htmlFor="bedrooms">Number of Bedrooms</label>
          <input id="bedrooms" type="text" name="bedrooms" onChange={handleChanges}></input>
          <label htmlFor="bathrooms">Number of Bathrooms</label>
          <input id="bathrooms" type="text" name="bathrooms" onChange={handleChanges}></input>
          <label htmlFor="roomType">Room Type</label>
          <input id="roomType" type="text" name="roomtype" onChange={handleChanges}></input>
          <label htmlFor="maxNights">Maximum Nights</label>
          <input id="maxNights" type="text" name="maxNights" onChange={handleChanges}></input>
          <label htmlFor="minNights">Minimum Nights</label>
          <input id="minNights" type="text" name="minNights" onChange={handleChanges}></input>
          <label htmlFor="cost">Cost Per Extra Person</label>
          <input id="cost" type="text" name="cost" onChange={handleChanges}></input>
          <label htmlFor="accommodates">Accommodates</label>
          <input id="accommodates" type="text" name="accommodates" onChange={handleChanges}></input>
          <label htmlFor="neighbourhood">Neighbourhood</label>
          <input id="neighbourhood" type="text" name="neighbourhood" onChange={handleChanges}></input>
          <label htmlFor="beds">Number of Beds in Home</label>
          <input id="beds" type="text" name="beds" onChange={handleChanges}></input>
          <label htmlFor="propertyType">Property Type</label>
          <input id="propertyType" type="text" name="propertyType" onChange={handleChanges}></input>
          <label htmlFor="cancellation">Cancellation Policy</label>
          <input id="cancellation" type="text" name="cancellation" onChange={handleChanges}></input>
          <label htmlFor="guests">Number of Guests Included</label>
          <input id="guests" type="text" name="guests" onChange={handleChanges}></input>
          <button type="submit">Submit</button>
        </Form>
      </Inner>
    </Popup>
  );
};

export default PopupPropertyInfoForm;
