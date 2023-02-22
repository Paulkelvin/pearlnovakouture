import React from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img
          src="https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/179839200_966930360807050_3094458150907347718_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4k6aZ5Msf-sAX899jBj&_nc_ht=scontent.flos1-2.fna&oh=00_AfCu6fXtXfmrA2E7DcwYzGoiPooVcsXpr3-ojHuPuzXBuA&oe=641D78DA"
          alt="Pearl nova kouture logo"
        />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button className="search-button">
          <RiSearch2Line size={20} />
        </button>
      </div>
      <div className="login-container">
        <button className="login-button">
          <FaUser size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;
