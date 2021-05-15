import React from 'react'
import styled from "styled-components";
import {
    NavLink
} from "react-router-dom";

const Movies = () => {
    return (
        <>
            <Container>
                <h4>Recommended For You</h4>
                <Content>
                    <Wrap>
                        <NavLink to="/detail">
                            <img src="/images/hostar_img.jpg" alt="" />
                        </NavLink>
                    </Wrap>
                    <Wrap>
                        <NavLink to="/detail">
                            <img src="/images/hostar_img.jpg" alt="" />
                        </NavLink>
                    </Wrap>
                    <Wrap>
                        <NavLink to="/detail">
                            <img src="/images/hostar_img.jpg" alt="" />
                        </NavLink>
                    </Wrap>
                    <Wrap>
                        <NavLink to="/detail">
                            <img src="/images/hostar_img.jpg" alt="" />
                        </NavLink>
                    </Wrap>
                    <Wrap>
                        <NavLink to="/detail">
                            <img src="/images/hostar_img.jpg" alt="" />
                        </NavLink>
                    </Wrap>
                    <Wrap>
                        <NavLink to="/detail">
                            <img src="/images/hostar_img.jpg" alt="" />
                        </NavLink>
                    </Wrap>
                    <Wrap>
                        <NavLink to="/detail">
                            <img src="/images/hostar_img.jpg" alt="" />
                        </NavLink>
                    </Wrap>
                    <Wrap>
                        <NavLink to="/detail">
                            <img src="/images/hostar_img.jpg" alt="" />
                        </NavLink>
                    </Wrap>
                </Content>
            </Container>
        </>
    )
}

export default Movies;

const Container = styled.div`
    
`
const Content = styled.div`
    display: grid;
    margin-top: 30px;
    grid-gap: 25px;
    ${'' /* padding: 30px 0 26px; */}
    grid-template-columns: repeat(4,minmax(0,1fr));
`
const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        ${'' /* fit img as much as possibel inside the div */}
        object-fit: cover;
    }
    &:hover{
        ${'' /* div motu thai  */}
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px, rgba(0 0 0 /72%) 0px 30px 22px -10px;
        transform: scale(1.05); 
        border-color: rgba(249,249,249,0.8);
    }
`

