// contacts list

import React, { useState, useEffect } from 'react';
import { getAllContacts } from '../api/contacts.js';
import { isLoggedIn } from '../utils/auth.js';
import { useNavigate } from 'react-router-dom';


import { IoMdContacts } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineHelpCenter } from "react-icons/md";

const Contacts = () => {
  const userEmail = sessionStorage.getItem('userEmail');

  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      const result = await getAllContacts();
  
      if (!result.error) {
        const filtered = result.filter(user => user.email !== userEmail);
        setContacts(filtered);
      }
    };
  
    if (isLoggedIn()) {
      fetchContacts();
    }
  }, [userEmail]);
  

  return (
    <div>

      <div className='contacts-comp'>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((c, index) => (
            <li key={index}><strong>{c.username}</strong></li>
          ))}
        </ul>
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
  );
};

export default Contacts;
