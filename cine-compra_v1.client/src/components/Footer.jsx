import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 9%;
  background: black;
  height: auto;
  .footer-text {
    position: relative;
    p {
      color: #fff;
      font-size: 1.6rem;
    }
  }
  .footer-iconTop {
    position: relative;
    a {
      justify-content: center;
      align-items: center;
      padding: 0.8rem;
      border-radius: 0.6rem;
      overflow: hidden;
      display: inline-flex;
      svg {
        font-size: 2rem;
        color: #fff;
        transition: 0.3s;
        scale: 1;
        opacity: 0.8;
        &:hover {
          scale: 1.3;
          opacity: 1;
        }
      }
    }
  }
`;

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="footer-text">
          <p>Copyright &copy; 2024 | All rights Reserved</p>
        </div>

        <div className="footer-iconTop">
          <a href="#">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"></path>
            </svg>
          </a>
        </div>
      </FooterContainer>
    </>
  );
};
