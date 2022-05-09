import { Link, useParams } from 'react-router-dom';
import './ItemDeteils.css'

const ItemDeteils = () => {
    const { detailId } = useParams();
    const handleAddQuantity = event => {
        event.preventDefault();
        const numbers=event.target.quantity.value;
        console.log(numbers)
    }
    return (
        <div>
            <h2>Truck:{detailId}</h2>
            <Link to='/manageInventories'><button className='btn btn-primary text-center'>Manage Inventories</button></Link>
            <div>
                <form className='upgrade-quantity' onSubmit={handleAddQuantity}>
                    <input type="number" name="quantity" id="" placeholder='Upgrade Quantity' />
                    <br />
                    <br />
                    <input type="submit" value="Add Quantity" />
                </form>
            </div>
        </div>
    );
};

export default ItemDeteils;