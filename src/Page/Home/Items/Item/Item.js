import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    const {_id, name, img, description, supplier, price} = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    } 
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
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
                    
                    <Button onClick={() => navigateToItemDetail(_id)} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Item;