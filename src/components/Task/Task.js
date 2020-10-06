import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css'
import { UserContext } from '../Main/Main';
import './Task.css'

const HomePage = () => {
    const [volunteerData, setVolunteerData] = useContext(UserContext)
    const [activities, setActivities] = useState([]);
    const history  = useHistory()

    useEffect(() => {
        fetch('https://stormy-atoll-89779.herokuapp.com/allActivities')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, []);

    const handleSelectVolunteer = (data) => {
        setVolunteerData(data);
        history.push('/register')
    }

    // const handleAddActivities = () => {
    //         fetch('https://stormy-atoll-89779.herokuapp.com/addActivities', {
    //             method: 'POST',
    //             headers:{
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(fakeData)
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             alert('added on mongodb')
    //         })
    // }

    return (
        <div className='container text-center '>
            {/* <button onClick={handleAddActivities}>Add</button> */}
            <h2 className='mt-5 mb-4'>I GROW BY HELPING PEOPLE IN NEED</h2>
            <div className='row '>
                {
                    activities.map(data => 
                        <div key={data._id} className='col-md-3 col-sm-6 mt-4'>
                            <div onClick={() => handleSelectVolunteer(data)} className='p-2 volunteer  rounded bg-white'>
                                <img className='w-100' src={data.picture} alt=""/>
                                <h5 className='p-3'>{data.title}</h5>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomePage;