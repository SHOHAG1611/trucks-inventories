import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemDeteils.css'

const ItemDeteils = () => {
    const { detailId } = useParams();
    const [details, setDetails] = useState({})
    // load single truck details
    useEffect(() => {
        const url = `http://localhost:5000/truck/${detailId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    // update quantity
    const handleAddQuantity = event => {
        event.preventDefault();
        const proside = window.confirm('are you sure to add item in stock?');
        if (proside) {
            const newQuantity = parseInt(event.target.quantity.value);
            const totalQuantity = parseInt(details.quantity) + newQuantity;
            console.log(totalQuantity)
            const newUpdateQuantity = {totalQuantity }

            const url = `http://localhost:5000/truck/${detailId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUpdateQuantity),
            })
                .then(res => res.json())
                .then(data => {
                    event.target.reset();
                    console.log(data)
                })
        }

    }

    // update quantity
    // const handleAddQuantity = event => {
    //     event.preventDefault();
    //     const prosid = window.confirm('are you sure ?');
    //     if (prosid) {
    //         const oldQuantity = parseInt(event.target.quantity.value);
    //         const totalQuantity = parseInt(details.quantity) + oldQuantity;
    //         const newQuantity = { totalQuantity };
    //         console.log(totalQuantity)
    //         const url = `http://localhost:5000/truck/${detailId}`;
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(newQuantity),
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log('success', data);
    //                 event.target.reset();
    //             })
    //     }
    // }


    return (
        <div style={{
            backgroundImage: `url("https://www.pngmagic.com/product_images/single-color-background.jpg")`,
            backgroundPosition: 'center'
        }}>
            <div className='container mx-auto text-center'>
                <h1>Truck Name: {details.name}</h1>
                <img style={{ width: '400px', height: '300px', border: 'none', borderRadius: '15px' }} src={details.img} alt="" />
                <h2>{details.body}</h2>
                <h5>Quantity:{details.quantity}</h5>
                <button className='minus-btn btn btn-danger'>Minus Quantity</button>
            </div>
            <div>
                <form className='upgrade-quantity' onSubmit={handleAddQuantity}>
                    <input style={{ height: '50px', width: '200px', border: 'none', borderRadius: '10px' }} type="number" name="quantity" id="" placeholder='Upgrade Quantity' />
                    <br />
                    <br />
                    <input className='btn btn-info text-center' type="submit" value="Add Quantity" />
                </form>
            </div>
            <Link className='manageInventories-btn' to='/manageInventories'> Manage Inventories</Link>
        </div>
    );
};

export default ItemDeteils;