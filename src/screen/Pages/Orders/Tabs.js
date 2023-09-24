import React from 'react'
import './style.css'
export const Button = ({ name, disabled, onClick, color }) => {

    return (
        <button
            disabled={disabled}
            //   onClick={() => setToggle((prev) => !prev)}
            onClick={onClick}
            style={{ background: color ? "green" : null, color: color ? "white" : null }}

        >
            {name}
        </button>
    )
}
const Tabs = ({ disabled }) => {
    return (
        <div>
            {/* <nav>
                <div className="nav nav-tabs d-flex align-items-center justify-content-center" id="nav-tab" role="tablist">
                    <Button name="Pickup Orders" />
                    <Button name="Delivery Orders" />
                    <div className="nav nav-tabs mb-5 d-flex align-items center justify-content-center mt-5" id="nav-tab" role="tablist">
                        <Button name="Order History" />
                        <Button name="Pending Orders" />
                        <Button name="Todays Orders" />
                    </div>


                </div>
            </nav> */}
        </div>
    )
}

export default Tabs