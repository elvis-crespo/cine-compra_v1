import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

const DivSipnosis = styled.div`
  width: 100%;
  background-color: black;
  padding-top: 4rem;
  .imageSynopsis {
    background-image: url("https://www.hollywoodreporter.com/wp-content/uploads/2022/04/SRV-12030_R-H-2022.jpg");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    width: 100%;
    mask-image: linear-gradient(black 80%, transparent);

    .infoSynopsis {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      max-width: 70vw;
      // min-height: 100vh;
      padding: 2rem;
      gap: 1rem;
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
  }
`;

export default function FilmDetails() {
    return (
        <>
            <NavBar />
            <DivSipnosis>
                <div className="imageSynopsis">
                    <div className="infoSynopsis">
                        .sipnosis
                        <h1>Nombre Película</h1>
                        <h4>sinopsis</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
                            reiciendis, necessitatibus molestiae obcaecati voluptate
                            aspernatur harum qui non reprehenderit? Ab cum quos error cumque,
                            repudiandae doloremque neque repellendus maiores quod.
                        </p>
                        <button className="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </DivSipnosis>
            <Footer />
        </>
    );
}

FilmDetails.propTypes = {};

// export default FilmDetails
