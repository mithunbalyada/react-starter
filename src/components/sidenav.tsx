import React from 'react';
import * as Icon from 'react-feather';


export const SideNav = () => {
    
    return (
      <React.Fragment>
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/#">
                  <Icon.Layers size={15}/> Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/#">
                  <Icon.Archive size={15}/> Testlab
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/#">
                  <Icon.BarChart2 size={15}/> Reports
                </a>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Available resources</span>
              <a className="d-flex align-items-center text-muted" href="/#"> <Icon.PlusCircle size={15}/>
              </a>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <Icon.Grid size={15}/> Cutdown dataset
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                <Icon.BookOpen size={15}/> Static Data
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                <Icon.BookOpen size={15}/> Application versions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <Icon.Book size={15}/> Change logs
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );

}