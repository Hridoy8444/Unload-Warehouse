import React, { useEffect, useState } from 'react';
import Item from './Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('bike.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2>Items: {items.length}</h2>
            <div className='row container mx-auto ms-4'>
                {
                    items.map(item => <Item
                    key={item.id}
                    item={item}
                    ></Item> )
                }

            </div>
        </div>
    );
};

export default Items;