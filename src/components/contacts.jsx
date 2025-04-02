// contacts list

import React, { useState, useEffect } from 'react';
import { getAllContacts } from '../api/contacts.js';
import { isLoggedIn } from '../utils/auth.js';

const Contacts = () => {
  const userEmail = sessionStorage.getItem('userEmail');

  const [contacts, setContacts] = useState([]);

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
    <div className='contacts-comp'>

      <h2>Contacts</h2>
      <ul>
        {contacts.map((c, index) => (
          <li key={index}>{c.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
