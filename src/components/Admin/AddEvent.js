import React from 'react';
import AdminSideNav from '../AdminSideNav/AdminSideNav';

const AddEvent = () => {
    const handleSubmit = (event) => {
        const eventDetail = {
            title : event.target.elements.title.value,
        };
        fetch('https://stormy-atoll-89779.herokuapp.com/addActivities', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(eventDetail)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('event added successfully')
            }
        })
        event.preventDefault()
    }

    return (
        <div className='container mt-5 d-flex row mx-auto'>
            <div className='col-md-3'>
               <AdminSideNav/>
            </div>
            <div className='col-md-9 bg-white py-3'>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Event Title</label>
                        <input type="text" 
                        name="title"
                        class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Banner</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;