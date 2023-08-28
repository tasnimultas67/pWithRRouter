
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>{friend.name}</h2>
            <p>Username: {friend.username}</p>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>Website: {friend.website}</p>
            <button onClick={goBack}>Go Back</button>

        </div>
    );
};

export default FriendDetails;