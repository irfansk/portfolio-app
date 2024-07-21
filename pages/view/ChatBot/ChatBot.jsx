import Image from 'next/image'
import React, {useState} from 'react';
import sendIcon from '@/public/assets/Icon/send.svg';
import chatIcon from '@/public/assets/Icon/Chat.svg';
import chatBotService from '../../../components/ChatBotService';
import Messages from './Messages';

const ChatBot = () => {

  const [messages, setMessages] = useState([
    { from: "bot", text: {message: "Hi, My Name is Irfan", url: "", type: "", action: []}},
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChat = () => {
    setIsChatOpen(!isChatOpen);
  }

  const inputChange = (event) => {
    setInputMessage(event.target.value);
  }

  const handleSendButton = () => {
    if(!inputMessage.trim().length) {
      return;
    }
    renderChatBody(inputMessage, "user");
    getChatBotResponse(inputMessage);
    setInputMessage("");
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if(!inputMessage.trim().length) {
        return;
      }
      renderChatBody(inputMessage, "user");
      getChatBotResponse(inputMessage);
      setInputMessage("");
    }
  }

  const handleActionMessage = (inputMessage) => {
    renderChatBody(inputMessage, "user");
    getChatBotResponse(inputMessage);
    setInputMessage("");
  }

  const renderChatBody = (text, type) => {
    if (type === "user") { 
      setMessages((old) => [...old, { from: "user", text: text }]);
    } else {
      setTimeout(() => {
        setMessages((old) => [...old, { from: "bot", text: text }]);
      }, 200);
    }
  };

  const getChatBotResponse = (userInput) => {
    chatBotService.getResponce(userInput).then((response) => {
      console.log("botResponse>>",response)

      if (response === undefined) {
        response = "Please try something else";
      }
      renderChatBody(response, "bot");
    }).catch((error) => {
      // Bot response error
      console.log("Bot response error", error);
    });
  };
  
  return (
    <>
      <div onClick={handleChat} className={isChatOpen ? 'collapse' : ''}>
        <div className="chat_icon">
          <Image
            width={24}
            height={24} 
            src={"/assets/Icon/Chat.svg"} 
            alt={"Chat Icon"}
          />
        </div>
      </div>
      <div className={isChatOpen ? 'chat_container' : 'collapse'}>
        <div className="chat_header" onClick={handleChat}>
          <div className="logo">
            <Image
              width={48}
              height={48} 
              src={"/assets/Icon/Chat.svg"} 
              alt={"Chat Icon"}
            />
          </div>
          <div className="title">Chat</div>
        </div>
        <div className="chat_body">
          <Messages messages={messages} handleActionMessage={handleActionMessage} />
        </div>
        <div className="chat_input">
          <div className="input_sec">
            <input 
              type="text" 
              value={inputMessage}
              className="chat_input"
              placeholder="Type the message ..."
              autoComplete="off"
              autoFocus={true}
              onKeyDown={ handleKeyDown }
              onChange={ inputChange }
            />
          </div>
          <div className="send" onClick={ handleSendButton } >
            <Image
              width={48}
              height={48} 
              src={"/assets/Icon/send.svg"} 
              alt={"Send"}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default ChatBot;