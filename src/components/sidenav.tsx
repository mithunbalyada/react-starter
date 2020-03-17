import React from 'react';
import { faHome, faTachometerAlt, faMagic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SideNav = () => {
    
    return (
      <React.Fragment>
        <div className="vertical-nav bg-white" id="sidebar">
          <div className="py-4 px-3 mb-4 bg-light">
            <div className="media d-flex align-items-center">
              <img
                src=""
                alt="..."
                width="65"
                className="mr-3 rounded-circle img-thumbnail shadow-sm"
              />
              <div className="media-body">
                <h4 className="m-0">Username</h4>
                <p className="font-weight-light text-muted mb-0">user role</p>
              </div>
            </div>
          </div>

          <ul className="nav flex-column bg-white mb-0">
            <li className="nav-item">
              <a href="/#" className="nav-link text-dark font-italic bg-light">
                <FontAwesomeIcon icon={faHome} /> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link text-dark font-italic">
                <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
              </a>
            </li>
          </ul>

          <ul className="nav flex-column bg-white mb-0">
            <li className="nav-item">
              <a href="/#" className="nav-link text-dark font-italic">
                <FontAwesomeIcon icon={faMagic}/> Additional Menu
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );

}