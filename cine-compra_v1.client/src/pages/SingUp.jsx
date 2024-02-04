import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section`
    background: #192a3b;
    min-height: 100vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        text-decoration: none;
        color: white;
    }
`
const Content = styled.div`
    background-image: url('/public/login.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 80vh;
    min-width: 80vw;
    border-radius: 12px;
    border: 2px solid black;
    `
const ContentLogin = styled.div`
    min-height: 80vh;
    /* background: #1D2B3A; */
    margin: 0 0 0 45vw;
    padding: 2rem;
    border-radius:0 12px 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    @media (width >= 320px) {
        backdrop-filter: blur(15px);
        margin: 20px;
        border-radius:12px;
    }
    @media (width >= 720px) {
        margin: 0 25vw 0 25vw;
        border-radius: 0;
    }
    @media (width >= 1200px) {
        margin: 0 45vw 0 0 ;
        padding: 2rem;
        border-radius:0 12px 12px 0;
    }
    h1{
        font-size: 3.5rem;
        line-height: 1.3;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-style: normal;
        @media (width >= 320px) and (width <= 720) {
            font-weight: 400;
        }
        @media (width >= 720px) {
            color: #1D2B3A;;
        }
    }
    h2{
        font-size: 2.5rem;
        font-family: "Poppins", sans-serif;
        font-weight: 200;
        font-style: normal;
        @media (width >= 720px) {
            color: #1D2B3A;;
        }
    }
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        input{
            max-width: 250px;
            background-color: #f5f5f5;
            color: #242424;
            padding: .15rem .5rem;
            min-height: 40px;
            border-radius: 18px;
            outline: none;
            border: none;
            line-height: 1.15;
            box-shadow: 0px 10px 20px -18px;
            transition: 0.3s;
            &:focus{
                opacity: 0.9;
                border-bottom: 2px solid #b62727;
            }
            &:hover{
                outline: 1px solid lightgrey;
            }
        }
        button{
            background-color: none;
            text-decoration: none;
            background-color: #BF5050;
            border: none;
            span{
                position: relative;
                z-index: 3;   
            }
            a{
                position: relative;
                display: inline-block;
                padding: 15px 30px;
                border: 2px solid #fefefe;
                text-transform: uppercase;
                color: #fefefe;
                text-decoration: none;
                font-size: 17px;
                font-family: "Poppins", sans-serif;
                font-weight: 700;
                font-style: normal;
                &::before{
                    content: '';
                    position: absolute;
                    top: 6px;
                    left: -2px;
                    width: calc(100% + 4px);
                    height: calc(100% - 12px);
                    background-color: #BF5050;
                    transition: 0.3s ease-in-out;
                    transform: scaleY(1);    
                }       
                &:hover::before{
                    transform: scaleY(0);    
                }
                &::after{
                    content: '';
                    position: absolute;
                    left: 6px;
                    top: -2px;
                    height: calc(100% + 4px);
                    width: calc(100% - 12px);
                    background-color: #BF5050;
                    transition: 0.3s ease-in-out;
                    transform: scaleX(1);
                    transition-delay: 0.5s;    
                }
                &:hover::after{
                    transform: scaleX(0);   
                }
            }
        }
    }
`
const Option = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    p{
        font-family: "Poppins", sans-serif;
        font-weight: 100;
        font-style: normal;
        font-size: 14px;
    }
`

export const SingUp = () => {
    return (
        <>
            <Container>
                <Content>
                    <ContentLogin>
                        <h1>Welcome</h1>
                        <h2>Sing up</h2>
                        <form >
                            <input type='text' placeholder='Username' required='' />
                            <input type='email' placeholder='Email' required='' />
                            <input type='password' placeholder='Password' />
                            <Option>
                                <p><Link to='/login'>Login</Link></p>
                                <p>Forgot your password?</p>
                            </Option>

                            <button type='submit'>
                                <a href="#"><span>Sing up</span></a>
                            </button>
                        </form>
                        <Link to='/'>
                        </Link>
                    </ContentLogin>
                </Content>
            </Container>
        </>
    )
}
