import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import Nav from './Sidenav/sidenav';

class Header extends React.Component {

	state = {
		showNav: false
	}

	onHideNav = () => {
		this.setState({showNav: false})
	}

	onShowNav = () => {
		this.setState({showNav: true})
	}

    render(){
    	return (
    	    <header>
    	    	<div className="open_nav">
    	    		<FontAwesome
    	    			onClick={() => this.onShowNav()}
    	    			className="far"
        				name='align-center'
        				size='2x'
        				style={{ 
        					color: '#ffffff',
        					padding: '6px 10px',
        					cursor: 'pointer'
        				}}
      				/>
    	    	</div>
    	    	<Nav
    	    		showNav={this.state.showNav}
    	    		onHideNav={() => this.onHideNav()}
    	    	/>
    	    	<Link to="/" className="logo">
      				The Book Shelf
      			</Link>
    	    </header>
    	)
    }
};

export default Header;
