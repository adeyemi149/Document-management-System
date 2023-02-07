import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillCaretDown } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from '../store/hook'
import { setToken } from '../features/authSlice';
import "../App.css"

const Navbar: React.FC = () => {
  const [dropDown, setDropDown] = useState(false)
  const dispatch = useAppDispatch()

  const logout = () => {
    localStorage.removeItem("token")
    dispatch(setToken(""))
  }

  const handleDropDown = () => {
    setDropDown(!dropDown);
  }

  return (
    <Nav>
      <div>
        <NavLeft>
          <h1><Link to="/" >DOCTIFY</Link></h1>
          <ul>
            <li><Link to="/" >Home</Link></li>
          </ul>
        </NavLeft>
        <NavRight>
          <a onClick={handleDropDown}>
            <img src='/images/King.png' />
            <AiFillCaretDown />
          </a>
          {dropDown && <DropDown>
            <ul>
              <li onClick={logout}>Logout</li>
            </ul>
          </DropDown>}
        </NavRight>
      </div>
    </Nav>
  )
}

export default Navbar;

const Nav = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 999;
  align-content: center;
  background-color: #ffffff;
  width: 100%;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);

  & > div {
    display: flex;
    align-items: center;
    padding: 0 10px 0 10px;
    width: 100%;
    height: 100%;
  }
`

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 100%;

  h1 {
    font-size: 1.85rem;
    font-weight: 700;
    margin-right: 1rem;
    line-height: 2.25rem;

    a {
      text-decoration: none;
      color: #383838;
    }
  }

  ul {
    list-style-type: none;
    font-size: 16px;
    font-weight: 500;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    line-height: 1.5;

    a {
      text-decoration: none;
      color: #383838;
    }
  }
`

const DropDown = styled.div`
  position: absolute;
  z-index: -1;
  top: 65px;
  right: 30px;
  background: white;
  width: 320px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  

  ul {
    padding: 10px 0 10px 0;
    margin: 0;
    li {
      list-style-type: none;
      padding: 10px 0 10px 10px;
      transition-duration: 247ms;
    }

    li:hover {
      background: rgba(0, 0, 0, 0.09);
			color: #8181fb;
      cursor: pointer;
    }
  }
`

const NavRight = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 35px;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
    }

    img {
      width: 37px;
      border-radius: 50%;
      position: relative;
    }
`


