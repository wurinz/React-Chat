import React, { useState } from 'react';

const Chat = ({
    activeChat, contacts
}) => {
    const messageHistory = [
        [
            {
                myMessage: "Hello",
                answer: "Hello, how are you?"
            },
            {
                myMessage: "I'm fine, thanks. What about you?",
                answer: "I'm feeling good. Would you like to visit one good restaurant today?"
            },
            {
                myMessage: "Yes, sure! When?",
                answer: "In two hours"
            },
            {
                myMessage: "Nice, see you!",
                answer: "See you!"
            }
        ],
        [
            {
                myMessage: "Yo wassup",
                answer: "Yo"
            },
            {
                myMessage: "Hey I justed wanted to ask you about yesterday", 
                answer: "Oh crap"
            },
            {
                myMessage: "Yeah, do you remember somethig? Cuz I dont and it semms like I've lost my phone...",
                answer: "..."
            }
        ],
        [
            {
                myMessage: "Hello, how's the weather in Japan",
                answer: "It's a good sunny day in Tokyo :)"
            }
        ],
        [
            {
                myMessage: "Hi, when the courses begin?",
                answer: "At 7 pm"
            },
            {
                myMessage: "Thanks!",
                answer: "Don't mention it :)"
            }
        ],
        [
            {
                myMessage: "Good afternoon!",
                answer: "Hello"
            },
            {
                myMessage: "Let's do something cool today!",
                answer: "++++"
            }
        ]
        
    ]

    const showMessageHistory = () => {
        return <div className="message_history">
            {messageHistory[activeChat]?.map(message => {
                return (
                        <div>
                            <p className="my_message message">{message.myMessage}</p>
                            <p className="answer message">{message.answer}</p>
                        </div>                    
                )
            })}
        </div>
    }

    return(
        <div className="chat_container">
            <div className="chat_header">
                <img className="chat_header_img" src={contacts[activeChat]?.image}/>
                <p>{contacts[activeChat]?.name}</p>
                {/* {activeChat ? contacts[activeChat].name : "Pick a chat to begin"} */}
            </div>
            <div className="chat_history">
                {showMessageHistory()}
            </div>
            <div className="message_input">
                <input  type="text" placeholder="Enter your message"/>
                <button className="send_button">Send</button>
            </div>
        </div>
    )
}

export default Chat;