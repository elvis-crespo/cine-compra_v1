import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { PosterCard } from '../components/PosterCard';
import Popups from '../components/Popups';
import { useState } from 'react';
function getFetchData() {
    let data = localStorage.getItem('fetchData');
    if (data) {
        data = JSON.parse(data);
    } else {
        data = null;
    }
    return data;
}

export default function Home() {
  //const { removeTokens } = useAuth();
  //const navigate = useNavigate();
  
  //const handleLogout = () => {
  //  removeTokens();
  //  navigate('/login');
  //  };

   // eslint-disable-next-line no-unused-vars
   //const [data, setData] = useState(getFetchData())
    const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <NavBar />
      <PosterCard />
      <Footer />

      <button onClick={() => setOpenModal(!openModal)}>showModal</button>
      <Popups isOpen={openModal} onClose={() => setOpenModal(false)}>
        <Popups.Header>
               <h1>Popups</h1>
        </Popups.Header>
        <Popups.Body>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            incidunt asperiores pariatur ab mollitia deleniti voluptates nisi
            dolorem iusto porro animi repellat, tempora, quas labore placeat
            necessitatibus eum ratione deserunt!
           </p>
        </Popups.Body>
        <Popups.Footer>
          <Popups.DismissButton className="btn btn-primary">
             Dismiss
          </Popups.DismissButton>
          <button className="btn btn-secondary" type="submit">
           Submit
          </button>
        </Popups.Footer>
       </Popups>
    </>
  )
}
