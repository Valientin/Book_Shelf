import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

class SideNavItems extends React.Component {

	state = {
		items : [
			{
				type:'navItem',
				icon:'home',
				text:'Home',
				link:'/',
				restricted:false
			},
			{
				type:'navItem',
				icon:'user-circle',
				text:'My profile',
				link:'/user',
				restricted:true
			},
			{
				type:'navItem',
				icon:'user-plus',
				text:'Add admins',
				link:'/user/register',
				restricted:true
			},
			{
				type:'navItem',
				icon:'sign-in',
				text:'Login',
				link:'/login',
				restricted:false,
				exclude:true
			},
			{
				type:'navItem',
				icon:'archive',
				text:'My reviews',
				link:'/user/user-reviews',
				restricted:true
			},
			{
				type:'navItem',
				icon:'plus-circle',
				text:'Add reviews',
				link:'/user/add',
				restricted:true
			},
			{
				type:'navItem',
				icon:'sign-out',
				text:'Logout',
				link:'/user/logout',
				restricted:true
			}
		]
	}

	element = (item, i) => (
    	<div key={i} className={item.type}>
    		<Link to={item.link} onClick={this.props.onHideNav}>
    			<FontAwesome name={item.icon} size="lg" />
    			{item.text}
    		</Link>
    	</div>
	)

	showItems = () => (
		this.props.user.login ?
			this.state.items.map((item, i) => {
				if(this.props.user.login.isAuth){
					return !item.exclude ?
						this.element(item,i)
					: null
				} else {
					return !item.restricted ?
						this.element(item,i)
					: null
				}
			})
		: null
	)

	renderTitle = () => (
    	<div className="nav-title__wrapper">
    		<h4>Menu</h4>
    	</div>
    )

    render(){
		return (
			<div>
				{this.renderTitle()}
				{this.showItems()}
			</div>
		);
	}
};


function mapStateToProps(state){
	return{
		user: state.user
	}
}


export default connect(mapStateToProps)(SideNavItems);