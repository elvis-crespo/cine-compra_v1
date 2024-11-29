/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

const DivSipnosis = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #192a3b;
  padding-top: 4rem;
  position: relative;
  padding-bottom: 2rem;

  .imageSynopsis {
    background-image: url("https://www.hollywoodreporter.com/wp-content/uploads/2022/04/SRV-12030_R-H-2022.jpg");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    min-width: 100%;
    mask-image: linear-gradient(black 80%, transparent);
  }

  .infoSynopsis {
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    max-width: 70vw;
    padding: 2rem;
    gap: 1rem;
    margin-top: -500px;
    h1 {
      font-size: 36px;
      color: #fff;
      font-family: "Poppins", sans-serif;
    }
    h4 {
      font-size: 20px;
      color: #fff;
      font-family: "Poppins", sans-serif;
    }
    p {
      font-size: 14px;
      color: #fff;
      font-family: "Poppins", sans-serif;
    }
  }

  .containerSypnosis {
    position: relative;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #243f56;
    border-radius: 5mm;
    padding: 2rem 4rem;
    margin: -150px auto 0 auto;
    gap: 1rem;
    width: 70vw;
    h1 {
      text-align: center;
      font-size: 36px;
      color: #fff;
      font-family: "Poppins", sans-serif;
    }
    p {
      font-size: 14px;
      color: #fff;
      font-family: "Poppins", sans-serif;
    }
    iframe {
      margin: 0 auto;
      border-radius: 5mm;
    }
  }

  .containerDate {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #243f56;
    border-radius: 5mm;
    margin: 40px auto 0 auto;
    min-width: 70vw;
    position: relative;
    border-radius: 5mm;
    padding: 2rem 2rem;
    gap: 1rem;
    width: 70vw;
    h1 {
      text-align: center;
      font-size: 36px;
      color: #fff;
      font-family: "Poppins", sans-serif;
      display: inline-block;
      width: 100%;
      border-bottom: 1px solid #fff;
    }
    p {
      font-size: 14px;
      color: #fff;
      font-family: "Poppins", sans-serif;
      padding-top: 24px;
    }
  }

  .containerSeats {
    background-color: #243f56;
    border-radius: 5mm;
    margin: 40px auto 0 auto;
    min-width: 70vw;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5mm;
    padding: 2rem 4rem;
    gap: 1rem;
    width: 70vw;
    img {
      margin: 0 auto;
      border-radius: 5mm;
      padding-top: 5rem;
    }
  }
`;


export default function FilmDetails() {
    return (
        <>
            <NavBar />
            <DivSipnosis>
                <div className="imageSynopsis"></div>

                <div className="infoSynopsis">
                    <h1>Nombre Película</h1>
                    <h4>sinopsis</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
                        reiciendis, necessitatibus molestiae obcaecati voluptate aspernatur
                        harum qui non reprehenderit? Ab cum quos error cumque, repudiandae
                        doloremque neque repellendus maiores quod.
                    </p>
                    <button className="btn btn-primary">Comprar</button>
                </div>

                <div className="containerSypnosis">
                    <h1>buy the ticket</h1>
                    {/*<iframe*/}
                    {/*    width="560"*/}
                    {/*    height="315"*/}
                    {/*    src="https://www.youtube.com/embed/R2oA59hYN_Y?si=-LxgVXTSng95BEiB"*/}
                    {/*    title="YouTube video player"*/}
                    {/*    frameBorder="0"*/}
                    {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                    {/*    referrerPolicy="strict-origin-when-cross-origin"*/}
                    {/*    allowfullscreen="allowfullscreen"*/}
                    {/*    mozallowfullscreen="mozallowfullscreen"*/}
                    {/*    bravowserallowfullscreen="bravowserallowfullscreen"*/}
                    {/*    msallowfullscreen="msallowfullscreen"*/}
                    {/*    oallowfullscreen="oallowfullscreen"*/}
                    {/*    webkitallowfullscreen="webkitallowfullscreen"*/}
                    {/*></iframe>*/}
                    {/* <button className="btn btn-primary">Comprar</button> */}
                </div>

                <div className="containerDate">
                    <h1>Horarios</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                        doloribus, autem quos, quas, dolores voluptatibus voluptate voluptas
                        quibusdam quae quidem. Quia doloribus, autem quos, quas, dolores
                        voluptatibus voluptate voluptas quibusdam quae quidem.
                    </p>
                </div>

                <div className="containerSeats">
                    <img src="public/cinema-seats.webp" alt="" />
                </div>
            </DivSipnosis>
            <Footer />
        </>
    );
}

FilmDetails.propTypes = {};

// export default FilmDetails