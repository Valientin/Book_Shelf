import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNavItems';

const Nav = (props) => {
    return (
        <SideNav
        	showNav={props.showNav}
        	onHideNav={props.onHideNav}
        	navStyle={{
        		background: 'linear-gradient(#4d6545, #242424)',
        		maxWidth: '220px',
                transition: '2s'
        	}}
        >
       		<SideNavItems onHideNav={props.onHideNav}/>
        </SideNav> 
    );
};


export default Nav;
