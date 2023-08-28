import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/Pages/About/About.jsx';
import Contact from './Components/Pages/Contact/Contact.jsx';
import Error from './Components/Error/Error.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import Friends from './Components/Pages/Friends/Friends.jsx';
import FriendDetails from './Components/Common/FriendDetails/FriendDetails.jsx';
import Posts from './Components/Pages/Posts/Posts.jsx';
import PostDetails from './Components/Common/PostDetails/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <div><h1>This is First Deafult Page</h1></div>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/friend/:friendId',
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: '/posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/posts/:postId',
        element: <PostDetails></PostDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: '*',
        element: <div><h1>404</h1></div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
