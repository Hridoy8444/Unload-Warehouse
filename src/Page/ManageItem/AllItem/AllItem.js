import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useItems from '../../../hooks/useItems';

const AllItem = ({item}) => {
    const {name, img, price, supplier, description, quantity} = item;
    const [items, setItems] = useItems();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/item/${id}`
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
        
            <div className='col-12 col-md-6 col-lg-4  '>
            <Card style={{ width: '18rem', height: "100vh", marginBottom: "20px"  }}>
                <Card.Img className='mx-auto w-100 ' style={{width: '260px', height: '230px'}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Supplier: {supplier}
                    </Card.Text>
                    <Card.Text>
                        Available Items: {quantity}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    
                    
                </Card.Body><Button className='card-btn' onClick={handleDelete}  variant="primary">Delete</Button>
            </Card>

        </div>
        
    );
};

export default AllItem;