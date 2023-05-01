import  react from 'react'
import './App.css'
import Header from './component/header/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      
    </>
  )
}

export default App
