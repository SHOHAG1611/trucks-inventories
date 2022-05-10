import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemDeteils.css'

const ItemDeteils = () => {
    const { detailId } = useParams();
    const [details, setDetails] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/truck/${detailId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    // go to manageInventories page/route
    const handleAddQuantity = event => {
        event.preventDefault();
        const numbers = event.target.quantity.value;
        console.log(numbers)
    }
    return (
        <div>
            <div className='container mx-auto text-center'>
                <h1>Truck Name: {details.name}</h1>
                <img style={{ width: '400px', height: '300px', border:'none',borderRadius:'15px'}} src={details.img} alt="" />
                <h2>{details.body}</h2>
                <h5>Quantity:{details.quantity}</h5>
            </div>
            <div>
                <form className='upgrade-quantity' onSubmit={handleAddQuantity}>
                    <input style={{ height: '50px', width: '200px', border: 'none', borderRadius: '10px' }} type="number" name="quantity" id="" placeholder='Upgrade Quantity' />
                    <br />
                    <br />
                    <input type="submit" value="Add Quantity" />
                </form>
            </div>
            <Link style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }} to='/manageInventories'><button className='btn btn-primary text-center'>Manage Inventories</button></Link>
        </div>
    );
};

export default ItemDeteils;