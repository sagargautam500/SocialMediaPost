import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PostList1 from './components/PostList1.jsx'
import CreatePost from './components/CreatePost.jsx'
const router = createBrowserRouter([
  {
     path:'/',
     element:<App/>,
     children:[
      {path:"/",element:<PostList1/>},
      {path:"create-post",element:<CreatePost/>}
     ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)


