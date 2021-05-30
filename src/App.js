import { useEffect, useState } from 'react';
import Chat from './components/Chat';

import avatar1 from './img/logo.png';
import avatar2 from './img/logo192.png';
import avatar3 from './img/avatar1.png';
import avatar4 from './img/avatar2.png';
import avatar5 from './img/avatar3.png';


function App() {

  const [ activeChat, setActiveChat ] = useState(null)

  console.log(activeChat);

  const contacts = [
    {
      name: "Esteban Smith",
      image: avatar1,
      id: 0
    },
    {
      name: "John Edwards",
      image: avatar2,
      id: 1
    },
    {
      name: "Lisa Karpovich",
      image: avatar3,
      id: 2,
    },
    {
      name: "Sarah Johnson", 
      image: avatar4,
      id: 3
    },
    {
      name: "Luise Simpson",
      image: avatar5,
      id: 4
    }
  ]


  const renderContacts = () => {
    return (
      <div className="chats">
       {contacts.map(contact => {
          return <div className="contact" onClick={() => setActiveChat(contact.id)}>
            <img 
              className="contact_image"
              src={contact.image} 
              alt="avatar"
            />
        <h3>{contact.name}</h3>
      </div>
      })}  
      </div> 
    )
  }

  return (
      <div className="container">
        <div className="contacts_container">
          <div className="chats_header">
            <h1>Contacts</h1>
          </div>
          {renderContacts()}
        </div>
        <div className="chat_window">
          <Chat activeChat={activeChat} contacts={contacts}/>
        </div>
      </div>
  );
}

export default App;
