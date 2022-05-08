import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    const {_id, name, img, description, supplier, price} = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    } 
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <Card style={{ width: '18rem' , height: "100vh", marginBottom: "20px" }}>
                <Card.Img className='mx-auto w-100 ' style={{width: '260px', height: '230px'}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Supplier: {supplier}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    
                    <Button className='card-btn' onClick={() => navigateToItemDetail(_id)} variant="primary">Update</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Item;