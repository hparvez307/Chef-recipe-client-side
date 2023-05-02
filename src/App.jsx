import  react from 'react'
import './App.css'
import Header from './component/header/Header'
import { Outlet } from 'react-router-dom';
import Footer from './component/footer/Footer';

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
