import React from 'react';
import notFound from '../Images/NotFound/notFound.jpg'

const NotFound = () => {
    return (
        <div style={{minHeight: "70vh", marginTop: "30px"}} className='text-center'>
            <img  height={400} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;