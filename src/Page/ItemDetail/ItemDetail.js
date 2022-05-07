import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));


    }, [])
    return (
        <div>
            <h2>Item detail</h2>
            <div className='d-flex'>
                <div>
                    <img src={item.img} alt="" />
                    <p>Name: {item.name}</p>
                    <p>Supplier Name: {item.supplier}</p>
                    <p>Available Item: {item.quantity}</p>
                    <p><small>{item.description}</small></p>
                    <p>Price: {item.price}</p>
                    <Button className='btn'>Delivered</Button>

                </div>
                <div>
                    <input className='mb-1 ' type='number' pattern='[0-9]'></input>
                    <input className='mb-1 pe-5 ps-5' type="submit" value="ReStock" />
                    <Button>Manage Inventory</Button>
                </div>
            </div>

            
        </div>
    );
};

export default ItemDetail;