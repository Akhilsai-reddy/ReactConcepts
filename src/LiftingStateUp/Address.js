import React, { useState } from "react";
import CurrentAdress from "./CurrentAdress";
import PermenentAddress from "./PermenentAddress";

const Address = () => {
  const [house, setHouse] = useState();
  const [dist,setDist]=useState();

  const handleHouse=(e)=>{
     setHouse(e)
  }
  const handleDistrict=(val)=>{
    setDist(val)
 }
  return <>
  <table border={2}>
    <thead>
        <tr>
        <th>House no</th>
        <th>District</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td>{house}</td>
        <td>{dist}</td>
      </tr>
    </tbody>
  </table>
  <CurrentAdress house={house} dist={dist}
   handleHouse={handleHouse} handleDist={handleDistrict}/>

  <PermenentAddress house={house} dist={dist}
   handleDist={handleDistrict} handleHouse={handleHouse} />
  </>

  ;
};

export default Address;
