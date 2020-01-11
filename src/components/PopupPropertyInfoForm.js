import React from "react";
import styled from "styled-components";
import { data } from "../assets/data.js";
import { connect } from "react-redux";
import { axiosWithAuth } from "../components/AxiosWithAuth.js";
import { updateProperties } from "../actions";

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
  box-shadow: -2px 13px 33px -1px rgba(0, 0, 0, 0.75);
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
  console.log("props ==> ", props);

  const randomProperty = {
    name: "TheHaven",
    host_since: "2001",
    zipcode: "10010",
    room_type: "Entirehome/apt",
    maximum_nights: 10,
    minimum_nights: 3,
    extra_people: 2,
    accomodates: 6,
    neighbourhood: "Mitte",
    beds: 5,
    property_type: "Apartment",
    cancellation_policy: "strict_14_with_grace_period",
    guests_included: 4,
    bedrooms: 3,
    bathrooms: 2,
    optimal_price: 0
  };

  const [propertyInfo, setPropertyInfo] = React.useState(randomProperty);

  const handleChange = e => {
    setPropertyInfo({
      ...propertyInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // post new prop to db
    axiosWithAuth()
      .post(`/user/${props.id}/properties`, propertyInfo)
      .then(res => console.log("POST property => ", res))
      .catch(err => console.log(err));
  };

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
        <Form onSubmit={handleSubmit}>
          <label>Property Nickname</label>
          <input
            type="text"
            name="name"
            value={props.name}
            onChange={handleChange}
          ></input>
          <label>Host since</label>
          <input
            type="text"
            name="host_since"
            value={props.host_since}
            onChange={handleChange}
          ></input>
          <label>Zip Code</label>
          <input
            type="text"
            name="zipcode"
            value={props.zipcode}
            onChange={handleChange}
          ></input>
          <label>Number of Bedrooms</label>
          <input
            type="text"
            name="bedrooms"
            value={props.bedrooms}
            onChange={handleChange}
          ></input>
          <label>Number of Bathrooms</label>
          <input
            type="text"
            name="bathrooms"
            value={props.bathrooms}
            onChange={handleChange}
          ></input>
          <label>Room Type</label>
          <input
            type="text"
            name="room_type"
            value={props.room_type}
            onChange={handleChange}
          ></input>
          <label>Maximum Nights</label>
          <input
            type="text"
            name="max_nights"
            value={props.max_nights}
            onChange={handleChange}
          ></input>
          <label>Minimum Nights</label>
          <input
            type="text"
            name="min_nights"
            value={props.min_nights}
            onChange={handleChange}
          ></input>

          <label>Extra People</label>
          <input
            type="text"
            name="extra_people"
            value={props.extra_people}
            onChange={handleChange}
          ></input>

          <label>Accommodates</label>
          <input
            type="text"
            name="accommodates"
            value={props.accommodates}
            onChange={handleChange}
          ></input>
          <label>Neighbourhood</label>
          <input
            type="text"
            name="neighbourhood"
            value={props.neighbourhood}
            onChange={handleChange}
          ></input>
          <label>Number of Beds in Home</label>
          <input
            type="text"
            name="beds"
            value={props.beds}
            onChange={handleChange}
          ></input>
          <label>Property Type</label>
          <input
            type="text"
            name="property_type"
            value={props.property_type}
            onChange={handleChange}
          ></input>
          <label>Cancellation Policy</label>
          <input
            type="text"
            name="cancel_policy"
            value={props.cancel_policy}
            onChange={handleChange}
          ></input>
          <label>Number of Guests Included</label>
          <input
            type="text"
            name="guests"
            value={props.guests}
            onChange={handleChange}
          ></input>
          <button>Submit</button>
        </Form>
      </Inner>
    </Popup>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { updateProperties })(
  PopupPropertyInfoForm
);
