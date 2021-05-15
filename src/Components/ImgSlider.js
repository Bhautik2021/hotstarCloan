import React from 'react'
import styled from "styled-components";

// npm react-slick  code ==> https://www.npmjs.com/package/react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <>
            <Carousel {...settings}>
                <Wrap>
                    <img src="/images/slider-badging.jpg" alt="slid-1" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" alt="slid-1" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-scales.jpg" alt="slid-1" />
                </Wrap>
            </Carousel>
        </>
    )
}

export default ImgSlider;
 
const Carousel = styled(Slider)` // aahi carousel ni aander Slider comp add ker u
    margin-top: 20px;
    ul li button {
        &:before{
            font-size:10px;
            color: white;
        }
    }
    ${'' /* je slide hoi te slide nu button(niche rahela dotes no) no color white thai */}
    li.slick-active button::before{
        color: white
    }
    ${'' /* je disply thai te img ni side ma biji slide no img batave thodok */}
    .slick-list{ 
        overflow: visible;
    }
    button{
        z-index: 1;
    }
`
const Wrap = styled.div`
    cursor: pointer;
    img{
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration : 300ms;

        &:hover{
            border: 4px solid rgba(249,249,249,0.8);
        }
    }
`