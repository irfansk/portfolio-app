import React, { useState } from "react";
import ContactMessageCode from "./view/ContactMessageCode";
import ContactForm from "./view/ContactForm";
import MobileSocials from "./view/mobileContact";
import SuccessMessage from "./view/ContactSuccess";
import Header from "./view/Header";
import Footer from "./view/Footer";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [messageReceived, setMessageReceived] = useState("");

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    try {
      const data = {
        name,
        email,
        message,
      };
      await fetch("https://formspree.io/f/xqkggljk", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      });
      // .then(response => {
      //   if (response.ok) {
      //     status.innerHTML = "Thanks for your submission!";
      //     form.reset()
      //   } else {
      //     response.json().then(data => {
      //       if (Object.hasOwn(data, 'errors')) {
      //         status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
      //       } else {
      //         status.innerHTML = "Oops! There was a problem submitting your form"
      //       }
      //     })
      //   }
      // }).catch(error => {
      //   status.innerHTML = "Oops! There was a problem submitting your form"
      // });
      setLoading(false);
      // clear form
      setName("");
      setEmail("");
      setMessage("");
      setMessageReceived(name);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
    <Header />
    <div id="resume" className="about background-alt">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Send me a message</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div
              id="_contact-me"
              className="relative m-auto mb-16 flex h-max w-full max-w-[85vw] flex-col items-center justify-between rounded-[15px] bg-dark-100/20 pb-16 md:mb-16 md:max-w-[70vw] md:flex-row md:pb-16"
            >
              {messageReceived ? (
                <SuccessMessage
                  senderName={messageReceived}
                  toggleNewForm={() => setMessageReceived("")}
                />
              ) : (
                <ContactForm
                  receiveName={(val) => setName(val)}
                  receiveEmail={(val) => setEmail(val)}
                  receiveMessage={(val) => setMessage(val)}
                  submitMessage={() => {
                    sendMessage();
                  }}
                  loading={loading}
                />
              )}
              <div className="absolute left-1/2 top-[40%] hidden h-[50%] w-[1px] -translate-y-1/2 -translate-x-1/2 bg-gray-100 md:block" />
              <ContactMessageCode name={name} email={email} message={message} />
              <MobileSocials />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Contact