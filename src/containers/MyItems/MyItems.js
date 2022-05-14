import './MyItems.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useEffect, useState } from 'react';
const MyItems = () => {
    const [trucks, setTrucks] = useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {
        const url = `https://fathomless-crag-24672.herokuapp.com/myProduct?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTrucks(data))
    }, [user, trucks])
    // delete product
    const handleDelete = id => {
        const sure = window.confirm('are you sure to stock our this item')
        if (sure) {
            const url = `https://fathomless-crag-24672.herokuapp.com/truck/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remaining = trucks.filter(truck => truck._id === id);
                        setTrucks(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <div>
                {trucks.map((truck) => (
                    <div key={truck._id}>
                        <div className='text-center mt-5'>
                            <img src={truck.img} alt="" />
                            <h2>{truck.name}</h2>
                            <h4>{truck.sName}</h4>
                            <h2>Price: {truck.price}</h2>
                            <button className='btn btn-danger mb-2' onClick={() => handleDelete(truck._id)}>Delete</button>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default MyItems;