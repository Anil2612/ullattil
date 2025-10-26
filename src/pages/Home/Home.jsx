import Lottie from "lottie-react";
import treeAnimation from "../../assets/tree.json"; // Tree Lottie JSON
import leafAnimation from "../../assets/leaf_falling.json"; // Leaf falling Lottie JSON
import logo from "../../assets/logo.png"; // Logo image
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      {/* Leaf falling background */}
      <div className="leaf-fall">
        <Lottie animationData={leafAnimation} loop={true} />
      </div>

      {/* Tree Animation */}
      <div className="lottie-tree">
        <Lottie animationData={treeAnimation} loop={true} />
      </div>

      {/* Title */}
      <h1 className="home-title">
        Welcome to <span>Ullattil</span>
      </h1>
      <div className="home-page-footer">
        <div>By <a href="http://anilsnair.com" target="blank" className="my-link">Anil</a></div>
        <img src={logo} alt="Ullattil Logo" className="home-logo" />
      </div>
    </div>
  );
};

export default Home;
