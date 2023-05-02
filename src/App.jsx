import  react from 'react'
import './App.css'
import Header from './component/header/Header'
import { Outlet } from 'react-router-dom';
import Footer from './component/footer/Footer';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
