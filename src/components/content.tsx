import React from 'react';

interface ContentProps{
    contentTitle: string;
}


export const Content: React.FC<ContentProps> = ({ contentTitle, children}) => {

    return (
        <React.Fragment>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                  <h1 className="h2">{contentTitle}</h1>
                </div>
                {children}
              </main>
        </React.Fragment>
    );
}