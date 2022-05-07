import React from 'react';
import { Button, Card } from 'react-bootstrap';

const AllItem = ({item}) => {
    const {name, img, price, supplier, description} = item;

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
                    
                    
                </Card.Body><Button  variant="primary">Delete</Button>
            </Card>

        </div>
        
    );
};

export default AllItem;