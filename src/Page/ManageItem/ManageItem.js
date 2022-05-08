import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';


const ManageItem = () => {
    const navigate = useNavigate();
    const [items, setItems] = useItems();


    const handleToNavigate = () => {
        navigate('/additem')
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);

                })
        }
    }
    return (
        <div >
            <h2 className='text-center'>Manage Your Item</h2>
            <div className='d-flex'>
                <div>
                    <Button onClick={handleToNavigate}>Add Item</Button>
                </div>
                <div className='row container mx-auto ms-4'>
                    {
                        items.map(item => <div key={item._id} className='col-12 col-md-6 col-lg-4  '>
                            <Card style={{ width: '18rem', height: "100vh", marginBottom: "20px" }}>
                                <Card.Img className='mx-auto w-100 ' style={{ width: '260px', height: '230px' }} variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        Supplier: {item.supplier}
                                    </Card.Text>
                                    <Card.Text>
                                        Available Items: {item.quantity}
                                    </Card.Text>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Card.Text>
                                        Price: {item.price}
                                    </Card.Text>


                                </Card.Body><Button className='card-btn' onClick={handleDelete} variant="primary">Delete</Button>
                            </Card>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageItem;