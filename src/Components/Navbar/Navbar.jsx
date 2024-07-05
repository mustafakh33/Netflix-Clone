import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import { useRef } from "react";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase2";

const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      } else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src="src\assets\bell_icon.svg" alt="" className="icons" />
        <div className="navbar-profile">
          <img src="src\assets\profile_img.png" alt="" className="profile" />
          <img src="src\assets\caret_icon.svg" alt="" />
          <div className="dropdown">
            <p onClick={() => {
              signOut(auth).then(() => {
                // Sign-out successful.
              }).catch((error) => {
                // An error happened.
              });}}
            >Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
