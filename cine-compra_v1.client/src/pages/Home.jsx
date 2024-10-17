import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { PosterCard } from '../components/PosterCard';
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

  return (
    <>
        <NavBar />
        <PosterCard />
        <Footer />
    </>
  )
}
