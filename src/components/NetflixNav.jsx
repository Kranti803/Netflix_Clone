import React from "react";
import Logo from "../assets/logo.png";
import { AiOutlineLogout } from "react-icons/ai";
import {signOut,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from './../utils/firebase';

const NetflixNav = () => {
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth,(user)=>{
    if(!user) navigate('/login');
  })




  return (
    <nav>
      <div>
        <img src={Logo} alt="" />
      </div>

      <button onClick={()=>signOut(firebaseAuth)}>
        <AiOutlineLogout size={25} />
      </button>
    </nav>
  );
};

export default NetflixNav;
