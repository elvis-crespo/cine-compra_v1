import  { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 9%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transition: .3s;
  .logo{
    text-decoration: none;
  }
  a{
    font-size: 1rem;
    color: #FFF;
    font-weight: 500;
    margin-left: 3.5rem;
    transition: .2s;
    font-family: 'Poopins', sans-serif;
    font-weight: bold;
    text-decoration: none;
  }
`
const Section = styled.section`
  min-height: 100vh;
  background: #1D2B3A;
  div{
    width: 300%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 4em 0 0 0;
    transition: all .5s ease;
    transform: translateX(0);

    overflow-x: hidden;
    img{
      width: calc( 100% / 3);
    }
  }
  ul{
    width: 100%;
    padding: .4em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    li{
      
      border-radius: 50%;
      width: 1.5em;
      height: 1.5em;
      margin: 0 1rem;
      background: #FFF;
      cursor: pointer;
      list-style-type: none;
    }
  }
  .clase-1{
    background: yellow;
  }
  
`

export const Landing = () => {


    // const grande = document.querySelector('divImg')
    const elementos = [1, 2, 3];

    const [selectedClass, setSelectedClass] = useState("clase-1");

    const handleMoveToX = (valor) => {
        setSelectedClass(`clase-${valor}`);
        console.log(selectedClass)
    };
    return (
        <>
            <Header >
                <Link className='logo' to='/'>NOMBRE</Link>

                <nav>
                    <Link to='/login'>Login</Link>
                    <Link to='/sing-up'>Sing Up</Link>
                </nav>
            </Header>
            <Section>
                <div className='divImg'
                    style={
                        {
                            // background : 'white', 
                            transform: `translateX(-33.33%)`
                        }}
                >
                    <img src='/public/lan-beekeeper.jpg' alt="beekeeper" />
                    <img src='/public/lan-creed3.png' alt="creed" />
                    <img src='/public/lan-extraction2.png' alt="extracction" />
                </div>

                <ul>
                    {elementos.map((valor, index) => (
                        <li
                            key={index}
                            className={`clase-${valor}`}
                            onClick={() => handleMoveToX(valor)}
                        >
                        </li>
                    ))}
                    {/* {elementos.map((valor, index) => (
            <li key={index} className={`clase-${valor}`} onClick={handleMoveToX}></li>
          ))} */}
                </ul>
            </Section>
        </>
    )
}
