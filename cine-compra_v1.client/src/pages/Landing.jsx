import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 9%;
  background: #192a3b;
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

const fadeIn = keyframes`
    0% {
      margin-left: 0%;
    }
    20% {
      margin-left: 0%;
    }
  
    25% {
      margin-left: -100%;
    }
    45% {
      margin-left: -100%;
    }
  
    50% {
      margin-left: -200%;
    }
   70% {
      margin-left: -200%;
    }
  
    75% {
      margin-left: -300%;
    }
    95% {
      margin-left: -300%;
    }
  `;
const Section = styled.section`
  min-height: 100vh;
  overflow: hidden;
  background: #192a3b;
  position: relative;
  div{
    padding-top: 4rem;
    ul{
      display: flex;
      padding: 0;
      width: 400%;
      li{
        list-style: none;
        width: 100%;
        img{
          animation: ${fadeIn} 16s infinite;
          width: 100%;
          height: auto;
        }
      }
    }
  }
  h1{
    padding-top: 20px;
    text-shadow: 0 0 10px #5CFAFF,
    0 0 20px #5CFAFF,
    0 0 40px #5CFAFF,
    0 0 80px #5CFAFF; 
    color: #5CFAFF;
    font-size: 50px;
    text-align: center;
  }
  .contentItem{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 3fr));
    max-width: 800px;
    margin: 0 auto 25px auto;
    gap: 32px 16px;
    img{
      border-radius: 8px;
      width: 90%;
      height: 90%;
      transition: .3s;
      vertical-align: middle;
      /* border-image: fill 0 linear-gradient(#ffffff, #ffff); */
      scale: 1;
      &:hover{
        scale: 1.05;
        /* border-image: fill 0 linear-gradient(#0001, #000); */
        cursor: pointer;
        opacity: .8;
      }
    }
  }
  
`


const CarruselContainer = styled.div`
  height: 310px;
  overflow: hidden;
  background:  #192a3b;
`

const ItemCarrusel = styled.div`
  /* width: 50px; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 310px;
  div:first-child{
    height: auto;
    width: 100%;
    background: transparent;
    img{
      width: 100%;
      height: auto;
    }
  }
  .arrow{
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    a{
      font-size: 25px;
      text-decoration: none;
      color: #FFF;
      transform: scale(.8);
      transition: .3s;
      &:hover{
        transform: scale(1.2);
      }
      svg{

      }
    }
  }
`
const Puntos = styled.div`
    padding-top: 10px;
    padding-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #192a3b;
    padding: 20px;
  a{
    margin: 0 10px;
    background: #FFF;
    border-radius: 50%;
    text-decoration: none;
    width: 15px;
    height: 15px;
    color: black;
    font-size: 80px;
    cursor: pointer;
    list-style-type: none;//ul se elminan los puntos
  }

`
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 9%; 
  background: black;
  height: auto;
  .footer-text{
    position: relative;
    p{
      color: #FFF;
      font-size: 1.6rem;
    }
  }
  .footer-iconTop{
    position: relative;
    a{
      justify-content: center;
      align-items: center;
      padding: .8rem;
      border-radius: .6rem;
      overflow: hidden;
      display: inline-flex;
      svg{
        font-size: 2rem;
        color: #FFF;
        transition: .3s;
        scale: 1;
        opacity: .8;
        &:hover{
          scale: 1.3;
          opacity: 1;
        }
      }
    }
  }
`


export const Landing = () => {

  return (
    <>
      <Header id='#'>
        <Link className='logo' to='/'>Logo</Link>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/sing-up'>Sing Up</Link>
        </nav>
      </Header>

      <Section>
        <div>
          <ul>
            <li><img src="/public/lan-beekeeper.jpg" alt="" /></li>
            <li><img src="/public/lan-aquaman.png" alt="" /></li>
            <li><img src="/public/lan-creed3.png" alt="" /></li>
            <li><img src="/public/lan-extraction2.png" alt="" /></li>
          </ul>
        </div>

        <h1>Cartelera</h1>
        <div className="contentItem">
          <img src="https://th.bing.com/th/id/OIP.Qm-Fvt-16YA82zr6sHA_uwHaLH?rs=1&pid=ImgDetMain" alt="" />
          <img src="https://c8.alamy.com/comp/2NBNY3H/creed-iii-2023-directed-by-michael-b-jordan-credit-metro-goldwyn-mayer-mgm-album-2NBNY3H.jpg" alt="" />
          <img src="https://image.tmdb.org/t/p/w500/dPAdQdRjW2TUJwl2wsgwYigPM4B.jpg" alt="" />
          <img src="https://image.tmdb.org/t/p/original/A5TK9Q63r2h4cx1q2Isl3bTaVlY.jpg" alt="" />
          <img src="https://th.bing.com/th/id/OIP.Qm-Fvt-16YA82zr6sHA_uwHaLH?rs=1&pid=ImgDetMain" alt="" />
          <img src="https://c8.alamy.com/comp/2NBNY3H/creed-iii-2023-directed-by-michael-b-jordan-credit-metro-goldwyn-mayer-mgm-album-2NBNY3H.jpg" alt="" />
          <img src="https://image.tmdb.org/t/p/w500/dPAdQdRjW2TUJwl2wsgwYigPM4B.jpg" alt="" />
          <img src="https://image.tmdb.org/t/p/original/A5TK9Q63r2h4cx1q2Isl3bTaVlY.jpg" alt="" />
          <img src="https://th.bing.com/th/id/OIP.Qm-Fvt-16YA82zr6sHA_uwHaLH?rs=1&pid=ImgDetMain" alt="" />
          <img src="https://c8.alamy.com/comp/2NBNY3H/creed-iii-2023-directed-by-michael-b-jordan-credit-metro-goldwyn-mayer-mgm-album-2NBNY3H.jpg" alt="" />
          <img src="https://image.tmdb.org/t/p/w500/dPAdQdRjW2TUJwl2wsgwYigPM4B.jpg" alt="" />
          <img src="https://image.tmdb.org/t/p/original/A5TK9Q63r2h4cx1q2Isl3bTaVlY.jpg" alt="" />
        </div>
      </Section>

      <CarruselContainer>
        <ItemCarrusel id='item-A'>
          <div className='cardImg'>
            <img src="/public/lan-aquaman.png" alt="Aquaman" />
          </div>
          <div className='arrow'>
            <a href="#item-C">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
            </a>
            <a href="#item-B">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
            </a>
          </div>
        </ItemCarrusel>

        <ItemCarrusel id='item-B'>
          <div className='cardImg'>
            <img src="/public/lan-beekeeper.jpg" alt="beekeeper" />
          </div>
          <div className='arrow'>
            <a href="#item-A">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
            </a>
            <a href="#item-C">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
            </a>
          </div>
        </ItemCarrusel>

        <ItemCarrusel id='item-C'>
          <div className='cardImg'>
            <img src="/public/lan-creed3.png" alt="creed-3" />
          </div>
          <div className='arrow'>
            <a href="#item-B">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
            </a>
            <a href="#item-A">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
            </a>
          </div>
        </ItemCarrusel>
      </CarruselContainer>

      <Puntos>
        <a href='#item-A'></a>
        <a href='#item-B'></a>
        <a href='#item-C'></a>
      </Puntos>


      <Footer>
        <div className="footer-text">
          <p>Copyright &copy; 2024 | All rights Reserved</p>
        </div>

        <div className="footer-iconTop">
          <a href="#">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"></path></svg>
          </a>
        </div>
      </Footer>
    </>
  )
}
