import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Main/Main';

const Navbar = () => {
    const [volunteerData, setVolunteerData,loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const handleClick = (path) => {
        history.push(`/${path}`)
    }
    return (
        <div className="container my-4 d-flex justify-content-between">
            <img style={{width:'200px'}} src="https://iili.io/2WyllR.md.png" alt=""/>
            <div className='d-flex align-items-center'>
                <button onClick={() => handleClick('home')} className="btn btn-lg mx-1">Home</button>
                <button onClick={() => handleClick('register')} className="btn btn-primary btn-lg mx-1">Register</button>
                <button onClick={() => handleClick('registerList')} className="btn btn-dark btn-lg mx-1">Admin</button>
                {
                    loggedInUser.isLoggedIn ? <h5>{loggedInUser.name}</h5> : <button onClick={() => handleClick('login')} className="btn btn-success btn-lg mx-1">Login</button>
                }
            </div>
        </div>
    );
};

export default Navbar;