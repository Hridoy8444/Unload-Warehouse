import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [reload, setIsReload] =useState(true)

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));


    }, [reload]);
    const handleDeliver = event => {
        event.preventDefault();
        const quantity = item.quantity -1;
        if(quantity < 0){
            return toast('Product Out of Stock')
        }
        
        const updateQuantity = {quantity};
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            setIsReload(!reload);
            
        })
    };
    const handleReStock = event => {
        event.preventDefault();
        const value = event.target.restock.value;
        console.log(value);
        if(value < 0){
            return toast('Please enter positive value!')
        }
        const quantity = item.quantity + parseInt(value);
        const updateQuantity = { quantity };
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            setIsReload(!reload);
            event.target.reset();
            
        })

    }
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
                    <Button onClick={handleDeliver} className='btn'>Delivered</Button>

                </div>
                <div>
                    <input onBlur={handleReStock} className='mb-1 ' type='number' pattern='[0-9]' name='restock'></input>
                    <input  className='mb-1 pe-5 ps-5' name='restock' type="submit" value="restock" />
                    <Button>Manage Inventory</Button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>

            
        </div>
    );
};

export default ItemDetail;