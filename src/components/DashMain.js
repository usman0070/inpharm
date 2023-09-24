import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";
function ScrollableSection({ left }) {
  const navigate = useNavigate()
  function logout() {
    localStorage.clear()
    navigate('/')
  }
  return (
    <>
      <div id="sidebar_mobile" className="sidebar" style={{ left: left }}>
        <div className="">
          <img src={require("../assets/images/pharmacyLogo.jpeg")} width="200px" height="70px" alt="" style={{ padding: "5px", marginBottom: '20px' }} />
        </div>
        <ul className="pb-5">
          <li className="nav-item">
            <Link to="/dashboard" className="fw-semi-bold nav-link active pt-0" aria-current="page">
              {" "}
              <i class="fa-solid fa-table-cells-large"></i>Dashboard<i class="fa-solid fa-plus" style={{ marginLeft: '80px' }}></i>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/orders" className="fw-semi-bold nav-link active" aria-current="page">
              {" "}
              <i class="fa-solid fa-cart-plus"></i>Orders <i class="fa-solid fa-plus" style={{ marginLeft: '103px' }}></i>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/pharmacy" className="fw-semi-bold nav-link active" aria-current="page">
              <i class="fa-solid fa-city"></i>Pharmacy<i class="fa-solid fa-plus" style={{ marginLeft: '83px' }}></i>
            </Link>
          </li>


          <li className="nav-item">
            <Link to="/users" className="fw-semi-bold nav-link active" aria-current="page">
              <i class="fa-solid fa-users"></i>Users<i class="fa-solid fa-plus" style={{ marginLeft: '115px' }}></i>
            </Link>
          </li>



          <li className="nav-item">
            <Link to="/commissions" className="fw-semi-bold nav-link active" aria-current="page">
              <i class="fa-solid fa-handshake"></i>Commission<i class="fa-solid fa-plus" style={{ marginLeft: '58px' }}></i>
            </Link>
          </li>


          <li className="nav-item">
            <Link to="/payments" className="fw-semi-bold nav-link active" aria-current="page">
              <i class="fa-solid fa-money-check-dollar"></i>Payments Modes<i class="fa-solid fa-plus" style={{ marginLeft: '30px' }}></i>
            </Link>
          </li>


          <li className="nav-item">
            <Link to="/city" className="fw-semi-bold nav-link active" aria-current="page">
              <i class="fa-solid fa-city"></i>Cities<i class="fa-solid fa-plus" style={{ marginLeft: '113px' }}></i>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/newSlider" className="fw-semi-bold nav-link active" aria-current="page">
              <i class="fa-solid fa-sliders"></i>Sliders<i class="fa-solid fa-plus" style={{ marginLeft: '110px' }}></i>
            </Link>
          </li> */}
          {/* <li className="nav-item">
            <Link to="/notifications" className="fw-semi-bold nav-link active" aria-current="page">
            <i class="fa-solid fa-bell"></i>Notifications<i class="fa-solid fa-plus" style={{marginLeft:'68px'}}></i>
            </Link>
          </li> */}

          <li className="nav-item">
            <Link to="/staff" className="fw-semi-bold nav-link active" aria-current="page">
              <i class="fa-solid fa-people-line"></i>Staff<i class="fa-solid fa-plus" style={{ marginLeft: '120px' }}></i>
            </Link>
          </li>

          {/*        
                  <li className="nav-item">
                    <Link to="/categories" className="fw-semi-bold nav-link active" aria-current="page">
                    <i class="fa-solid fa-table-cells"></i>Categories<i class="fa-solid fa-plus" style={{marginLeft:'80px'}}></i>
                    </Link>
                  </li> */}

          {/* 
          <li className="nav-item">
            <Link to="/support" className="fw-semi-bold nav-link active" aria-current="page">
            <i class="fa-solid fa-heart-pulse"></i>Support<i class="fa-solid fa-plus" style={{marginLeft:'99px'}}></i>
            </Link>
          </li> */}

          <li className="nav-item">
            <Link to="/sms" className="fw-semi-bold nav-link active" aria-current="page">

              <i class="fa-solid fa-message"></i>FAQ
            </Link>
          </li>

          <li className="nav-item" onClick={logout} style={{ fontWeight: "500", cursor: "pointer", marginTop: "1rem" }}>

            <i class="fa-solid fa-message"></i>Logout

          </li>

        </ul>
      </div>

    </>
  );
}

export default ScrollableSection;
