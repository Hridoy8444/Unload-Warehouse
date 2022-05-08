import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import './ItemDetail.css';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [reload, setIsReload] =useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://shrouded-dusk-31144.herokuapp.com/item/${itemId}`;
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
        const url = `https://shrouded-dusk-31144.herokuapp.com/item/${itemId}`;
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
        const url = `https://shrouded-dusk-31144.herokuapp.com/item/${itemId}`;
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

    };
    const handleNavigate = () => {
        navigate('/manage');
    }
    return (
        <div>
            <h2>Item detail</h2>
            <div className='d-flex item-container'>
                <div className='w-50 mx-auto'>
                    <img src={item.img} alt="" />
                    <p>Name: {item.name}</p>
                    <p>Supplier Name: {item.supplier}</p>
                    <p>Available Item: {item.quantity}</p>
                    <p><small>{item.description}</small></p>
                    <p>Price: $  {item.price}</p>
                    <Button onClick={handleDeliver} className='btn'>Delivered</Button>

                </div>
                <Form onSubmit={handleReStock}>
                        <Form.Group className="mb-3" controlId="formBasicRestock">
                            <Form.Label className="d-flex justify-content-center text-success">Restock the Item</Form.Label>
                            <Form.Control type="number" name="restock" placeholder="Restock amount" />

                        </Form.Group>
                        <Button className='w-100' variant="success" type="submit">
                            Submit
                        </Button>
                        <div className='my-4 text-end'>
                            <Link to='/manage' className='btn btn-outline-danger w-100'>Manage Items</Link>
                        </div>
                    </Form>         
            </div>

            
        </div>
    );
};

export default ItemDetail;