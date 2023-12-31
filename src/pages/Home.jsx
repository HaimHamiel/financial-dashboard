import { Link } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
function Home() {
  return (
    <>
      <section className="heading">
        <h1>Welcome to Dashboard</h1>
        <p>Where do you want to go?</p>
      </section>
      <Link to="/register" className="btn btn-block">
            <FaUser /> Register
      </Link>
      <Link to="/login" className="btn btn-block">
            <FaSignInAlt /> Login
      </Link>
    </>
  );
}

export default Home;
