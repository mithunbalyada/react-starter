
import React from 'react';

export const ButtonToolbar = () => {
    return (
        <React.Fragment>
        <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
            <button className="btn btn-sm btn-outline-secondary">Share</button>
            <button className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
            </button>
        </div>
      </React.Fragment>
    );
}