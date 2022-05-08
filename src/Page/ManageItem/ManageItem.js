import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import AllItem from './AllItem/AllItem';

const ManageItem = () => {
    const navigate = useNavigate();
    const [items, setItems] = useItems();

    
    const handleToNavigate = () =>{
        navigate('/additem')
    }
    return (
        <div>
            <h2 className='text-center'>Manage Your Item</h2>
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