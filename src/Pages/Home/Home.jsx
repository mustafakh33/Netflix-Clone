import "./Home.css";
import Navbar from "./../../Components/Navbar/Navbar";
import TitleCards from "../../Components/TitleCards/TitleCards";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  
    return (
      <div className="home">
        <Navbar />
        <div className="hero">
          <img src="public\hero_banner.jpg" alt="" className="banner-img" />
          <div className="hero-caption">
            <img src="src\assets\hero_title.png" alt="" className="caption-img" />
            <p>
              Discovering his ties to a secret ancient order, a young man living
              in modern Istanbul embarks on a quest to save the city from an
              immortal enemy.
            </p>
            <div className="hero-btns">
              <button className="btn">
                <img src="src\assets\play_icon.png" alt="" />
                play
              </button>
              <button className="btn dark-btn">
                <img src="src\assets\info_icon.png" alt="" />
                More Info
              </button>
            </div>
            <TitleCards  />
          </div>
        </div>
        <div className="more-cards">
          <TitleCards category={"top_rated"} title={"Blockbuster Movies"} />
          <TitleCards category={"popular"} title={"Only on Netflix"} />
          <TitleCards category={"upcoming"} title={"Upcoming"} />
          <TitleCards category={"now_playing"} title={"Top Pics for You"} />
        </div>
        <Footer />
      </div>
    );

};

export default Home;
