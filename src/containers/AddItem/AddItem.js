import React from 'react';
import './AddItem.css'

const AddItem = () => {
    return (
        <div  style={{
            backgroundImage: `url("https://p0.pikist.com/photos/479/527/background-gradation-geomatri-form-blue-the-formation-of-design-decor-decorative.jpg")`
        }} >
            <h1 className='text-center'>Add Your Items</h1>
            <div className='add-item-form text-center mt-5 mx-auto'>
                <form>
                    <input className='add-input' type="text" name='name' placeholder='Item Name' required />
                    <input className='add-input' type="text" name='imgUrl' placeholder='Image Url' required />
                    <input className='add-input' type="number" name="price" id="" placeholder='Enter Price' required />
                    <input className='add-input' type="number" name="quantity" id="" placeholder='Quantity' required />
                    <input className='add-input' type="number" name="sold" id="" placeholder='Sold' required />
                    <input className='add-input' type="text" name='supplierName' placeholder='Supplier Name' required />
                    <textarea className='add-input' name="description" id="" cols="38" rows="4" placeholder='Add Description' required></textarea>
                    <input className='add-input' type="email" name="email" id="" placeholder='Enter Your Email' required />
                    <input className='btn btn-primary' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;