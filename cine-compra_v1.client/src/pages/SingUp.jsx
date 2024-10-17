import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { registerUser } from '../redux/userSlice'

const Container = styled.section`
    background: #192a3b;
    min-height: 100vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    a{
        text-decoration: none;
        color: white;
    }
    svg{
        position: absolute;
        top: 0;
        left: 0;
        padding: 20px;
        color: #FFF;
        width: 85px;
        height: 85px;
        scale: .8;
        transition: .3s;
        opacity: .7;
        &:hover{
            scale: 1;
            opacity: 1;
        }
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

export default function SingUp() {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { isLoading, error } = useSelector((state) => state.user);

    const HandleSubmit = (e) => {
        e.preventDefault();
        let userCred = {
            userName, email, password
        };

        // Validate userCred before sending the request
        if (!userCred.userName || !userCred.email || !userCred.password) {
            alert('Please fill all fields');
            return;
        }

        dispatch(registerUser(userCred)).then((result) => {
            if (result.payload) {
                setUserName('');
                setEmail('');
                setPassword('');
                navigate('/login');
            }
        });
    }
    return (
        <>
            <Container>
                <Link to='/'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"></path><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m296 352-96-96 96-96"></path></svg>
                </Link>
                <Content>
                    <ContentLogin>
                        <h1>Welcome</h1>
                        <h2>Sing up</h2>
                        <form onSubmit={HandleSubmit}>
                            <input type='text' placeholder='Username' required autoComplete="current-password" value={userName} onChange={(e) => setUserName(e.target.value)} />
                            <input type='email' placeholder='Email' id='email' required autoComplete="current-email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='password' placeholder='Password' id='password' required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Option>
                                <p><Link to='/login'>Login</Link></p>
                                <p>Forgot your password?</p>
                            </Option>

                            <button type='submit'>
                                <a href="#"><span>{isLoading ? 'Loading...' : 'Sing up'}</span></a>
                            </button>
                            <div style={{ color: '#FFF' }}>
                                {error && <p>{error}</p>} {/* Muestra el mensaje de error si existe */}
                            </div>
                        </form>
                        <Link to='/'>
                        </Link>
                    </ContentLogin>
                </Content>
            </Container>
        </>
    )
}
