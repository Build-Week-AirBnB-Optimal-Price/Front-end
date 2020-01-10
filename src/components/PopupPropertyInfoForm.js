import React from "react";
import styled from "styled-components";
import { data } from '../assets/data.js'

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

  const randomProperty = {
    nickname: 'coolhouse',
    hostSince: '12/1/2018',
    numberOfBedrooms: '2',
    numberOfBathrooms: '2',
    roomType: "Private room",
    maxNights: '10',
    minNights: '1',
    costPerExtraPerson: '100',
    accommodates: '3',
    neighbourhood:'Lübars',
    numberBedsInHome: '5',
    propertyType: 'Apartment',
    cancellationPolicy: 'flexible',
    numberOfGuestsIncluded: '3'
  }


  const [propertyInfo, setPropertyInfo] = React.useState(randomProperty)

  const handleChange = e => {
    setPropertyInfo({
      ...propertyInfo,
      [e.target.name]: e.target.value
    })
    console.log(propertyInfo);

  }

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
          <label>Property Nickname</label>
          <input 
              type='text'
              name='nickname'
              value={props.nickname}
              onChange={handleChange}
          ></input>
          <label>Host since</label>
          <input type="text"
              name='hostSince'
              value={props.hostSince}
              onChange={handleChange}></input>
          <label>Number of Bedrooms</label>
          <input type="text"
              name='numberOfBedrooms'
              value={props.numberOfBedrooms}
              onChange={handleChange}></input>
          <label>Number of Bathrooms</label>
          <input type="text"
              name='numberOfBathrooms'
              value={props.numberOfBathrooms}
              onChange={handleChange}></input>
          <label>Room Type</label>
          <input type="text"
            name='roomType'
            value={props.roomType}
            onChange={handleChange}></input>
          <label>Maximum Nights</label>
          <input type="text"
            name='maxNights'
            value={props.maxNights}
            onChange={handleChange}></input>
          <label>Minimum Nights</label>
          <input type="text"
          name='minNights'
          value={props.minNights}
          onChange={handleChange}></input>
          <label>Cost Per Extra Person</label>
          <input type="text"
          name='costPerExtraPerson'
          value={props.costPerExtraPerson}
          onChange={handleChange}></input>
          <label>Accommodates</label>
          <input type="text"
          name='accommodates'
          value={props.accommodates}
          onChange={handleChange}></input>
          <label>Neighbourhood</label>
          <input type="text"
          name='neighbourhood'
          value={props.neighbourhood}
          onChange={handleChange}></input>
          <label>Number of Beds in Home</label>
          <input type="text"
          name='numberOfBedsInHome'
          value={props.numberOfBedsInHome}
          onChange={handleChange}></input>
          <label>Property Type</label>
          <input type="text"
          name='propertyType'
          value={props.propertyType}
          onChange={handleChange}></input>
          <label>Cancellation Policy</label>
          <input type="text"
          name='cancellationPolicy'
          value={props.cancellationPolicy}
          onChange={handleChange}></input>
          <label>Number of Guests Included</label>
          <input type="text"
          name='numberOfGuestsIncluded'
          value={props.numberOfGuestsIncluded}
          onChange={handleChange}></input>
          <button>Submit</button>
        </Form>
      </Inner>
    </Popup>
  );
};

export default PopupPropertyInfoForm;
