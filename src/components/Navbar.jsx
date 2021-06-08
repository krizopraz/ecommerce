import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Cart from './Cart'
// ___________//
const Nav = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
color:white;
background:#2B2D42;
padding:1rem;
& > ul {
    & > li:not(last-child) {
        margin-right:1rem;
        & > a.active {
            border-bottom:1px solid ;
        }
        &>a{
            color:inherit;
            text-decoration:none;
        }
    }
    list-style:none;
    display:flex;
    justify-content:space-between;
}
`
const Navbar = () => {
    return (
        <Nav>
            <h1>E-Commerce</h1>
            <ul>
                <li>
                    <NavLink  exact to='/'>Ürünler</NavLink>
                </li>
                <li>
                    <NavLink to='/iletisim'>İletişim</NavLink>
                </li>
                <li>
                    <Cart />
                    <NavLink to='/sepet'>Sepetim</NavLink>
                </li>
            </ul>
        </Nav>
    )
}
export default Navbar