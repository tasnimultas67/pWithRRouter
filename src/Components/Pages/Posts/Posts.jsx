
import './Posts.css'
import { useLoaderData } from 'react-router-dom';
import Post from '../../Common/Post/Post';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h2>This is Post Page, {posts.length} Posts</h2>
            <div className='posts-container'>
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;