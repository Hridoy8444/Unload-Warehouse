import React, { useEffect, useState } from 'react';
import Item from './Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2 className='text-center'>Items: {items.length}</h2>
            <div className='row container mx-auto ms-4'>
                {
                    items.slice(0, 6).map(item => <Item
                    key={item._id}
                    item={item}
                    ></Item> )
                }

            </div>
        </div>
    );
};

export default Items;