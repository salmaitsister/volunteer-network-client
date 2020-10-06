import React, { useState, useContext } from 'react';
import { UserContext } from '../Main/Main';

const VolunteerActivities = () => {
    const [volunteerData, setVolunteerData, loggedInUser] = useContext(UserContext);

    const [allUserRegister, setAllUserRegister] = useState([])

    fetch('https://stormy-atoll-89779.herokuapp.com/allRegister?email='+loggedInUser.email, {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('token')}`  
        }
    })
    .then(res => res.json())
    .then(data => setAllUserRegister(data))

    const deleteActivity = (id) => {
        fetch(`https://stormy-atoll-89779.herokuapp.com/deleteActivity/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('deleted successfully')
        })
    }

    return (
        <div className="row container mx-auto">
            {
               allUserRegister.map(data => 
                    <div key={data._id} className="col-md-6 mt-3">
                        <div className="border border-secondary rounded d-flex py-2 bg-white">
                            <img className="w-100 col-5 pl-2" src={data.picture} alt=""/>
                            <div>
                                <h4>{data.activity}</h4>
                                <h5>{data.date}</h5>
                                <button onClick={() => deleteActivity(data._id)} className='btn btn-danger mt-3'>Cancel</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default VolunteerActivities;