import styled, { keyframes } from "styled-components";
import SwiperCarousel from "./SwiperCarousel";
 
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
  div {
    padding-top: 4rem;
    ul {
      display: flex;
      padding: 0;
      width: 400%;
      li {
        list-style: none;
        width: 100%;
        img {
          animation: ${fadeIn} 16s infinite;
          width: 100%;
          height: auto;
        }
      }
    }
  }
  h1 {
    padding-top: 20px;
    text-shadow: 0 0 10px #5cfaff, 0 0 20px #5cfaff, 0 0 40px #5cfaff,
      0 0 80px #5cfaff;
    color: #5cfaff;
    font-size: 50px;
    text-align: center;
  }
  .contentItem {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 3fr));
    //max-width: 900px;
    //margin: 0 auto 25px auto;
    //gap: 32px 16px;
    width: 80%;
    margin: 0 auto;
    gap: 16px;
    align-items: center;
    justify-items: center;
    img {
      border-radius: 8px;
      width: 90%;
      height: 90%;
      transition: 0.3s;
      vertical-align: middle;
      /* border-image: fill 0 linear-gradient(#ffffff, #ffff); */
      scale: 1;
      &:hover {
        scale: 1.05;
        /* border-image: fill 0 linear-gradient(#0001, #000); */
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
`;

export const PosterCard = () => {
  return (
     <>
      <SwiperCarousel />

      <Section>
        <h1>Cartelera</h1>
        <div className="contentItem">
          <img
            src="https://th.bing.com/th/id/OIP.Qm-Fvt-16YA82zr6sHA_uwHaLH?rs=1&pid=ImgDetMain"
            alt=""
          />
          <img
            src="https://c8.alamy.com/comp/2NBNY3H/creed-iii-2023-directed-by-michael-b-jordan-credit-metro-goldwyn-mayer-mgm-album-2NBNY3H.jpg"
            alt=""
          />
          <img
            src="https://image.tmdb.org/t/p/w500/dPAdQdRjW2TUJwl2wsgwYigPM4B.jpg"
            alt=""
          />
          <img
            src="https://image.tmdb.org/t/p/original/A5TK9Q63r2h4cx1q2Isl3bTaVlY.jpg"
            alt=""
          />
          <img
            src="https://th.bing.com/th/id/OIP.Qm-Fvt-16YA82zr6sHA_uwHaLH?rs=1&pid=ImgDetMain"
            alt=""
          />
          <img
            src="https://c8.alamy.com/comp/2NBNY3H/creed-iii-2023-directed-by-michael-b-jordan-credit-metro-goldwyn-mayer-mgm-album-2NBNY3H.jpg"
            alt=""
          />
          <img
            src="https://image.tmdb.org/t/p/w500/dPAdQdRjW2TUJwl2wsgwYigPM4B.jpg"
            alt=""
          />
          <img
            src="https://image.tmdb.org/t/p/original/A5TK9Q63r2h4cx1q2Isl3bTaVlY.jpg"
            alt=""
          />
          <img
            src="https://th.bing.com/th/id/OIP.Qm-Fvt-16YA82zr6sHA_uwHaLH?rs=1&pid=ImgDetMain"
            alt=""
          />
          <img
            src="https://c8.alamy.com/comp/2NBNY3H/creed-iii-2023-directed-by-michael-b-jordan-credit-metro-goldwyn-mayer-mgm-album-2NBNY3H.jpg"
            alt=""
          />
          <img
            src="https://image.tmdb.org/t/p/w500/dPAdQdRjW2TUJwl2wsgwYigPM4B.jpg"
            alt=""
          />
          <img
            src="https://image.tmdb.org/t/p/original/A5TK9Q63r2h4cx1q2Isl3bTaVlY.jpg"
            alt=""
          />
          <img
              src="https://th.bing.com/th/id/OIP.Qm-Fvt-16YA82zr6sHA_uwHaLH?rs=1&pid=ImgDetMain"
              alt=""
          />
          <img
              src="https://c8.alamy.com/comp/2NBNY3H/creed-iii-2023-directed-by-michael-b-jordan-credit-metro-goldwyn-mayer-mgm-album-2NBNY3H.jpg"
              alt=""
          />
          <img
              src="https://image.tmdb.org/t/p/w500/dPAdQdRjW2TUJwl2wsgwYigPM4B.jpg"
              alt=""
          />
          <img
              src="https://image.tmdb.org/t/p/original/A5TK9Q63r2h4cx1q2Isl3bTaVlY.jpg"
              alt=""
          />
          <img
              src="https://th.bing.com/th/id/OIP.Qm-Fvt-16YA82zr6sHA_uwHaLH?rs=1&pid=ImgDetMain"
              alt=""
          />
          <img
              src="https://c8.alamy.com/comp/2NBNY3H/creed-iii-2023-directed-by-michael-b-jordan-credit-metro-goldwyn-mayer-mgm-album-2NBNY3H.jpg"
              alt=""
          />
          <img
              src="https://image.tmdb.org/t/p/w500/dPAdQdRjW2TUJwl2wsgwYigPM4B.jpg"
              alt=""
          />
          <img
              src="https://image.tmdb.org/t/p/original/A5TK9Q63r2h4cx1q2Isl3bTaVlY.jpg"
              alt=""
          />
          <img
              src="https://th.bing.com/th/id/OIP.Qm-Fvt-16YA82zr6sHA_uwHaLH?rs=1&pid=ImgDetMain"
              alt=""
          />
          <img
              src="https://c8.alamy.com/comp/2NBNY3H/creed-iii-2023-directed-by-michael-b-jordan-credit-metro-goldwyn-mayer-mgm-album-2NBNY3H.jpg"
              alt=""
          />
          <img
             src="https://image.tmdb.org/t/p/w500/dPAdQdRjW2TUJwl2wsgwYigPM4B.jpg"
             alt=""
          />
          <img
             src="https://image.tmdb.org/t/p/original/A5TK9Q63r2h4cx1q2Isl3bTaVlY.jpg"
             alt=""
          />
        </div>

        <div>
          <ul>
            <li>
                <img src="/public/lan-beekeeper.jpg" alt="" />
            </li>
            <li>
                <img src="/public/lan-aquaman.png" alt="" />
            </li>
            <li>
                <img src="/public/lan-creed3.png" alt="" />
            </li>
            <li>
                <img src="/public/lan-extraction2.png" alt="" />
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
};
