
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const Navigate = useNavigate()
    const handleGo = () => {
        Navigate(`/posts/${post.id}`)
    }
    return (
        <div className='post-container'>
            <p>Post Id {post.id}</p>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {/* <Link to={`/posts/${post.id}`}>Details</Link> */}
            <button onClick={handleGo}>Show Details</button>
        </div>
    );
};

export default Post;