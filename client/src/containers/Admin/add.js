import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBook, clearNewBook } from '../../actions';

class AddBook extends React.Component{

    state = {
        formdata:{
            name:'',
            author:'',
            review:'',
            pages:'',
            rating: 1,
            price:''
        },
        error:''
    }

    handleInput = (e, name) => {
        const newFormdata = {...this.state.formdata}

        newFormdata[name] = e.target.value;

        this.setState({formdata:newFormdata,error:''})
    }

    showNewBook = (book) => (
        book.post ?
            <Link className="conf_link" to={`/books/${book.bookId}`}>
                Click to see the post ;)
            </Link>
        : null
    )

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(addBook({
            ...this.state.formdata,
            ownerId:this.props.user.login.id
        }))
    }

    componentWillUnmount(){
        this.props.dispatch(clearNewBook())
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.books.newbook.post){
            this.setState({
                formdata:{
                    name:'',
                    author:'',
                    review:'',
                    pages:'',
                    rating: 1,
                    price:''
                },
                error: ''
            })
        } else {
            this.setState({
                error: 'Error, please try again'
            })
        }
    }

    render(){
        let data = this.state.formdata;
        return(
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Add a review</h2>

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
                            type="number"
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
                    <button type="submit">Add review</button>
                    <div className="error">
                        {this.state.error}
                    </div>
                    {
                        this.props.books.newbook ?
                            this.showNewBook(this.props.books.newbook)
                        : null
                    }
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

export default connect(mapStateToProps)(AddBook)