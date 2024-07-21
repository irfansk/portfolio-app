import React, { useEffect, useRef } from "react";
import Image from "next/image";
import userIcon from '@/public/assets/Icon/User.svg';
import botIcon from '@/public/assets/Icon/Bot.svg';
import linkIcon from '@/public/assets/Icon/Link.svg';
import YoutubeVideo from "./YoutubeVideo";

const Messages = (props) => {
    
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  const actionClick = (event) => {
    props.handleActionMessage(event.currentTarget.textContent);
  }

  return (
    <>
      {props.messages?.map((item, index) => {
        if (item.from === "bot") {
          return (
            <div className="bot_response_container" key={index}>
                <Image
                  className="bot_response_container_icon"
                  width={24}
                  height={24} 
                  src={"/assets/Icon/Bot.svg"} 
                  alt={"Bot Icon"}
                />
                <div style={{marginBottom: 'auto'}}>
                  <div 
                    className="chatbot_message"
                    style={item.text.type === "" ? {borderRadius: '18px 18px 18px 0px'} : {borderRadius: '18px 18px 0px 0px'}}
                  >
                    {item.text.message}
                  </div>

                  {item.text.type === "Link" ? 
                    <div className="chatbot_message_url">
                      <a 
                        href={item.text.url}
                        target="_blank" rel="noopener noreferrer"
                        style={{textDecoration: 'none', color: "#4CABF2"}}
                      >
                        <Image
                          style={{paddingRight: '5px', height: '12px', display: 'inline-block'}}
                          width={24}
                          height={24} 
                          src={"/assets/Icon/Link.svg"} 
                          alt={"Link Icon"}
                        />
                        View More
                      </a>
                    </div>
                  : null}

                  {item.text.type === "Video" ?
                    <YoutubeVideo embedId={item.text.url} />
                  : null }

                  {item.text.type === "List" ?
                    <div className="chatbot_message_action">
                      {item.text.action.map((actionMessage, i) => {
                        return <div className="action_message" onClick={actionClick} key={i}>{actionMessage}</div>
                      })}
                    </div>
                  : null }
                  
                </div>
            </div>
          );
        } else {
          return (
            <div className="user_response_container" key={index}>
                <div className="user_message">
                  {item.text}
                </div>
                <Image
                  className="user_response_container_icon"
                  width={35}
                  height={35} 
                  src={"/assets/Icon/User.svg"} 
                  alt={"User Icon"}
                />
            </div>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </>
  );
};

export default Messages;
