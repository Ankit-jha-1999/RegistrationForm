import React, { useState } from "react";
import UserData from "./UserData";
import './userRegistration.css'

const initialValue = {
  userName: "",
  age: "",
  sex: "",
  mobile: "",
  governmentId: "",
  govtId: "",
  guardianDetail: "",
  guardianName: "",
  email: "",
  emergencyContactNumber: "",
  address: "",
  state: "",
  city: "",
  country: "",
  pincode: "",
  occupation: "",
  religion: "",
  martialStatus: "",
  bloodGroup: "",
  nationality: "",
};

const UserRegistration = () => {
  const [userRegistration, setUserRegistration] = useState(initialValue);

  const [userRecord, setUserRecord] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    setUserRecord([...userRecord, newRecord]);
    setUserRegistration(initialValue);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setUserRegistration(initialValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
        {/******************    Personal Detail Section   ****************/}
        <div className="form-container">
        <h1>Personal Details</h1>
        <div className="three-input-field-wrapper">
          <div className="username">
            <label>Name</label>
            <input
              name="userName"
              type="text"
              placeholder="Enter Name"
              value={userRegistration.userName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="age">
            <label>Date of Birth or Age</label>
            <input
              name="age"
              type="text"
              placeholder="DD/MM/YY or Age in Years"
              value={userRegistration.age}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="sex">
            <label>Sex</label>
            <select
              name="sex"
              placeholder="Enter Sex"
              value={userRegistration.sex}
              onChange={handleChange}
              required
              autoComplete="off"
            >
              <option value="" disabled selected hidden>Enter Sex</option>
              <option value="male">Male</option>
              <option value="Female">Female</option>
              <option value="transgender">TransGender</option>
            </select>
          </div>
        </div>
        <div className="two-input-field-wrapper">
          <div className="mobile">
            <label>Mobile</label>
            <input
              name="mobile"
              type="number"
              placeholder="Enter Mobile"
              value={userRegistration.mobile}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="govt-id">
            <label>Govt Issued Id</label>
            <select
              name="governmentId"
              placeholder="ID Type"
              value={userRegistration.governmentId}
              onChange={handleChange}
              autoComplete="off"
              required
            >
              <option value="" disabled selected hidden>ID Type</option>
              <option value="aadhar">Aadhar Card</option>
              <option value="panCard">Pan Card</option>
              <option value="voterId">Voter Id Card</option>
              <option value="drivingLicense">Driving License</option>
              <option value="passport">Passport</option>
            </select>
            <input
              name="govtId"
              placeholder="Enter Govt ID"
              value={userRegistration.govtId}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
        </div>

        {/******************    Contact Detail Section   ****************/}

        <h1>Contact Details</h1>
        <div className="three-input-field-wrapper">
          <div className="guardian">
            <label>Guardian Details</label>
            <select
              name="guardianDetail"
              placeholder="Enter label"
              value={userRegistration.guardianDetail}
              onChange={handleChange}
              autoComplete="off"
              required
            >
              <option value="" disabled selected hidden>Enter label</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="uncle">Uncle</option>
              <option value="aunt">Aunt</option>
            </select>
            <input
              name="guardianName"
              placeholder="Enter Guardian Name"
              value={userRegistration.guardianName}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="email">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              value={userRegistration.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="emergency">
            <label>Emergency Contact Number:</label>
            <input
              name="emergencyContactNumber"
              type="number"
              placeholder="Enter Emergency Number"
              value={userRegistration.emergencyContactNumber}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
        </div>

        {/******************    Address Detail Section   ****************/}

        <h1>Address Details</h1>
        <div className="three-input-field-wrapper">
          <div className="address">
            <label>Address</label>
            <input
              name="address"
              type="text"
              placeholder="Enter Address"
              value={userRegistration.address}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="state">
            <label>State</label>
            <select
              name="state"
              placeholder="Enter State"
              value={userRegistration.state}
              onChange={handleChange}
              autoComplete="off"
              required
            >
              <option value="" disabled selected hidden>Enter State</option>
              <option value="karnataka">Karnataka</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="city">
            <label>City</label>
            <select
              name="city"
              placeholder="Enter city/town/village"
              value={userRegistration.city}
              onChange={handleChange}
              autoComplete="off"
              required
            >
              <option value="" disabled selected hidden>Enter city/town/village</option>
              <option value="bangalore">Bangalore</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="two-input-field-wrapper">
          <div className="country">
            <label>Country</label>
            <select
              name="country"
              placeholder="Select"
              value={userRegistration.country}
              onChange={handleChange}
              autoComplete="off"
              required
            >
              <option value="" disabled selected hidden>Select</option>
              <option value="india">India</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="pincode">
            <label>Pincode</label>
            <input
              name="pincode"
              type="number"
              placeholder="Enter Pincode"
              value={userRegistration.pincode}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
        </div>

        {/******************    Other Detail Section   ****************/}

        <h1>Other Details</h1>
        <div className="four-input-field-wrapper">
          <div className="occupation">
            <label>Occupation</label>
            <input
              name="occupation"
              type="text"
              placeholder="Enter Occupation"
              value={userRegistration.occupation}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="religion">
            <label>Religion</label>
            <select
              name="religion"
              placeholder="Enter Religion"
              onChange={handleChange}
              autoComplete="off"
              value={userRegistration.religion}
              required
            >
              <option value="" disabled selected hidden>Enter Religion</option>
              <option value="hindu">Hindu</option>
              <option value="muslim">Muslim</option>
              <option value="christian">Christian</option>
              <option value="sikh">Sikh</option>
              <option value="buddhist">Buddhist</option>
              <option value="jain">jain</option>
            </select>
          </div>
          <div className="martial">
            <label>Martial Status</label>
            <select
              name="martialStatus"
              placeholder="Enter Martial Status"
              autoComplete="off"
              onChange={handleChange}
              value={userRegistration.martialStatus}
              required
            >
              <option value="" disabled selected hidden>Enter Martial Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="widowed">Widowed</option>
              <option value="seperated">Seperated</option>
              <option value="divorced">Divorced</option>
            </select>
          </div>
          <div className="blood-group">
            <label>Blood Group</label>
            <select
              name="bloodGroup"
              placeholder="Group"
              onChange={handleChange}
              autoComplete="off"
              value={userRegistration.bloodGroup}
              required
            >
              <option value="" disabled selected hidden>Group</option>
              <option value="a positive">A+</option>
              <option value="b positive">B+</option>
              <option value="ab positive">AB+</option>
              <option value="o positive">O+</option>
              <option value="a negative">A-</option>
              <option value="ab negative">AB-</option>
              <option value="b negative">B-</option>
              <option value="o negative">O-</option>
            </select>
          </div>
        </div>
        <div className="nationality">
          <label>Nationality</label>
          <select
            name="nationality"
            placeholder=""
            autoComplete="off"
            onChange={handleChange}
            value={userRegistration.nationality}
            required
          >
            <option value="" disabled selected hidden>Select</option>
            <option value="indian">Indian</option>
            <option value="other">Others</option>
          </select>
        </div>

        {/******************  Buttons  ****************/}

        <div className="buttons">
          <button type="reset" onClick={handleReset} className="reset-btn">
            Cancel
          </button>
          <button type="submit" className="submit-btn">Submit</button>
        </div>
        </div>
      </form>
      <div className="table-container">
      <UserData userRecord={userRecord} />
      </div>
    </>
  );
};

export default UserRegistration;
