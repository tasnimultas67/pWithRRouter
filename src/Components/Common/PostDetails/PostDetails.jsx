
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className='postD-container'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;