import React, { useState } from 'react'

function Productcard(props) {

   return (
    <>
        <div className={`product-${props.pid} products`} key={props.pid}>
            <h3>{props.PName}</h3>
            <h4>{props.PPrice}</h4>
            <p>{props.pDesc}</p>
            <button onClick={e => {
                props.onClick();
            }}>add</button>
        </div>
    </>
  )
}

export default Productcard