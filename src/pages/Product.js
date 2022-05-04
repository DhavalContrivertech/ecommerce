import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import ProductData from '../component/data'
import Productcard from '../component/Productcard';

function Product() {
    let [data , setdata] = useState(ProductData);
    const cartdata  = [];
    
    function change(params) {
        cartdata.push(params);
        localStorage.setItem("datachange" , JSON.stringify(cartdata));
        const getdata = JSON.parse(localStorage.getItem("datachange" ));
        console.log(Object.keys(getdata));
    }

  return (
      <>
        <Navbar />
        <div className="products">
            <h1>Products List</h1>
            <div className="product-list">
                {
                    data && data.map((ele) => {
                        return (<>
                            <Productcard key={ele.id} pid={ele.id} PName={ele.ProductName} PPrice={ele.ProductPrice} pDesc={ele.ProductDescription} onClick={() => change(ele)} />
                        </>)
                    })
                }
            </div>
        </div>
      </>
  )
}

export default Product;