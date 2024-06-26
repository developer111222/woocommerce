import React from "react";
import Logo from "../../header/assets/Logo";
import { NavLink } from "react-router-dom";

export const FootLeft = () => {
  return (
    <>
      <div className="foot-left-row foot">
        <div className="foot-left-col">
          <div className="foot-logo">
            {/* <Logo /> */}
            <h3>Contact Info</h3>
          </div>
          <div className="contacts">
            <p>
              <span>
                <strong>PHONE:</strong>
              </span>
              <span>
                <NavLink to={"tel:++91 9728459014"}>
                  Toll Free +91 9728459014
                </NavLink>
              </span>
            </p>
            <p>
              <span>
                <strong>Email:</strong>
              </span>
              <span>
                <NavLink to={"/"}>ecom@anish.com</NavLink>
              </span>
            </p>
            <p>
              <span>
                <strong>ADDRESS:</strong>
              </span>
              <span>
              ,Karnal, Haryana 132001
              </span>
            </p>
            <p>
              <span>
                <strong>WORKING DAYS / HOURS:</strong>
              </span>
              <span>Mon - Sun / 9:00 AM - 8:00 PM</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
