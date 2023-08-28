
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { name, email, phone, username, website, id } = friend
    return (
        <div className='friend'>
            <h4>{name}</h4>
            <p>Username: {username}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <Link to={`/friend/${id}`}>Show Friend</Link>
        </div>
    );
};

export default Friend;