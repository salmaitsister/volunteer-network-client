import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../Main/Main';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [volunteerData, setVolunteerData,loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            const userInfo = {
                isLoggedIn:true,
                name:user.displayName,
                email:user.email
            }
            setLoggedInUser(userInfo);
            storeAuthToken();
            history.replace(from);
        })
        .catch(error => {
            console.log(error.message)
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(idToken => {
            sessionStorage.setItem('token', idToken)
        })
        .catch(error => {
        // Handle error
        });
    }

    return (
        <div style={{width:'400px'}} className=' mx-auto text-center p-5 border border-secondary rounded mt-5 bg-white'>
            <h4 className='font-weight-bold'>Login With</h4>
            <button onClick={googleSignIn} className='border rounded-pill mt-4 row d-flex justify-content-between align-items-center py-2 btn'>
                <img className='w-100 col-2 pl-0' src="https://i.ibb.co/pZbCcqY/1004px-Google-G-Logo-svg.png" alt=""/>
                <h6 className="col-10 m-0">Continue with Google</h6>
            </button>
        </div>
    );
};

export default Login;