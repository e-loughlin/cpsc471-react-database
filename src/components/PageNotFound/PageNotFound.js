import React from 'react';

const PageNotFound = ({onRouteChange}) => {

	return(
    <div><h1>404 Page Not Found!</h1>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Go Back" onClick={() => onRouteChange('home')}/>
    </div>
    </div>


		);
}

export default PageNotFound;