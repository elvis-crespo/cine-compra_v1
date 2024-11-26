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
    background-color: #fff;
    border-radius: 5mm;
    padding: 2rem 4rem;
    margin: -150px auto 0 auto;
    gap: 1rem;
    width: 70vw;
    h1 {
      font-size: 36px;
      color: #000;
      font-family: "Poppins", sans-serif;
    }
    p {
      font-size: 14px;
      color: #000;
      font-family: "Poppins", sans-serif;
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
                    <iframe src="https://youtube.com/watch?v=R2oA59hYN_Y"></iframe>
                    <button className="btn btn-primary">Comprar</button>
                </div>
            </DivSipnosis>
            <Footer />
        </>
    );
}

FilmDetails.propTypes = {};

// export default FilmDetails