
import './Friends.css'
import { useLoaderData } from 'react-router-dom';
import Friend from '../../Common/Friend/Friend';

const Friends = () => {
    const friends = useLoaderData()
    return (
        <div>
            <h1>This is Friends {friends.length}</h1>
            <div className='friends'>
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;