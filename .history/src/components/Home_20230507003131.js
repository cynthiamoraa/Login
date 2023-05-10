
import { useNavigate, use} from "react-router-dom";
const Home = () => {
    const location=useLocation();
  return (
    <div className="homepage">
        <h1>Hello {location.state.id} and welcome </h1>
    </div>
  )
};

export default Home;
