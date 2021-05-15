import React from 'react'
import styled from "styled-components";

const Login = () => {
    return (
        <div>
            <Container>
                <CTA>
                    <CTAlogoOne src="/images/cta-logo-one.svg" alt="cta logo" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur omnis optio dolorem magnam fugiat voluptas, aliquid repudiandae ipsam blanditiis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nulla!
                    </Description>
                    <CTAlogoTwo src="/images/cta-logo-two.png" alt="cta logo" />
                </CTA>
            </Container>
        </div>
    )
}

export default Login;

const Container = styled.div`
    position: relative;
    height: calc(100vh -70px);
    display: flex;
    align-items: center;
    justify-content: center;
    &:before{
        content: '';
        background-position: top;
        background: url('images/login-background.jpg') 
            no-repeat center center/cover;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        opacity: 0.3;
        top: 0px;
        left: 0px;
        bottom:0;
        right: 0;
        width: 100vw;
        height: calc(100vh - 70px);
        opacity: 1;
        z-index: -1;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    ${'' /* display: flex;
    flex-diraction: column;  */}
    align-items: center;
`
const CTAlogoOne = styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    margin-top: 20px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 10px;
    margin-bottom: 12px;
    display: inline-block;
    &:hover {
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTAlogoTwo = styled.img`
    display: inline-block;
    width: 100%;
    align-items:center;
    margin-top: 20px;
`