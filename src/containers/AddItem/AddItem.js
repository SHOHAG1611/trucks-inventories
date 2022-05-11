import React from 'react';
import './AddItem.css'

const AddItem = () => {
    const handleAddToDb = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const sName = event.target.sName.value;
        const body = event.target.body.value;
        const email = event.target.email.value;
        const item = { name, img, price, quantity, sName, body, email }
        const url = `http://localhost:5000/truck`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            }
            )

    }
    return (
        <div style={{
            backgroundImage: `url("https://p0.pikist.com/photos/479/527/background-gradation-geomatri-form-blue-the-formation-of-design-decor-decorative.jpg")`
        }} >
            <h1 className='text-center'>Add Your Items</h1>
            <div className='add-item-form text-center mt-5 mx-auto'>
                <form onSubmit={handleAddToDb}>
                    <input className='add-input' type="text" name='name' placeholder='Item Name' required />
                    <input className='add-input' type="text" name='img' placeholder='Image Url' required />
                    <input className='add-input' type="number" name="price" id="" placeholder='Enter Price' required />
                    <input className='add-input' type="number" name="quantity" id="" placeholder='Quantity' required />
                    <input className='add-input' type="text" name='sName' placeholder='Supplier Name' required />
                    <textarea className='add-input' name="body" id="" cols="48" rows="3" placeholder='Add Description' required></textarea>
                    <input className='add-input' type="email" name="email" id="" placeholder='Enter Your Email' required />
                    <input className='btn btn-primary' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;