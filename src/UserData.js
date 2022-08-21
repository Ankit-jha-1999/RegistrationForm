import React from "react";

const UserData = ({userRecord}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Mobile</th>
            <th>Govt Id Type</th>
            <th>Govt Id</th>
            <th>Guardian Details</th>
            <th>Guardian Name</th>
            <th>Email</th>
            <th>Emergency Contact Number</th>
            <th>Address</th>
            <th>State</th>
            <th>City</th>
            <th>Country</th>
            <th>Pincode</th>
            <th>Occupation</th>
            <th>Religion</th>
            <th>Martial Status</th>
            <th>Blood Group</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {userRecord.map((data) => (
            <tr>
              <th>{data.userName}</th>
              <th>{data.age}</th>
              <th>{data.sex}</th>
              <th>{data.mobile}</th>
              <th>{data.governmentId}</th>
              <th>{data.govtId}</th>
              <th>{data.guardianDetail}</th>
              <th>{data.guardianName}</th>
              <th>{data.email}</th>
              <th>{data.emergencyContactNumber}</th>
              <th>{data.address}</th>
              <th>{data.state}</th>
              <th>{data.city}</th>
              <th>{data.country}</th>
              <th>{data.pincode}</th>
              <th>{data.occupation}</th>
              <th>{data.religion}</th>
              <th>{data.martialStatus}</th>
              <th>{data.bloodGroup}</th>
              <th>{data.nationality}</th>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
