import React from 'react';

import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

const Layout = (props) => {

	return (
        <div className="inline-root__wrapper">
        	<Header/>
        	<div className="root-wrapper__center">
        		{props.children}
        	</div>
			<Footer />
        </div>
	)
};


export default Layout;
