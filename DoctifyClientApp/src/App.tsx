import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Register from './Pages/Register'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom"
import Home from './Pages/Home'
import RegisterFormik from './formValidation/RegisterFormik'
import LoginFormik from './formValidation/LoginFormik'
import Documents from './components/AddDocuments'
import SideBar from './components/SideBar'
import ErrorPage from './ErrorPage/Errorpage'
import Error from './ErrorPage/Error'
import GetDocument from './Pages/GetDocument'
import UserNavbar from './components/UserNavbar'
import DocumentViewer from './Pages/DocumentViewer'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='user' element={<UserNavbar />}>
          <Route path="register" element={<RegisterFormik />} />
          <Route path="login" element={<LoginFormik />} />
        </Route>
        <Route path='/' element={<Home />}>
          <Route path="addDocs" element={<Documents />} />
          <Route path="getDocs" element={<GetDocument />} />
        </Route>
        <Route path='documentViewer' element={<DocumentViewer />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
// `

