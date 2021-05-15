import React from 'react'
import styled from "styled-components";
import {
    NavLink
} from "react-router-dom";
const Header = () => {
    return (
        <Nav>
            <NavLink to="/">
                <Logo src="/images/logo.svg" />
            </NavLink>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt="home" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="home" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="home" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="home" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="home" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="home" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <NavLink to="/login">
                <UserImg src="images/avatar.jpg" />
            </NavLink>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    heigh: 70px;
    background: #090b13;
    display: felx;
    align-items: center;
    padding: 0 36px;
    justify-content: space-between;
    overflow: hidden;
`

const Logo = styled.img`
    width:80px;
`
const NavMenu = styled.div`
    display:flex;
    a{
        display:flex;
        align-items: center;
        padding: 0 12px;
        align-items: center;
        cursor: pointer;
        img{
            height: 20px
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after{
                content: "";
                height : 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                ${'' /* scalex(0.5) hoi to line aadathi dekhai (line ketali dekhai te naki kare) */}
                transform: scalex(0); 
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            }
        }
        &:hover{
            span:after{
                transform scalex(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    width:40px;
    height: 40px;
    flex: 1;
    border-radius:50%;
    cursor: pointer; 
`