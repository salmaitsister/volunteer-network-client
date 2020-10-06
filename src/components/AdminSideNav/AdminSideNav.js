import React from 'react';
import { useHistory } from 'react-router-dom';

const AdminSideNav = () => {
    const history = useHistory()
    const handleClick = (path) => {
        history.push(`/${path}`)
    }

    return (
        <div className='d-flex flex-column py-3'>
            <button onClick={() => handleClick('registerList')} className="btn text-left"> <img style={{width:'30px'}} src="https://i.ibb.co/M7JdYDP/users-alt-1.png" alt=""/> Volunteer register list</button>
            <button onClick={() => handleClick('addEvent')} className="btn mt-2 text-left"> <img style={{width:'30px'}} src="https://i.ibb.co/h172NJ2/plus-1.png" alt=""/> Add event</button>
        </div>
    );
};

export default AdminSideNav;