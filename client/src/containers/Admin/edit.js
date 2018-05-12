import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBook, updateBook, clearBook, deleteBook } from '../../actions';

class EditBook extends React.PureComponent{

    state = {
        formdata:{
            _id:this.props.match.params.id,
            name:'',
            author:'',
            review:'',
            pages:'',
            rating:'',
            price:''
        }
    }

    handleInput = (e, name) => {
        const newFormdata = {...this.state.formdata}

        newFormdata[name] = e.target.value;

        this.setState({formdata:newFormdata})
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(updateBook(this.state.formdata))
    }

    deletePost = () => {
        this.props.dispatch(deleteBook(this.props.match.params.id))
    }

    redirectUser(){
        setTimeout(() => {
            this.props.history.push('/user/user-reviews')
        },1000)
    }

    componentDidMount(){
        this.props.dispatch(getBook(this.props.match.params.id))
    }

    componentWillUnmount(){
        this.props.dispatch(clearBook())
    }

    componentWillReceiveProps(nextProps){
        let book = nextProps.books.book;
        this.setState({
            formdata:{
                _id:book._id,
                name:book.name,
                author:book.author,
                review:book.review,
                pages:book.pages,
                rating:book.rating,
                price:book.price
            }
        })
    }


    render(){
        let books = this.props.books;
        let data = this.state.formdata;
        return(
            <div className="rl_container article edit">

                {
                    books.updateBook ?
                        <Link className="edit_confirm" to={`/books/${books.book._id}`}>
                                <span>Updated! Click here to see your post ;)</span>
                        </Link>
                    : null
                }

                {
                    books.postDeleted ?
                        <div className="red_tag">
                            Post Deleted
                            {this.redirectUser()}
                        </div>
                    : null
                }

                <form onSubmit={this.submitForm}>
                    <h2>Edit a review</h2>

                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Enter name"
                            value={data.name}
                            onChange={(e) => this.handleInput(e,'name')}
                        />
                    </div>
                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Enter author"
                            value={data.author}
                            onChange={(e) => this.handleInput(e,'author')}
                        />
                    </div>
                    <textarea 
                        value={data.review}
                        onChange={(e) => this.handleInput(e,'review')}
                    />
                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Enter pages"
                            value={data.pages}
                            onChange={(e) => this.handleInput(e,'pages')}
                        />
                    </div>
                    <div className="form_element">
                        <select
                            value={data.rating}
                            onChange={(e) => this.handleInput(e,'rating')}
                        >
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            <option val="4">4</option>
                            <option val="5">5</option>
                        </select>
                    </div>
                    <div className="form_element">
                        <input 
                            type="number"
                            placeholder="Enter Price"
                            value={data.price}
                            onChange={(e) => this.handleInput(e,'price')}
                        />
                    </div>
                    <button type="submit">Edit review</button>
                    <div className="delete_post">
                        <div className="button"
                            onClick={this.deletePost}
                        >
                            Delete review
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        books:state.books
    }
}

export default connect(mapStateToProps)(EditBook)