import React from 'react';


interface HeaderProps{
    title: string;
}

export const Header: React.FC<HeaderProps> = ({title}) => {

    return (
      <React.Fragment>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/#">
            {title}
          </a>

          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="/#">
                Sign in
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
}