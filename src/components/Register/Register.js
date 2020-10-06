import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Main/Main';

const Register = () => {
    const [volunteerData, setVolunteerData, loggedInUser, setLoggedInUser, registerData, setRegisterData] = useContext(UserContext);
    const history = useHistory()

    const today = new Date();
    today.setDate(today.getDate());
    const newDate = today.toISOString().substr(0,10);

    const [date, setDate] = useState(newDate);

    const handleDateChange = event => setDate(event.target.value);

    const handleSubmit = (event) => {
        const registerData = {
            name : event.target.elements.name.value,
            email : event.target.elements.email.value,
            date : event.target.elements.date.value,
            description : event.target.elements.description.value,
            activity : event.target.elements.activity.value,
            picture : volunteerData.picture
        };

        fetch('https://stormy-atoll-89779.herokuapp.com/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(registerData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                history.push('/volunteerActivities')
            }
            
            
        })

        event.preventDefault();
    }
    return (
        <div style={{width:'400px'}} className=' mx-auto text-center p-5 bg-white border border-secondary rounded mt-5'>
            <h4 className='font-weight-bold mb-4'>Register as a Volunteer</h4>
            <form onSubmit={handleSubmit}>
                <TextField 
                    className="form-control my-2" 
                    name="name" 
                    id="filled-size-small" 
                    size="small" 
                    type="text"
                    placeholder="Name"
                    defaultValue={loggedInUser.name}
                    variant="outlined" 
                    required
                />

                <TextField 
                    className="form-control my-2" 
                    name="email" 
                    id="filled-size-small" 
                    size="small" 
                    type="email"
                    placeholder="Email"
                    defaultValue={loggedInUser.email}
                    variant="outlined" 
                    required
                />

                <TextField 
                    className="form-control my-2" 
                    name="date" 
                    type="date" 
                    defaultValue={date}
                    onChange= {handleDateChange}
                    id="date" 
                    size="small" 
                    placeholder="Your Email"
                    variant="outlined" 
                    required
                />

                <TextField 
                    className="form-control my-2" 
                    name="description" 
                    id="filled-size-small" 
                    size="small" 
                    type="text"
                    placeholder="Description"
                    variant="outlined" 
                    required
                />

                <TextField 
                    className="form-control my-2" 
                    name="activity" 
                    id="filled-size-small" 
                    size="small" 
                    type="text"
                    placeholder="Volunteer Activity"
                    defaultValue={volunteerData.title}
                    variant="outlined" 
                    required
                />

                <Button type="submit" className="w-100 my-2"   variant="contained" color="primary">Registration</Button>
            </form>
            
        </div>
    );
};

export default Register;