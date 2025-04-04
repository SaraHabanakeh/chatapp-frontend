// Profile component

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IoMdContacts } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineHelpCenter } from "react-icons/md";


const Profile = () => {
    const userName = sessionStorage.getItem('userName');
    const userEmail = sessionStorage.getItem('userEmail');
    const navigate = useNavigate();


    return (
        <div className="user-container">

        <h1>Hi {userName}! 👋 </h1>

        <div className="user-details">
          <button>
            <p>Name</p>
            <p>{userName}</p>
          </button>

          <button>
            <p>Email</p>
            <p>{userEmail}</p>
          </button>
        </div>


        <div className="app-buttons">
            <button className="app-button" onClick={() => navigate("/contacts")}>
                <IoMdContacts size={30} />
                <p>Contacts</p>
            </button>
            <button className="app-button" onClick={() => navigate("/help")}>
                <MdOutlineHelpCenter size={30} />
                <p>Help</p>
            </button>
            <button className="app-button" onClick={() => navigate("/profile")}>
                <FaRegUser size={24} />
                <p>Profile</p>
            </button>
        </div>

      </div>
    )
}
export default Profile;
