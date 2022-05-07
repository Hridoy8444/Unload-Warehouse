import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const {itemId} =useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));


    }, [])
    return (
        <div>
            <h2>welcome to detail: {item.name}</h2>

            <Button className='btn '>Proceed CheckOut</Button>
        </div>
    );
};

export default ItemDetail;