import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const MyItem = () => {
    const [item, setItem] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getItem = async () => {
            const email = user.email;
            const url = `http://localhost:5000/product?email=${email}`;
            const { data } = await axios.get(url);
            console.log(data);
            setItem(data);

        }
        getItem();

    }, [user]);
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
                    const remaining = item.filter(item => item._id !== id);
                    setItem(remaining);

                })
        }
    }

    return (
        <div>
            <h2>My items:{item.length}</h2>
            <div className='d-flex manage-container'>
                
                <div className='row container mx-auto ms-4'>
                    {
                        item.map(item => <div key={item._id} className='col-12 col-md-6 col-lg-4  '>
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


                                </Card.Body><Button className='card-btn' onClick={() =>handleDelete(item._id) } variant="primary">Delete</Button>
                            </Card>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItem;

