import React, { useState, useEffect } from "react";
import List from "./CategoryTable";
import URL from './../../../BaseUrl/BaseUrl';
import axios from "axios";

function Category() {

  const [cData, setcData] = useState([]);
  // console.log(cData);
  useEffect(() => {
    async function test() {
      const header = {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      const res = await axios.get(`${URL}categories/adminPanel`, { headers: header })
      const data = res.data.categoryList;
      setcData(data)
      // console.log(data);
    }
    test()


  }, [])




  const injuryData = cData.filter((data) => {
    return data.type === 'injury';
  })
  // console.log(injuryData);


  const prescriptionData = cData.filter((data) => {
    return data.type === 'prescription';

  })
  // console.log(prescriptionData);


  const medicineData = cData.filter((data) => {
    return data.type === 'medicine';

  })
  // console.log(medicineData);


  return (
    <>
      <h5 style={{ padding: "10px" }}>Category   <i class="fa-solid fa-house "></i></h5>
      <List name='Prescription' type={prescriptionData} />
      <List name='Medicine' type={medicineData} />
      <List name='Injury' type={injuryData} />
    </>
  )
}

export default Category;
