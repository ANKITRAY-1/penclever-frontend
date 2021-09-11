import React from "react";

export const Userinfo = () => {
  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <button id="myBtn">Dtails</button>
        <table>
          <tr>
            <td>Name</td>
            <td>Adtiya Ray</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>aditya90005@gmail.com</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>India</td>
          </tr>
          <tr>
            <td>State</td>
            <td>Chhattisgarh</td>
          </tr>
          <tr>
            <td>City</td>
            <td>Bhilai</td>
          </tr>
          <tr>
            <td>Profession</td>
            <td>Student</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
