
import { useNavigate, useLocation} from "react-router-dom";
const Home = () => {
    const location=useLocation();
    le
  return (
    <div className="homepage">
        <h1>Hello {location.state.id} and welcome </h1>
    
    </div>
  )
};

export default Home;
