import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions';

import BookItem from '../widgetsUI/book_item';

class HomeContainer extends React.Component {

	componentDidMount(){
		this.props.dispatch(getBooks(7,0,'desc'))
	}

	renderItems = (books) => (
		Array.isArray(books.list) && books.list.length > 1 ? 
			books.list.map( item => (
            	<BookItem {...item} key={item._id} />
            ))
		: null
    )

    loadmore = () => {
    	let count = this.props.books.list.length;
    	this.props.dispatch(getBooks(3,count,'desc',this.props.books.list))
    }

	render(){
		return(
			<div>
				{this.renderItems(this.props.books)}
				<div
					className="loadmore"
					onClick={this.loadmore}
				>Load More</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		books: state.books
	}
}

export default connect(mapStateToProps)(HomeContainer);