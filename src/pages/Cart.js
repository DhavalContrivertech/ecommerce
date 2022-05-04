import React, { useState } from 'react'
import Navbar from '../component/Navbar'
// import {senddata} from '../pages/Product'
// import Cardcard from '../component/Cartcard'

function Cart() {
    // const [data1 , setdata1] = useState(JSON.parse(localStorage.getItem('datachange')));
    // console.log(typeof data1);
    const data = JSON.parse(localStorage.getItem("datachange"));
    const subdata = Object.values(data); 
    console.log(subdata.length);
    // const data = ;
    // console.log(data);
  return (
      <>
        <Navbar />
        <div className="cart">
            <h1>Cart page</h1>
            <div className="cart-list">
                {/* {
                    subdata.map((ele) => {
                        return (<>
                            <h1>{ele}</h1>
                        </>)
                    })
                } */}
            </div>
        </div>
      </>
  )
}

export default Cart