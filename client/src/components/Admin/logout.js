import React from 'react';
import axios from 'axios';

const Logout = (props) => {

    axios.get(`/api/logout`)
    .then(request => {
        setTimeout(()=>{
            if(!props.user.login.error && (props.match.url === '/user/logout')){
                props.history.push('/')
            }
        },2000)
    })
    return(
        <div className="logout_container">
            <h1>Sorry to see you go :(</h1>
        </div>
    )
}

export default Logout;