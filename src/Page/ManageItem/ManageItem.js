import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AllItem from './AllItem/AllItem';

const ManageItem = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/item';
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);
    const handleToNavigate = () =>{
        navigate('/additem')
    }
    return (
        <div>
            <h2>Manage Your Item: {items.length}</h2>
            <div className='d-flex'>
                <div>
                    <Button onClick={handleToNavigate}>Add Item</Button>
                </div>
                <div className='row container mx-auto ms-4'>
            {
                items.map(item => <AllItem
                key= {item._id}
                item={item}
                ></AllItem>)
            }
            </div>
            </div>
        </div>
    );
};

export default ManageItem;