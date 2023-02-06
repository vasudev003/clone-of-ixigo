import React from "react";
import logo from "./img/logo-ixigo.webp";
import flight from "./img/flight-new.svg";
import train from "./img/train-new.svg";
import bus from "./img/bus-new.svg";
import hotel from "./img/hotel-new.svg";
import offer from "./img/offer-new.svg";
import user from "./img/user-new.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__cont">
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">
          <a href="/" className="">
            <img
              className=""
              src={logo}
              alt="ixigo.com"
              title="ixigo.com"
              id="ixiLogoImg"
              width="83"
              height="39"
            />
          </a>
        </label>
        <ul>
          <li>
            <a className="" data="0" href="/flights">
              <img
                alt="Flights"
                width="30"
                height="30"
                className=""
                src={flight}
              />
              Flights
            </a>
          </li>
          <li>
            <a className="" data="3" href="/trains">
              <img
                alt="Trains"
                width="30"
                height="30"
                className=""
                src={train}
              />
              Trains
            </a>
          </li>
          <li>
            <a className="" data="2" href="/buses">
              <img alt="Buses" width="30" height="30" className="" src={bus} />
              Buses
            </a>
          </li>
          <li>
            <a className="" data="1" href="/">
              <img
                alt="Hotels"
                width="30"
                height="30"
                className=""
                src={hotel}
              />
              Hotels
            </a>
          </li>

          <li>
            <a className="" data="1" href="/">
              <img
                alt="Hotels"
                width="30"
                height="30"
                className=""
                src={offer}
              />
              Offers
            </a>
          </li>
          <li>
            <a className="" data="1" href="/signup">
              <img
                alt="Hotels"
                width="30"
                height="30"
                className=""
                src={user}
              />
              SignUp
            </a>
          </li>
        </ul>
      </nav>
      <div className="navbar__busIcon d-flex justify-content-center">
        <div>
          <img
            src="https://images.ixigo.com/rt/pc/img/bus/compareBookWhite.png"
            alt="search"
          />
          ;
        </div>
        <div>
          <p>search . book . go</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
