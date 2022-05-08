import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';


const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);
        const url = `https://shrouded-dusk-31144.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result =>{
                console.log(result);
            
        })

        
    };
    return (
        <div className='w-50 mx-auto '>
            <h2>Please Add Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name")} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' value={user.email} type="text" placeholder='Email' {...register("email", { required: true })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddItem;