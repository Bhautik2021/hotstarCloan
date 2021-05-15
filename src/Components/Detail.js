import React from 'react'
import styled from "styled-components";

const Detail = () => {
    return (
        <>
            <Container>
                <Background>
                    <img src="/images/hostar_img.jpg" alt="" />
                </Background>
                <ImageTitle>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6385/656385-h" alt="title" />
                </ImageTitle>
                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-white.png" alt="play" />
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png" alt="trailer" />
                        <span>TRAILER</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <GroupWatchButton>
                        <img src="/images/group-icon.png" alt="group" />
                    </GroupWatchButton>
                </Controls>
                <SubTitel>
                    2018 * 7m * Family, Fantasy, kids, Animation
                </SubTitel>
                <Discription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore facilis, necessitatibus consequatur obcaecati rem id ratione. Quisquam ab, eveniet maiores, assumenda animi odit aperiam recusandae aliquid deserunt blanditiis omnis?
                </Discription>
            </Container>
        </>
    )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`
const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 30px;
    img{
        width:100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    margin-top: 20px;
    ${'' /* margin-left: 72px; */}
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display:flex;
    align-items: center;
    height: 56px;
    background: rgba(0,0,0,0.3);
    color: white;
    border: 1px solid rgb(249,249,249);
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;
    &:hover{
        background : rgb(198,198,198);
        color: black;
    }
`
//  playButton ni style ne inharite kari aahi and new styale ne over right kari
const TrailerButton = styled(PlayButton)`
   
`
const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display:flex;
    align-items: center;
    justify-content:center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    margin-right: 16px;
    span{
        color: white;
        font-size: 30px;
    }
    &:hover{
        background : rgb(198,198,198);
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);
    &:hover{
        background : rgb(198,198,198);
    }
`

const SubTitel = styled.div`
    ${'' /* margin-left: 72px; */}
    margin-top: 26px;
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
`

const Discription = styled.div`
    ${'' /* margin-left: 72px; */}
    margin-top: 16px;
    line-height: 1.4;
    font-size: 20px;
    color: rgb(249,249,249);
`