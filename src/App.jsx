import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PostListProvider from './store/post-list-store'


function App() {

  return (
    <PostListProvider>
      <div className='appContainer'>
        <Sidebar/>
        <div className="content">
          <Header />
           <Outlet/>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  )
}

export default App

